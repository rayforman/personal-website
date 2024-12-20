import React from 'react';

const ProfilePhoto = () => {
  return (
    <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-gray-300">
      <img 
        src="/profile-photo.png" 
        alt="René Sultan" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;