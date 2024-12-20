import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import ProfilePhoto from '../components/ProfilePhoto';
import Introduction from '../components/Introduction';
import PersonalityTraits from '../components/PersonalityTraits';

const SocialButton = ({ Icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-700 p-2 rounded-full"
    aria-label={label}
  >
    <Icon size={24} />
  </motion.a>
);

const Home = () => {
  return (
    <AnimatedPage>
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfilePhoto />
          <Introduction />
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">📫 Get in Touch</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <SocialButton Icon={Github} href="https://github.com/rayforman" label="GitHub" />
              <SocialButton Icon={Twitter} href="https://twitter.com/rene_sultan" label="Twitter" />
              <SocialButton Icon={Linkedin} href="https://linkedin.com/in/rayforman" label="LinkedIn" />
              <SocialButton Icon={Instagram} href="https://instagram.com/rene.sultan" label="Instagram" />
              <SocialButton Icon={Mail} href="mailto:rs4240@columbia.edu" label="Email" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">🚀 What I'm Up To</h2>
              <p className="text-gray-300">
                I am taking advanced machine learning PhD seminars at Columbia to develop a deeper intuition about building robust and scalable Machine Learning solutions. To further develop this intuition, I am seeking a New Grad role in Machine Learning Engineering at a cutting-edge company at the forefront of AI and ML R&D. I am looking for a community of passionate, self-starting, innovative, collaborative, growth-oriented, and fun-loving individuals to pioneer the next generation of ML solutions together.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">⭐ My Values</h2>
              <PersonalityTraits />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">🤖 My current perspective on AI and ML</h2>
              <p className="text-gray-300 mb-4">
                Currently, I am exploring different avenues in Machine Learning Solutions Design to develop an intuition on how to design effective, efficient, and scalable solutions for a wide range of real-world problems by understanding the underpinnings, strengths, and weaknesses of various machine learning architectures and systems. I deeply believe that as machine learning practitioners, we are experiencing a paradigm shift in how we build ML solutions across industries. This shift is driven primarily by the recent commercialization and open licensing of incredibly powerful models (such as LLMs), leveraging their massive pre-training, seamless integration, and scaling capabilities to build robust and scalable ML solutions faster than ever before.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">💭 Problems I am passionate about</h2>
              <ul className="list-none space-y-2">
                <li>🧠 How to reach AGI by developing a better understanding of the human brain and psyche</li>
                <li>💬 How to communicate with LLMs to unlock their full potential in any given task</li>
                <li>🤖 How to build AI systems that allow humans to delegate suitable tasks, enabling them to focus on more creative and general intelligence-related problems</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;