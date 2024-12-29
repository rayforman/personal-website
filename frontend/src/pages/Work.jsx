import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import LazyImage from '../components/LazyImage';

const TimelineNode = ({ isActive }) => (
  <div className="absolute left-0 top-0 w-11 h-6 -translate-x-1/2 bg-gray-800 rounded-full border-4 border-gray-300 z-10" />
);

const WorkCard = ({ title, company, description, technologies, image, link, startDate, endDate, isLast, location }) => (
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
          className="w-full h-full object-contain bg-gray-100"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <h4 className="text-base sm:text-lg text-gray-300 mb-2">{company}</h4>
      {location && <p className="text-sm sm:text-base text-gray-400 mb-2">{location}</p>}
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
      title: "Junior Software Engineer",
      company: "LEAP NSF - Pierre Gentine Lab",
      startDate: "August 2024",
      endDate: "Present",
      description: "My latest and most impactful work to date: building a cutting edge climate model innovation. Developing an automated LLM code translation pipeline to build the world’s first Python-based climate model. Product will revolutionize climate data accessibility and empower researchers with ML techniques and modern GPU computing power. Implemented a Retrieval Augmented Generation (RAG) module using Abstract Syntax Trees and example translations that improved Claude Sonnet 3.5 Fortran-to-Python translation times by 60% and reduced manual coding errors by 30%.",
      technologies: ["LLMs", "Retrieval Augmented Generation", "Prompt Engineering", "Fine-tuning", "GPT Models", "Python", "PyTorch", "Fortran", "Git"],
      image: "/leapnsf_full.png",
      link: 'https://leap.columbia.edu/',
      location: "New York City, New York"
    },
    {
      title: "Data Analytics Intern",
      company: "Earnest Analytics",
      startDate: "June 2024",
      endDate: "August 2024",
      description: "My exciting junior summer internship in Flatiron, NYC. Conducted in-depth analysis of proprietary consumer transaction data and corporate filings using advanced SQL queries, delivering actionable insights into financial health and performance ahead of quarterly earnings. Contributed a new key indicator to an earnings prediction algorithm leveraging consumer transaction data and machine learning techniques, improving predictive accuracy by 5% to better inform client decision-making. Collaborated across teams to deliver actionable insights to stakeholders at premier fintech and financial institutions.",
      technologies: ["Machine Learning", "Predicive Analysis", "BigQuery", "SQL", "Tableau", "Data Visualization", "Financial Analysis", "FinTech", "Excel"],
      image: "/earnest.png",
      link: 'https://www.earnestanalytics.com/',
      location: "New York City, New York"
    },
    {
      title: "Partner Management Intern",
      company: "Columbia Climate School - Development and Partnerships",
      startDate: "September 2022",
      endDate: "Present",
      description: "My longest ongoing part-time job during college. Cultivating and managing partnerships between philanthropic climate research funders and Columbia researchers. Created the Columbia Climate School Partner Database using MongoDB. Analyzed 100+ climate research funders to identify potential partners for the Climate School. Developed a data-driven strategy to engage with partners and secure funding for the Climate School's research initiatives.",
      technologies: ["MongoDB", "Excel", "Salesforce", "Project Management", "Business Development", "Climate Tech"],
      image: "/climateschool_.png",
      link: 'https://www.climate.columbia.edu/',
      location: "New York City, New York"
    },
    {
      title: "Founding Engineer",
      company: "Sustainable U - Climate Startup",
      startDate: "March 2022",
      endDate: "February 2023",
      description: "My first startup experience! Spearheaded the application design for a campus app using a Swift / Node.js tech stack, enabling discovery and attendance of 50+ sustainability events within the first three months post-launch. Conducted beta testing with 10+ student organizations, integrating feedback to improve engagement by 30%. Delivered an MVP within 6 months, achieving 85% retention through iterative product development.",
      technologies: ["Swift", "Node.js", "Full-Stack Development", "Startup", "Product Management", "UI/UX Design", "Beta Testing"],
      image: "/sustainableu_.png",
      link: null,
      location: "New York City, New York"
    },
    {
      title: "Chapter President",
      company: "Columbia Beta Theta Pi",
      startDate: "June 2022",
      endDate: "September 2022",
      description: "My proudest leadership achievement during college. Chaired a ten-person executive board responsible for planning, budgeting, and executing a year-long calendar of projects, and directed weekly chapter meetings of 60+ members. Managed a $50,000 semesterly operating budget, membership dues, and fundraising. Inaugurated enduring traditions: House Improvements Fund, Brotherhood Retreats, ticketed events at downtown venues, alumni receptions, and a spring philanthropy concert known as “Beta Jams.” Results: Increased membership by 42% to 67 active members and increased operating budget by 48%. Raised $10,000 through on-campus partnership events for the UN Sustainable Development Goals.",
      technologies: ["Executive Leadership", "Project Management", "Team Management", "Public Speaking", "Financial Management", "Strategic Planning", "Conflict Resolution", "Risk Management", "Fundraising"],
      image: "/betalogo_.png",
      link: 'https://www.cc-seas.columbia.edu/student-group/beta-theta-pi',
      location: "New York City, New York"
    },
    {
      title: "Bartender",
      company: "The Heights Bar & Grill",
      startDate: "June 2022",
      endDate: "December 2022",
      description: "First job in New York City as a college student trying to get by. Managed a high-volume bar in Manhattan, serving 200+ customers per night during 12 hour shifts late into the night. Learned to multitask and prioritize under pressure, ensuring a positive customer experience. The most interesting people I've ever met to this day were across that bar.",
      technologies: ["Bartending", "Customer Service", "Time Management", "Interpersonal Communication", "Relationship Building"],
      image: "/heights.png",
      link: 'https://www.theheightsnyc.com/',
      location: "New York City, New York"
    },
    {
      title: "Line Cook",
      company: "Harvey Cedars Shellfish Co.",
      startDate: "June 2020",
      endDate: "August 2020",
      description: "Where it all began. During COVID summer, worked in a fast-paced kitchen as a steamer and griller, preparing 500+ dinners a night. Learned the thrive in extremely high-pressure environments and developed strong teamwork skills. Left every night dripping in sweat and fish oil. I loved it.",
      technologies: ["Cooking", "Steaming", "Grilling", "Team Collaboration", "Time Management", "High-Pressure Environments", "Resilience"],
      image: "/shellfish.png",
      link: 'https://www.harveycedarsshellfishco.com/',
      location: "Long Beach Island, New Jersey"
    },
    {
      title: "Varsity Captain",
      company: "Oakton Rowing",
      startDate: "September 2020",
      endDate: "June 2021",
      description: "My four-year high school athletic career. Led a 40-person team to the Virginia State Championships, winning the program's first ever Gold Medal in the Men's 4+ category. Coordinated daily practices, managed team logistics, and fostered a culture of excellence during the challenging COVID-19 era. Hosted informal \"Captain's Practices\" in the off-season to maintain fitness and organized \"Erg-a-Thon\" fundraisers raising $10,000 for new equipment and team travel.",
      technologies: ["Leadership", "Athletics", "Inspiration", "Public Speaking", "Team Management", "Resilience"],
      image: "/oakton-crew.png",
      link: 'https://www.oaktoncrew.com/',
      location: "Occoquan, Virginia"
    },
    {
      title: "Club President",
      company: "Oakton High School Physics Club",
      startDate: "September 2019",
      endDate: "June 2020",
      description: "My first leadership role in high school. Organized weekly meetings, guest speakers, and field trips to DC-based Physics Expositions. Garnered interest in physics by discussing astrophysics, quantum mechanics, and modern theory not typically covered in high school classrooms. Created and managed a discord server with 100+ members for communication and community building around shared interest. Led a team of 20 students to compete in the Physics Olympiad, achieving a 90% pass rate.",
      technologies: ["Leadership", "Teaching", "Inspiration", "Public Speaking", "Management"],
      image: "/physics-club.png",
      link: 'https://ohsphysicsclub.weebly.com/',
      location: "Vienna, Virginia"
    }
  ];

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">My Journey</h1>
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