import React from 'react';
import { personalInfo } from '../data/personalInfo';

const Profile: React.FC = () => {
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
      <p>{personalInfo.bio}</p>
    </div>
  );
};

export default Profile;