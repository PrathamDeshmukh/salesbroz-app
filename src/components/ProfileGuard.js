import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileGuard = ({ children }) => {
  const retailerId = localStorage.getItem('retailer_id');
  const [isProfileComplete, setIsProfileComplete] = useState(null); // null means loading
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfileCompletion = async () => {
      try {
        const response = await axios.get(`http://localhost/salesbroz_react_app/get-profile.php?retailer_id=${retailerId}`);
        if (response.data.status === 'success') {
          const profile = response.data.data;
          const isComplete = profile.fname && profile.lname && profile.email && profile.address;
          setIsProfileComplete(isComplete);
        } else {
          setIsProfileComplete(false);
        }
      } catch (error) {
        console.error('Error checking profile completion', error);
        setIsProfileComplete(false);
      }
    };

    checkProfileCompletion();
  }, [retailerId]);

  if (isProfileComplete === null) {
    // Loading state
    return <div><b>Loading...</b></div>;
  }

  if (!isProfileComplete) {
    // Redirect to profile page if profile is not complete
    navigate('/My_Profile');
    alert('Please complete your profile before accessing other pages.');
   
  }

  return children;
};

export default ProfileGuard;
