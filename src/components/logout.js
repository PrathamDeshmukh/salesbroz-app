import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

  useEffect(() => {
    // Clear local storage
    localStorage.removeItem('retailer_id');
    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;