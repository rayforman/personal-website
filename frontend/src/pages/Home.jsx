import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
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
            <div className="flex flex-wrap justify-center gap-4">
              <SocialButton Icon={Github} href="https://github.com/rayforman" label="GitHub" />
              <SocialButton Icon={Linkedin} href="https://linkedin.com/in/rayforman" label="LinkedIn" />
              <SocialButton Icon={Mail} href="mailto:raymond.forman@columbia.edu" label="Email" />
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
              <h2 className="text-2xl font-semibold mb-4">🧑‍💻 About Me</h2>
              <p className="text-gray-300">
                I recently graduated with a bachelors degree in Computer Science from Columbia with a focus on Machine Learning and a minor in Business Management. I also work part time as a Software Engineer with a passion for building innovative and user-focused software solutions. I am now actively seeking NYC-based full-time opportunities to work on impactful projects that leverage my skills in software engineering, business, and artificial intelligence to solve challenging problems. I am specifically interested in high potential startups and collaborating with like-minded individuals to build innovative solutions that push the boundaries of what is possible with technology. Feel free to reach out to me if you have any interesting projects or opportunities you would like to discuss!
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
              <h2 className="text-2xl font-semibold mb-4">🚀 What I'm Up To</h2>
              <p className="text-gray-300 mb-4">
                Lately, I have been excited by the possibilities of pairing popular software APIs with LLMs to create innovative features. Here are a few: <br />
                1) I built a Spotify AI Playlist Generator that uses a GPT-3 language model to generate playlists based on user input. Currently expanding to detect specific artists and songs. <br />
                2) I am working on an Cryptocurrency Algorithmic Trader for highly volatile cryptos using a combination of technical analysis and online sentiment analysis to predict price movements and execute trades.
                <br /><br />
                <i>Update: I am now exploring NYC-based full-time opportunities in full-stack and AI development.</i>
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">💭 Problems I am passionate about</h2>
              <ul className="list-none space-y-2">
                <li>💸 How can we democratize financial access and intelligence through technology?</li>
                <li>🌐 How can LLMs accelerate enterprise workflows and unlock new technological possibilities?</li>
                <li>🌍 How can the exploding capabilities of AI be harnessed to address climate change?</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;