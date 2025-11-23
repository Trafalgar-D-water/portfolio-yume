export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string; // Added link property
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'share me (pinterest clone)',
        description: 'A full-featured online image sharing platform with user authentication, filtering, and search functionality.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Tailwind', 'o-auth'],
        image: 'https://i.pinimg.com/736x/ba/20/8c/ba208c6574370aa5a9bf031343494a1d.jpg',
        link: 'https://yumeshare.netlify.app/' // Placeholder
    },
    {
        id: '2',
        title: 'Bit Torrent Client',
        description: 'Lightweight BitTorrent client capable of peer discovery, piece-wise file transfer, and real-time download progress tracking, built to explore distributed file-sharing protocols',
        technologies: ['node.js', 'socket.io', 'http', 'udp', 'p2p', 'bencode parser'],
        image: 'https://i.pinimg.com/1200x/af/d2/74/afd274b8faadfe3e156de90bb1392dca.jpg',
        link: 'https://github.com/Trafalgar-D-water/TorrentClient' // Placeholder
    },
    {
        id: '3',
        title: 'chat app Websorket',
        description: 'Real-time chat Application  with webscoket implementation',
        technologies: ['html', 'css', 'javascript', 'websocket', 'websocket server', 'java', 'springboot', 'sql', 'hybernate'],
        image: 'https://i.pinimg.com/736x/d8/c1/d8/d8c1d83b649d965ab8363b9333819574.jpg',
        link: 'https://github.com/Trafalgar-D-water/chat-app-websocket' // Placeholder
    },
    {
        id: '4',
        title: 'Terminal-based-text-editor',
        description: 'Viewer is a simple text viewer/editor built in Java using the Java Native Access (JNA) library. It allows users to view and edit text files in a terminal-like interface.',
        technologies: ['JNA', 'Java8', 'linux', 'bash', 'terminal', 'text editor'],
        image: 'https://i.pinimg.com/1200x/91/89/33/9189337f7e0970e76206df6074a6dafb.jpg',
        link: 'https://github.com/Trafalgar-D-water/Terminal-based-text-editor' // Placeholder
    },
    // {
    //     id: '5',
    //     title: 'Crypto Tracker',
    //     description: 'Cryptocurrency price tracker with historical data charts and portfolio management features.',
    //     technologies: ['Next.js', 'Web3', 'CoinGecko API', 'Recharts'],
    //     image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80',
    //     link: 'https://github.com/priyanshupatnayak' // Placeholder
    // },
    // {
    //     id: '6',
    //     title: 'Social Media Dashboard',
    //     description: 'Analytics dashboard for social media accounts with engagement metrics and reporting tools.',
    //     technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    //     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    //     link: 'https://github.com/priyanshupatnayak' // Placeholder
    // }
];
