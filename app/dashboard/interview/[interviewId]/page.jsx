"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };
  return (
    <div className=' '>
      <h2 className='font-bold text-2xl text-white text-center lg:text-left lg:absolute lg:top-10 lg:right-80 mt-10 mb-5'>Let's Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 w-full'>
        <div className='flex flex-col justify-center items-center'>
          {webcamEnabled ? (
            <Webcam
              onUserMedia={() => setWebcamEnabled(true)}
              onUserMediaError={() => setWebcamEnabled(false)}
              mirrored={true}
              className='h-64 w-64 md:h-80 md:w-80'
            />
          ) : (
            <>
              <Image
                src='/webcam.gif'
                alt='animated-gif'
                width={256}
                height={256}
                className='rounded-lg'
              />
              <button
                onClick={() => setWebcamEnabled(true)}
                className="relative overflow-hidden w-48 h-12 rounded-lg text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-pink-500 opacity-50 hover:opacity-0 transition-all duration-300" />
                
                {/* Button Text */}
                <span className="relative z-10">Enable Web Cam </span>
              </button>
            </>
          )}
          <div className="flex justify-end items-end mt-5">
            <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded">
                Start interview
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-5 rounded-lg border gap-5 bg-white bg-opacity-20 backdrop-blur-lg">
            <h2 className="text-lg text-white">
              <strong>Job Role/Job Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg text-white">
              <strong>Job Description/Job Stack: </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg text-white">
              <strong>Years of Experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>
          <div className='p-1 bg-gradient-to-r from-blue-400 to-pink-500 rounded-lg'>
            <div className='p-5 border rounded-lg bg-white bg-opacity-20 backdrop-blur-lg'>
              <h2 className="flex gap-2 items-center">
                <Lightbulb className="text-white" />
                <strong className='text-white font-extrabold'>Information</strong>
              </h2>
              <h2 className="mt-3 text-white">
                {process.env.NEXT_PUBLIC_INFORMATION}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Go Home Button - Visible only on mobile */}
      <div className="fixed bottom-4 left-4 md:hidden">
        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;