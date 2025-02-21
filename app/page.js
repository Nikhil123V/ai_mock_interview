'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Mic, User, Loader2, Star, Brain, Target, Clock, ChevronRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [interviewState, setInterviewState] = useState('idle');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [analysis, setAnalysis] = useState('');

  const startInterview = () => {
    setInterviewState('listening');
    setCurrentQuestion('Tell me about a challenging project you worked on and how you handled it.');
  };

  const simulateAnswer = () => {
    setInterviewState('processing');
    setTimeout(() => {
      setInterviewState('answering');
      setAnalysis(`Strong Points:
• Good project description
• Clear problem-solving approach
• Demonstrated leadership

Areas for Improvement:
• Could provide more specific metrics
• Consider adding follow-up actions`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }} // Initial animation state
      animate={{ opacity: 1, scale: 1, y: 0 }}   // Final animation state
      transition={{ duration: 0.8, ease: "easeInOut" }} // Animation properties
      whileHover={{ scale: 1.05, rotate: 5 }}       // Hover effect
      whileTap={{ scale: 0.95 }}                   // Tap effect
    >
      <Image
        src={'/logo.png'}
        alt='logo'
        width={200}
        height={200}
        className='rounded-3xl mb-10'
      />
    </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              >
                Master Your Interview Skills with AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-gray-600"
              >
                Practice interviews with our AI-powered platform. Get instant feedback, improve your responses, and boost your confidence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-4"
              >
                <Link href="/dashboard">
                <button
                  onClick={startInterview}
                  className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Interview
                </button>
                </Link>
              </motion.div>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                <motion.svg
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewBox="0 0 1026 1026"
                  fill="none"
                  className="absolute inset-0 h-full w-full"
                >
                  <path d="M513 0v1026M0 513h1026" stroke="currentColor" strokeWidth="2" />
                  <circle cx="513" cy="513" r="400" stroke="currentColor" strokeWidth="100" strokeDasharray="10 10" />
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Our Platform?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get comprehensive interview preparation with real-time AI feedback and analysis
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: Brain,
                  name: 'AI-Powered Analysis',
                  description: 'Get instant feedback on your responses with detailed analysis and suggestions for improvement.',
                },
                {
                  icon: Target,
                  name: 'Industry-Specific Questions',
                  description: 'Practice with questions tailored to your industry and experience level.',
                },
                {
                  icon: Clock,
                  name: 'Real-time Feedback',
                  description: 'Receive immediate feedback on your answers, helping you improve on the spot.',
                },
              ].map((feature) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Interview Section */}
      {interviewState !== 'idle' && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Bot className="w-8 h-8 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Interviewer</h2>
                </div>
                <p className="text-gray-700 text-lg">{currentQuestion}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <User className="w-8 h-8 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Your Answer</h2>
                </div>
                {interviewState === 'listening' && (
                  <div className="flex items-center gap-4">
                    <button
                      onClick={simulateAnswer}
                      className="flex items-center gap-2 bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-200 transition-colors"
                    >
                      <Mic className="w-5 h-5" />
                      <span>Recording...</span>
                    </button>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.8, 1],
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className="w-2 h-2 bg-indigo-600 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {interviewState === 'processing' && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing your answer...</span>
                  </div>
                )}
              </div>

              {interviewState === 'answering' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Bot className="w-8 h-8 text-indigo-600" />
                    <h2 className="text-xl font-semibold">Analysis</h2>
                  </div>
                  <div className="prose prose-lg">
                    <pre className="whitespace-pre-wrap font-sans text-gray-700">{analysis}</pre>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by Job Seekers
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Software Engineer',
                  content: 'The AI feedback helped me improve my interview responses significantly. Landed my dream job!',
                  rating: 5,
                },
                {
                  name: 'Michael Chen',
                  role: 'Product Manager',
                  content: 'Practicing with this platform boosted my confidence. The real-time feedback is invaluable.',
                  rating: 5,
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Data Scientist',
                  content: 'The industry-specific questions helped me prepare for technical interviews effectively.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-gray-50 p-8"
                >
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg leading-6 text-gray-600">{testimonial.content}</p>
                  <div className="mt-6 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {[
              { name: 'Terms', href: '#' },
              { name: 'Privacy', href: '#' },
              { name: 'Contact', href: '#' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
          <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }} // Initial animation state
      animate={{ opacity: 1, scale: 1, y: 0 }}   // Final animation state
      transition={{ duration: 0.8, ease: "easeInOut" }} // Animation properties
      whileHover={{ scale: 1.05, rotate: 5 }}       // Hover effect
      whileTap={{ scale: 0.95 }}                   // Tap effect
    >
      <Image
        src={'/logo.png'}
        alt='logo'
        width={200}
        height={200}
        className='rounded-3xl mb-10'
      />
    </motion.div>
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2025 AI Mock Interview. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}