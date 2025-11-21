import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, ExternalLink } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'priyanshu@example.com',
      href: 'mailto:priyanshu@example.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      color: 'text-blue-400'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@priyanshu',
      href: 'https://github.com',
      color: 'text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Priyanshu Patnayak',
      href: 'https://linkedin.com',
      color: 'text-blue-500'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@priyanshu_dev',
      href: 'https://twitter.com',
      color: 'text-sky-400'
    }
  ];

  return (
    <div className="p-4 md:p-6 max-w-6xl">
      {/* Code Header */}
      <div className="mb-6">
        <div className="text-syntax-comment text-sm font-mono mb-2">
          /**
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * Let's connect and build something amazing together!
        </div>
        <div className="text-syntax-comment text-sm font-mono mb-2">
          * Feel free to reach out for collaborations or just to say hi
        </div>
        <div className="text-syntax-comment text-sm font-mono">
          */
        </div>
      </div>

      <div className="font-mono text-sm mb-6">
        <span className="text-syntax-keyword">const</span>
        <span className="text-syntax-variable"> contactInfo</span>
        <span className="text-white"> = {`{`}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Methods */}
          <div>
            <div className="font-mono text-sm mb-4 ml-4">
              <span className="text-syntax-function">contactMethods</span>
              <span className="text-white">: [</span>
            </div>
            
            <div className="ml-8 space-y-4">
              {contactMethods.map((method) => (
                <div key={method.label} className="flex items-center gap-3">
                  <method.icon size={20} className={method.color} />
                  <div>
                    <div className="text-sm font-medium text-syntax-function">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm text-syntax-string hover:text-white transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-sm text-syntax-string">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="font-mono text-sm ml-4 mt-4">
              <span className="text-white">],</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="font-mono text-sm mb-4 ml-4">
              <span className="text-syntax-function">socialMedia</span>
              <span className="text-white">: [</span>
            </div>
            
            <div className="ml-8 space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:bg-white/5 p-2 rounded transition-colors group"
                >
                  <social.icon size={20} className={`${social.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <div className="text-sm font-medium text-syntax-function group-hover:text-white">
                      {social.label}
                    </div>
                    <span className="text-sm text-syntax-string group-hover:text-white">
                      {social.value}
                    </span>
                  </div>
                  <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="font-mono text-sm ml-4 mt-4">
              <span className="text-white">],</span>
            </div>
          </div>

          {/* Availability */}
          <div className="ml-4">
            <div className="font-mono text-sm mb-2">
              <span className="text-syntax-function">availability</span>
              <span className="text-white">: {`{`}</span>
            </div>
            <div className="ml-4 space-y-1">
              <div className="font-mono text-sm">
                <span className="text-syntax-function">status</span>
                <span className="text-white">: </span>
                <span className="text-syntax-string">"Open to opportunities"</span>
                <span className="text-white">,</span>
              </div>
              <div className="font-mono text-sm">
                <span className="text-syntax-function">responseTime</span>
                <span className="text-white">: </span>
                <span className="text-syntax-string">"Within 24 hours"</span>
                <span className="text-white">,</span>
              </div>
              <div className="font-mono text-sm">
                <span className="text-syntax-function">timezone</span>
                <span className="text-white">: </span>
                <span className="text-syntax-string">"IST (UTC+5:30)"</span>
              </div>
            </div>
            <div className="font-mono text-sm mt-2">
              <span className="text-white">{`}`}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="font-mono text-sm mb-4 ml-4">
            <span className="text-syntax-function">sendMessage</span>
            <span className="text-white">: () =&gt; {'{'}</span>
          </div>

          <form onSubmit={handleSubmit} className="ml-8 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-syntax-comment mb-1">
                // Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-vscode-editor border border-border rounded text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-syntax-comment mb-1">
                // Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-vscode-editor border border-border rounded text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-mono text-syntax-comment mb-1">
                // Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-vscode-editor border border-border rounded text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-syntax-comment mb-1">
                // Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-3 py-2 bg-vscode-editor border border-border rounded text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-mono text-sm"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>

          <div className="font-mono text-sm ml-4 mt-6">
            <span className="text-white">{`}`}</span>
          </div>
        </div>
      </div>

      {/* Closing bracket */}
      <div className="font-mono text-sm mt-6">
        <span className="text-white">{`};`}</span>
      </div>

      {/* Call to Action */}
      <div className="mt-8 p-4 border border-border rounded-lg bg-vscode-selection/10">
        <div className="font-mono text-sm mb-3">
          <span className="text-syntax-comment">// Let's build something awesome together!</span>
        </div>
        <p className="text-foreground">
          Whether you have a project in mind, want to collaborate, or just want to say hello, 
          I'd love to hear from you. I'm always excited to discuss new opportunities and 
          interesting challenges.
        </p>
      </div>
    </div>
  );
}
