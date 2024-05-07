"use client"

import React, { useState, useEffect } from 'react';
import { getProfile } from '@/app/api/authApi';
import { UserProfile } from "@/app/interface/user";


const Profile = () => {
 
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await getProfile({
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setUserProfile(response);
        } else {
          console.error('Token not found in local storage');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {userProfile ? (
        <div>
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          <p>Real Name: {userProfile.realname}</p>
          <p>Address: {userProfile.address}</p>
          <p>Occupation: {userProfile.occupation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}
export default Profile;
