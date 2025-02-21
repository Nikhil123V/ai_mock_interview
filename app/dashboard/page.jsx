'use client'
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { useEffect, useRef } from 'react';
function Dashboard() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0; // Adjust the playback rate as needed
    }
  }, []);

  return (
    <div className='p-10 '>
      <h2 className="text-orange-400 font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Dashboard</h2>      
      <div className='flex items-center gap-2'>
      <h2 className="text-orange-400 font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Create and Start your AI Mockup</h2>      

        <video
          ref={videoRef}
          src={'/Gemini-Logo.mp4'}
          autoPlay
          loop
          muted
          className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 rounded-full mt-0"
        >
        </video>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        {/* Other content */}
        <AddNewInterview/>
      </div>
      <InterviewList/>
    </div>
  );
};

export default Dashboard;