import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import LazyImage from '../components/LazyImage';

const TimelineNode = ({ isActive }) => (
  <div className="absolute left-0 top-0 w-11 h-6 -translate-x-1/2 bg-gray-800 rounded-full border-4 border-gray-300 z-10" />
);

const WorkCard = ({ title, company, description, technologies, image, link, startDate, endDate, isLast }) => (
  <motion.div 
    className="mb-16 relative pl-4 sm:pl-12"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <TimelineNode isActive={isLast} />
    <div className="absolute left-4 sm:left-12 top-0 text-xs sm:text-sm text-gray-400 w-20 sm:w-40">
      {startDate}
      <br />
      {endDate}
    </div>
    <motion.div 
      className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg ml-24 sm:ml-40"
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-4 h-16 sm:h-24 overflow-hidden rounded-lg">
        <LazyImage 
          src={image} 
          alt={company} 
          className="w-full h-full object-contain bg-gray-700"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-base sm:text-lg text-gray-300 mb-2">{company}</h4>
      <p className="text-sm sm:text-base text-gray-300 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-200 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors">
          Learn More →
        </a>
      ) : (
        <span className="text-sm sm:text-base text-gray-500 italic">Confidential Work</span>
      )}
    </motion.div>
  </motion.div>
);

const Work = () => {
  const workExperiences = [
  {
      title: "AI Research Scientist",
      company: "Columbia Engineering - Software Systems Lab",
      startDate: "September 2024",
      endDate: "Present",
      description: "Leading research on LLM security and vulnerability assessment under Professor Chengzhi Mao and Professor Junfeng Yang. Developed novel techniques for analyzing LLM vulnerabilities to membership inference attacks and jailbreaking attempts. Currently formulating a statistical mathematical framework using Bayesian learning to model and predict the impact of fine-tuning on LLM next-token prediction. Created InsultGPT, successfully demonstrating vulnerabilities in ChatGPT-4 through advanced prompt engineering and fine-tuning techniques.",
      technologies: ["LLM Security", "Bayesian Learning", "Prompt Engineering", "Fine-tuning", "GPT Models", "Statistical Modeling", "Python", "PyTorch"],
      image: "/cscu_logo1-nobg.png",
      link: null
    },
    {
      title: "Machine Learning Engineering Intern",
      company: "Spotify - Content Understanding",
      startDate: "June 2024",
      endDate: "August 2024",
      description: "Developed end-to-end machine learning pipelines for content moderation, leveraging state-of-the-art multimodal ML techniques with OpenAI's CLIP model. Created data preprocessing workflows, fine-tuned models, and built evaluation dashboards, enhancing content quality and safety across the platform.",
      technologies: ["Python", "PyTorch", "CLIP", "GCP", "BigQuery", "Jupyter", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      image: "/spotify-logo2.png",
      link: null
    },
    {
      title: "Full-Stack Software Engineering Intern",
      company: "HoneyHive - AI Developer Platform for LLM Applications",
      startDate: "January 2024",
      endDate: "May 2024",
      description: "Contributed to the design and implementation of advanced, filterable dashboards for in-depth LLM performance analysis. Enabled users to benchmark models, compare hyperparameters, and select optimal LLM providers efficiently. Enhanced the platform's dataset management features to support multiple file types (JSON, JSONL, CSV), improving error handling and scalability for large datasets.",
      technologies: ["React", "JavaScript", "Node.js", "LLM", "Data Visualization", "JSON", "CSV"],
      image: "/honeyhive-logo.png",
      link: null
    },
    {
      title: "AI/ML Visiting Research Scientist",
      company: "Peking University - Center on Frontiers of Computing Studies",
      startDate: "June 2023",
      endDate: "July 2023",
      description: "Conducted AI/ML research at the Center on Frontiers of Computing Studies. Shadowed leading researchers on projects integrating LLMs with RLHF for robot learning and multi-modal intelligence. Engaged in workshops and conferences on LLM applications, RLHF, and Federated Learning. Attended tech demos at major Chinese AI institutions including Huawei, Baidu, and ByteDance, gaining insights into cutting-edge AI applications.",
      technologies: ["LLMs", "RLHF", "Robot Learning", "Multi-modal AI", "Federated Learning"],
      image: "/pku-logo.png",
      link: null
    },
    {
      title: "Machine Learning Engineering Intern",
      company: "Aren - AI-Powered Platform for Infrastructure Management",
      startDate: "June 2022",
      endDate: "September 2022",
      description: "Engineered a deep learning pipeline for crack detection in infrastructure imagery using PyTorch. Facilitated comprehensive damage reports for clients across multiple structure types. Evaluated 25 semantic segmentation models, comparing IoU, accuracy, precision, recall, and F1 scores. Built and deployed a data preprocessing pipeline with augmentation using the Albumentations library.",
      technologies: ["Python", "PyTorch", "Deep Learning", "Semantic Segmentation", "Albumentations", "Data Preprocessing"],
      image: "/aren-logo.png",
      link: null
    },
    {
      title: "Project Management Intern",
      company: "Ostaz by Inspired - Leading Online Private Tutoring Platform in the MENA Region",
      startDate: "June 2021",
      endDate: "August 2021",
      description: "Completed an explanatory analysis of the initiative's participation findings to improve the startup's business forecasting. Analyzed descriptive data from the EdTech startup's 50K+ client database to incorporate demand in college programs in MENA and optimize data collection through better team distribution of dashboard reports and centralization of key findings. Engaged in strategy meetings with the board to investigate potential office expansion in Dubai based on inferential analysis.",
      technologies: ["Data Analysis", "Business Forecasting", "EdTech", "Strategy", "Project Management"],
      image: "/ostaz-logo.png",
      link: null,
      location: "Beirut, Lebanon"
    }
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Career Progression</h1>
        <div className="relative pl-1 sm:pl-3">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600"/>
          {workExperiences.map((work, index) => (
            <WorkCard 
              key={index} 
              {...work} 
              isLast={index === 0}
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Work;