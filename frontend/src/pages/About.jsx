import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import TechInterests from '../components/TechInterests';

const About = () => {
  const advancedClasses = [
    { name: "Unsupervised Learning", professor: "Prof. Nakul Verma" },
    { name: "Deep Learning for Computer Vision", professor: "Prof. Peter Belhumeur" },
    { name: "Computation and the Brain", professor: "Prof. Christos Papadimitriou" },
    { name: "Machine Learning", professor: "Prof. Nakul Verma" },
    { name: "Advanced Spoken Language Processing", professor: "Prof. Julia Hirschberg" },
    { name: "Natural Language Processing", professor: "Prof. Daniel Bauer" },
    { name: "Artificial Intelligence", professor: "Prof. Ansaf Salleb-Aouissi" },
    { name: "Design Using C++", professor: "Prof. Bjarne Stroustrup" },
    { name: "Clean Object-Oriented Design", professor: "Prof. John R. Kender" },
  ];

  return (
    <AnimatedPage>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">More About Me 🙋‍♂️</h1>
        <p className="mb-4">
          Hello! I'm René Sultan, a senior Computer Science student at Columbia Engineering with a passion for AI/ML and innovation.
        </p>
        <p className="mb-4">
          My journey in tech has led me to exciting opportunities. I'm constantly seeking new challenges and innovative ways to apply my skills to solve real-world problems.
        </p>
        <p className="mb-4">
          When I'm not coding or learning about the latest tech trends, you can find me writing philosophical reflections, reading all sorts of books, playing the piano, engaging in different sports, trying out new restaurants and coffee shops in NYC, or clubbing.
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