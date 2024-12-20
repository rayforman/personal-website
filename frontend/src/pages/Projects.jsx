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
      title: "HTTP Client-Server Model and Dynamic Web Services",
      description: "Developed a comprehensive system implementing an HTTP client-server model, a multi-process dynamic web server, and an interactive web application using WebSocket API. This project showcases advanced programming in C, including network programming, data structures, and real-time communication. (Gist link available to recruiters upon request, also included in my resume)",
      technologies: ["C", "Socket Programming", "HTTP Protocol", "WebSocket API", "Multi-process Programming", "Data Structures", "File I/O"],
      image: "/http-project.png",
      link: null
    },
    {
      title: "Advanced 2048 Game Solver: A Comprehensive AI Challenge",
      description: "Developed an advanced AI solver for the 2048 game using the expectiminimax algorithm, alpha-beta pruning, and sophisticated heuristics. This project explores the depth of automated game-playing strategies, focusing on optimizing moves, managing randomness, and maximizing scores, consistently achieving high performance. (Gist link available to recruiters upon request, also included in my resume)",
      technologies: ["Python 3", "Expectiminimax Algorithm", "Alpha-beta Pruning", "Heuristic Functions", "AI Game Solving", "Modular AI Framework"],
      image: "/2048-logo.png",
      link: null
    },
    {
      title: "Rock-Paper-Scissors-Lizard-Spock Shape Interaction Simulator",
      description: "A Java-based simulation that showcases the interaction of Rock, Paper, Scissors, Lizard, and Spock using an object-oriented approach. The project employs various design patterns, including Factory, Singleton, Observer, Strategy, Command, and Visitor, to create a clean, scalable, and maintainable system with a dynamic GUI.",
      technologies: ["Java", "Swing", "AWT", "Factory Pattern", "Singleton Pattern", "Observer Pattern", "Strategy Pattern", "Command Pattern", "Visitor Pattern"],
      image: "/rpskl-logo.png",
      link: "https://gist.github.com/rayforman/4f5e835fc6557878579ffd0a32ac54c6"
    },
    {
      title: "Trigram Language Model Implementation",
      description: "An NLP project that implements a Trigram Language Model to predict word occurrence based on its preceding words in a sentence. It covers corpus processing, n-gram generation, probability calculation, and perplexity computation, demonstrating the model's application in tasks like text generation and essay scoring.",
      technologies: ["Python 3", "NLP", "Trigram Model", "N-gram Generation", "Perplexity Calculation", "Corpus Processing"],
      image: "/trigram-logo.png",
      link: "https://gist.github.com/rayforman/9f875c0f8834e4c151ffa4e2f66db2b1"
    },
    // Add more projects here as we go
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Personal Projects</h1>
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