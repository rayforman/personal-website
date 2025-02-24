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
      title: "AdGenture: A Generative Adventure Game",
      description: "Crafting an interactive storytelling platform that combines OpenAI's GPT API for narrative generation with DALL-E image synthesis, creating a cohesive adventure experience where NLP-generated story segments automatically trigger matching visual scene generation. Developed a seamless integration system that pipes narrative outputs into visual prompts, merging modified Wuerstchen architecture with sprite generation techniques, while using a custom-trained model to transform DALL-E outputs into consistent pixel art visuals. The entire pipeline operates through a user-friendly tkinter interface, allowing players to shape their adventure through choices that trigger new story branches and matching artwork in real-time.",
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
        <h1 className="text-4xl font-bold mb-4">Personal Projects</h1>
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