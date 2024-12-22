import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import TechInterests from '../components/TechInterests';

const About = () => {
  const advancedClasses = [
    { name: "Applied Computer Vision", professor: "Prof. Austin Reiter" },
    { name: "Deep Learning for Computer Graphics", professor: "Prof. Corey Toler-Franklin" },
    { name: "Natural Language Processing", professor: "Prof. Daniel Bauer" },
    { name: "Artificial Intelligence", professor: "Prof. Ansaf Salleb-Aouissi" },
    { name: "3D User Interfaces & Augmented Reality", professor: "Prof. Steven K. Feiner" },
    { name: "Computer Graphics", professor: "Prof. Hadi Fadaifard" },
    { name: "Computer Animation", professor: "Prof. Changxi Zheng" }
  ];

  return (
    <AnimatedPage>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Bio ✍️</h1>
        <p className="mb-4">
          Hi there! I'm Ray Forman, a senior Computer Science student at Columbia with a passion for entrepreneurship, technology, and innovation.
        </p>
        <p className="mb-4">
          I'm originally from Northern Virginia but New York is my family home. When I'm not coding, you can find me learning new languages, practicing the guitar, or watching my New York Sports teams (Knicks, Mets, and Jets).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Classes taken at Columbia 🎓</h2>
        <ul className="list-disc list-inside mb-8">
          {advancedClasses.map((classInfo, index) => (
            <li key={index} className="mb-2">
              {classInfo.name} <i className="text-gray-400">- {classInfo.professor}</i>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Technical Skills 👨‍💻</h2>
        <TechInterests />
      </div>
    </AnimatedPage>
  );
};

export default About;