import React from 'react';

// PDF Version
const ResumePDF = () => {
  return (
    <div className="w-full h-screen bg-bg-dark p-4">
      <iframe
        src="/RayForman_Resume.pdf#view=FitH"
        className="w-full h-full rounded-lg"
        title="Resume"
      />
    </div>
  );
};

export default ResumePDF;


// PNG Version
// const Resume = () => {
//   return (
//     <div className="w-full min-h-screen bg-bg-dark p-4 flex justify-center items-center">
//       <img
//         src="/RayForman_Resume.png"
//         alt="Resume"
//         className="max-w-full max-h-[90vh] object-contain rounded-lg"
//       />
//     </div>
//   );
// };

// export default Resume;