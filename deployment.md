# Deployment Guide

This application is a full-stack Node.js application built with:
- **Frontend**: React + Vite
- **Backend**: Express.js
- **Language**: TypeScript

Since it has a custom server (`server/index.ts`), it requires a Node.js hosting environment. **Static hosting (like Netlify or Vercel's default static mode) will NOT work for the API routes.**

## Recommended Hosting: Render.com (Free Tier Available)

Render is a great choice because it supports Node.js web services natively.

### Steps to Deploy on Render

1.  **Push your code to GitHub**:
    - Ensure your project is in a GitHub repository.

2.  **Create a Web Service**:
    - Go to [dashboard.render.com](https://dashboard.render.com/).
    - Click **New +** -> **Web Service**.
    - Connect your GitHub repository.

3.  **Configure the Service**:
    - **Name**: `my-portfolio` (or whatever you like)
    - **Region**: Choose one close to you.
    - **Branch**: `main` (or your default branch)
    - **Runtime**: `Node`
    - **Build Command**: `npm install && npm run build`
    - **Start Command**: `npm start`
    - **Instance Type**: `Free` (for hobby projects)

4.  **Environment Variables**:
    - If you have a `.env` file (e.g., for API keys), add them in the "Environment" tab.
    - For this project, you might not strictly need any for the basic demo, but `NODE_ENV` is usually set to `production` automatically.

5.  **Deploy**:
    - Click **Create Web Service**.
    - Render will clone your repo, install dependencies, build the frontend and backend, and start the server.

### How it Works
- The `npm run build` command builds both the client (Vite) and the server.
- The `npm start` command runs the built server (`dist/server/node-build.mjs`).
- The server serves the static frontend files.
- **Note:** The contact form now uses a client-side `mailto` link, so no backend API configuration is needed for emails.

## Alternative: Railway.app

Railway is another excellent option with a similar workflow.

1.  Connect GitHub repo.
2.  Railway usually auto-detects `package.json`.
3.  Ensure the `start` command is `npm start`.
4.  Deploy.

## Note on Vercel / Netlify
If you absolutely must use Vercel or Netlify, you would need to refactor the `server/index.ts` into **Serverless Functions** (e.g., moving `handleContact` to `api/contact.ts` in a Vercel-specific structure). The current setup is designed for a long-running Node.js server.
