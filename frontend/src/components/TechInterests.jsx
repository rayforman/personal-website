import React from 'react';

const TechInterests = () => {
  const interests = [
    { topic: "Machine Learning", techs: "PyTorch, TensorFlow, Keras, Scikit-Learn, Jupyter" },
    { topic: "Computer Vision", techs: "OpenCV, Segmentation Models" },
    { topic: "NLP", techs: "NLTK, Hugging Face Transformers" },
    { topic: "Cloud", techs: "AWS, GCS" },
    { topic: "Web Development", techs: "React.js, Node.js, JavaScript, Tailwind CSS" },
    { topic: "Databases", techs: "BigQuery SQL, MongoDB" },
    { topic: "Data Science", techs: "Pandas, NumPy, Matplotlib" },
    { topic: "DevOps", techs: "Git, Bash, Docker, Kubernetes" },
    { topic: "Languages", techs: "Python, Java, Javascript, C/C++, C#, SQL, R, MIPS Assembly" },
  ];

  return (
    <div className="space-y-2 w-full">
      {interests.map((interest, index) => (
        <div key={index} className="flex items-center">
          <span className="font-semibold text-blue-400 w-1/3">{interest.topic}:</span>
          <span className="text-gray-300 w-2/3">{interest.techs}</span>
        </div>
      ))}
    </div>
  );
};

export default TechInterests;