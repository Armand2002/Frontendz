import React from 'react';
import { useParams } from 'react-router-dom';

const ProfessionalProfile = () => {
  const { id } = useParams();
  return <div>Professional Profile Page for ID: {id}</div>;
};

export default ProfessionalProfile;