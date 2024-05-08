"use client"

import React, { useEffect, useState } from 'react';
import { getProfile } from '@/app/api/authApi';
import { useAuth } from '@/app/context/AuthContext';
import { UserProfile } from '@/app/interface/context';

const Profile = () => {
 
  const {isAuthenticated} = useAuth()
  const [profile, setProfile] = useState<UserProfile | undefined>(undefined);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (isAuthenticated) {
          const token = localStorage.getItem('token');
          if (token) {
            const response = await getProfile(token);
            setProfile(response.user);
            console.log(response)
          }
        }
      } catch (error) {
        console.error('Fetch categories failed', error);
      }
    };

    fetchProfile();
  }, [isAuthenticated]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //   const response = getProfile(profile)           
  //   };

  //   fetchData();
  // }, []);


  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
          <p>Real Name: {profile.realname}</p>
          <p>Address: {profile.address}</p>
          <p>Occupation: {profile.occupation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
