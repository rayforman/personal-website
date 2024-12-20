import React from 'react';
import { motion } from 'framer-motion';

const PersonalityTraits = () => {
  const traits = [
    { emoji: '🧠', text: 'Inquisitive Learner' },
    { emoji: '💡', text: 'Innovation Enthusiast' },
    { emoji: '🏗️', text: 'Resilient Builder' },
    { emoji: '🌱', text: 'Growth Mindset' },
    { emoji: '🤝', text: 'Honest Collaborator' },
    { emoji: '🤜🤛', text: 'Team Player' },
    { emoji: '💬', text: 'Empathetic Listener' },
    { emoji: '🌍', text: 'Trilingual Traveler' },
    { emoji: '👥', text: 'People Connector' },
    { emoji: '🙏', text: 'Grateful Individual' },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-2"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {traits.map((trait, index) => (
        <motion.div 
          key={index} 
          className="flex items-center space-x-2 whitespace-nowrap"
          variants={item}
        >
          <span className="text-2xl">{trait.emoji}</span>
          <span className="text-sm">{trait.text}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PersonalityTraits;