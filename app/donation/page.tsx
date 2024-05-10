"use client"

import Donate from '@/components/Donate'
import React from 'react'
import { useEffect } from 'react';
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation';

const DonationPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (

    <div>
      <Donate />
    </div>
  )
}

export default DonationPage