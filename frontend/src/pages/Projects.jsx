import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import LazyImage from '../components/LazyImage';

const ProjectCard = ({ title, description, technologies, image, link }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="mb-4 h-48 overflow-hidden rounded-lg">
      <LazyImage 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="mb-4 flex flex-wrap">
      {technologies.map((tech, index) => (
        <span key={index} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          {tech}
        </span>
      ))}
    </div>
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
        View Project →
      </a>
    ) : (
      <span className="text-gray-500 italic">Confidential Work</span>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Coastal Data Pipeline",
      description: "Built a production-grade streaming data infrastructure that ingests NOAA buoy data every 6 minutes, processes it through Apache Airflow orchestration, and delivers real-time insights via WebSocket connections to a React dashboard. The system features sub-second API response times, Redis caching for high-frequency queries, and predictive alerting for dangerous coastal conditions. Architected with a modern tech stack featuring FastAPI, PostgreSQL, and containerized deployment.",
      technologies: [
        "FastAPI",
        "Apache Airflow",
        "PostgreSQL", 
        "Redis",
        "React",
        "TypeScript",
        "WebSocket",
        "Pandas",
        "Docker",
        "Python",
        "SQL",
        "Database Design",
        "Real-Time Streaming",
        "Data Pipeline Architecture",
        "RESTful APIs",
        "Async Programming",
        "Time-Series Analysis",
        "Data Ingestion",
        "Caching Strategies",
        "Production Deployment"
      ],
      image: "/hurricane.jpeg",
      link: null
    },
    {
      title: "Spotify AI Playlist Generator",
      description: "Built a web app using React/Node.js and the OpenAI API to generate Spotify playlists from natural language using GPT-3.5. Designed a Python microservice mapping text to Spotify's 11 audio features, integrating OAuth, REST APIs, and database functionality across three services. Now allows users to intelligently generate playlists for any mood, activity, or genre, leveraging the power of AI to enhance music discovery and curation. My go-to party trick for on-the-spot playlist generation!",
      technologies: [
        "Spotify API",
        "OpenAI API",
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
        "JavaScript/JSX",
        "Tailwind CSS",
        "Fetch API",
        "Flask",
        "CORS",
        "OAuth"
        ],
      image: "/spotify_project_full.png",
      link: 'https://github.com/rayforman/spotify-playlist-generator'
    },
    {
      title: "Cryptocurrency Algorithmic Trading Bot",
      description: "Developing an algorithmic trading program leveraging the Robinhood API to automate cryptocurrency trading, utilizing key financial and qualitative indicators to optimize personal financial management. Created a high-frequency sentiment analysis system integrating Reddit and X APIs with OpenAI's GPT-3.5 to monitor and update crypto-related sentiment in real time, enabling data-driven trading decisions.",
      technologies: [
        "Robinhood API",
        "OpenAI API",
        "Reddit API",
        "X API",
        "Technical Analysis",
        "Sentiment Analysis",
        "YAML",
        "TextBlob NLP",
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Flask",
        "CORS",
        "OAuth",
        ],
      image: "/robinhood.png",
      link: 'https://github.com/rayforman/crypto-sentiments'
    },
    {
      title: "Columbia Climate School Event Management Database",
      description: "Designed a comprehensive event management database system for the Columbia Climate School's development team, enabling efficient tracking of contacts, donors, events, and RSVPs. Developed a robust backend using PostgreSQL to handle complex queries and data relationships, ensuring reliable data integrity and retrieval. The system supports dynamic event creation, participant management, and real-time updates through a user-friendly interface, streamlining the school's event organization processes.",
      technologies: [
        "PostgreSQL",
        "React",
        "Node.js",
        "Express.js",
        "SQL",
        "Database Design",
        "YAML",
        "Data Retrieval",
        "Authentication",
        "File Uploads",
        "Mass Uploads",
        "CSV Import",
        ],
      image: "/ccs-databse.png",
      link: 'https://github.com/rayforman/climate-school-contacts'
    },
    {
      title: "AdGenture: A Generative Adventure Game",
      description: "Crafting an interactive storytelling platform that combines OpenAI's GPT API for narrative generation with DALL-E image synthesis, creating a seamless adventure experience where story segments trigger matching visual scenes. Built an integrated pipeline that transforms narrative outputs into visual prompts using modified Wuerstchen architecture and sprite generation, converting DALL-E outputs into consistent pixel art. The system operates through an intuitive tkinter interface, enabling players to shape their story through choices that generate matching narrative and artwork in real-time.",
      technologies: [
        "OpenAI GPT API",
        "DALL-E API",
        "Python tkinter",
        "Wuerstchen",
        "PyTorch",
        "CUDA",
        "Custom NLP Pipeline",
        "Image Processing Libraries",
        "Google Drive API",
        "Aliasing-Aware Pixelization",
        ],
      image: "/adgenture.png",
      link: 'https://github.com/rayforman/AdGenture'
    },
    {
      title: "V-CAST: A Video Style Transfer Model",
      description: "Developing a video style transfer application that extends the CAST framework, combining neural network-based artistic transformation with optical flow algorithms for consistent frame styling. Built a streamlined pipeline that processes videos through a modified CAST architecture while preserving temporal coherence, enabling users to transform their videos with artistic styles from reference images. The system operates through an intuitive TKinter interface, allowing real-time video stylization inspired by modern animated films' diverse artistic approaches.",
      technologies: [
        "CAST Framework",
        "Python tkinter",
        "PyTorch",
        "HuggingFace",
        "AWS",
        "CUDA",
        "PyAV",
        "Optical Flow Algorithm",
        "Neural Style Transfer",
        "Custom Loss Functions",
        "Video Processing Libraries",
      ],
      image: "/vcast-image.png",
      link: 'https://github.com/rayforman/VCAST-StyleTransfer'
    },
    {
      title: "My GPT: A Generative Pre-Trained Transformer from Scratch",
      description: "This project is exactly what it sounds like. In an effort to better understand the revolutionary \"Transformer\" architecture, introduced by Google Brain in 2017 (Vaswani et al.), I decided to build one myself, from scratch. While nowhere near as robust and human-sounding as the enterprise LLMs of today, this project taught me that GPTs at their core are not that complicated. In fact, they're quite simple-- that's what makes them brilliant. Having a line-by-line understanding of how they're built in practice gave me a strong foundation to innovate on, fine-tune, and explore new use cases of the readily available LLMs through APIs. This project commands understanding of key transformer concepts, namely self-attention, multi-head attention, and positional encodings.",
      technologies: [
        "PyTorch",
        "HuggingFace",
        "PyTorch Lightning",
        "Transformer",
        "Cuda",
        "GPTs",
        "LLM",
        "Machine Learning",
        ],
      image: "/openai.jpg",
      link: "https://github.com/rayforman/my-gpt"
    },
    {
      title: "TableTop-AR: An Augmented Reality Tower Defense Game",
      description: "An augmented reality tabletop gaming framework that enhances couch co-op experiences through shared spatial anchoring and mixed perspective gameplay. Built using Unity, the system enables multiple players wearing AR headsets to interact with a shared virtual gameboard that can be positioned and scaled in physical space. The game combines strategic tower defense mechanics in top-down view with immersive first-person combat, allowing players to seamlessly switch perspectives while defending against waves of enemies. Players can collaboratively place defensive structures and engage in direct melee combat using an intuitive control scheme that leverages raycast selection, grip-based manipulation, and joystick movement, all synchronized through Meta's shared spatial anchoring system to maintain consistent positioning across multiple AR devices.",
      technologies: [
        "Unity Game Engine",
        "Meta Shared Spatial Anchoring",
        "Unity XR Framework",
        "C#",
        "Fusion (Networking)",
        "Unity NavMesh",
        "Meta XR SDK",
        "Unity Input System",
        "Unity Particle System"
        ],
      image: "/ttar.png",
      link: null
    },
    {
      title: "2048 Game Solver: A Comprehensive AI Challenge",
      description: "Created an intelligent game-playing system for 2048 that combines expectiminimax search with strategic pruning techniques to make optimal decisions. The solver employs carefully crafted evaluation metrics to assess board states and anticipate random tile placements, consistently achieving high scores through strategic move planning. This project showcases the implementation of advanced game theory concepts and decision-making algorithms in an environment that balances deterministic strategy with probability management.",
      technologies: ["Python 3", "Expectiminimax Algorithm", "Alpha-beta Pruning", "Heuristic Functions", "AI Game Solving", "Modular AI Framework"],
      image: "/2048.png",
      link: null
    },
    {
        title: "HTTP Client-Server Model and Dynamic Web Services",
        description: "Created a full-stack web application featuring a robust backend server that communicates with clients via HTTP protocols and manages multiple processes for handling requests. The system includes a dynamic frontend interface using WebSocket technology for real-time updates. This project demonstrates expertise in low-level C programming, particularly in areas of network protocols, efficient data structure implementation, and concurrent process management.",
        technologies: ["C", "Socket Programming", "HTTP Protocol", "WebSocket API", "Multi-process Programming", "Data Structures", "File I/O"],
        image: "/http-project.png",
        link: null
    },
    {
      title: "Trigram Language Model Implementation",
      description: "Built a natural language processing system centered on a trigram model that analyzes patterns of three consecutive words to forecast the next word in a sequence. The project encompasses text preprocessing, creation of three-word sequence patterns, statistical likelihood calculations, and evaluation of model accuracy through perplexity measurements. The system's practical applications include automated content generation and assessment of writing quality.",
      technologies: ["Python 3", "NLP", "Trigram Model", "N-gram Generation", "Perplexity Calculation", "Corpus Processing"],
      image: "/trigram-logo.png",
      link: null
    },
    // Add more projects here as we go
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Notable Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;