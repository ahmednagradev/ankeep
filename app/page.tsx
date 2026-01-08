"use client";
import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import { Archive, Save, Trash2 } from 'lucide-react';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  function onSubmit() {
    console.log({ inputTitle, inputText })
  }

  return (
    <div className='min-h-screen w-full bg-[#202124]'>
      <div className='min-h-14.5 md:min-h-17.5'>
        <Navbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
      </div>

      <div className='flex'>
        <Sidebar
          showSidebar={isSidebarOpen}
        />

        <div className='flex flex-1 flex-col py-4 md:py-8'>
          <div className='min-h-20 md:min-h-30 flex flex-col justify-center items-center'>

            <div
              onClick={() => setShowForm(true)}
              className={`${showForm ? "hidden" : ""} w-80 md:w-110 md:py-3.5 py-2.5 px-3 md:px-4 border border-[#5F6368] rounded-lg shadow-lg`}>
              <p className='text-[#868789]'>Take a note...</p>
            </div>

            <div className={`${!showForm ? "hidden" : ""} flex flex-col min-w-80 md:py-3 py-2 px-3 md:px-4 md:w-110 gap-1 md:gap-2 border-[#5F6368] border border-[#5F6368]-[#5F6368] rounded-lg shadow-lg`}>
              <input
                type="text"
                placeholder='Title'
                className='outline-none text-xl'
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
              <textarea
                placeholder='Take a note...'
                rows={3}
                className='outline-none resize-none'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className='text-right'>
                <button
                  type='submit'
                  onClick={onSubmit}
                  className='p-2 md:p-3 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white'
                >
                  <Save size={17} />
                </button>
              </div>
            </div>

          </div>

          <div className='flex flex-wrap gap-4 items-center justify-center mt-4 md:mt-8'>
            {
              Data.map((data, index) => (
                <div key={index} className='border border-[#5F6368] rounded-lg w-80 px-3 py-3 shadow-lg'>
                  <h1 className='text-xl mb-2'>{data.title}</h1>
                  <p>{data.description}</p>
                  <div className='flex justify-end'>
                    <div className='flex'>
                      <span className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition'>
                        <Archive size={16} />
                      </span>
                      <span className='md:p-3 p-2.5 rounded-full text-gray-300 hover:bg-gray-800 hover:text-red-500 transition'>
                        <Trash2 size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home

const Data = [
  {
    "title": "Getting Started",
    "description": "A brief introduction to help you understand the basics."
  },
  {
    "title": "Installation",
    "description": "This section explains how to install the application on your system step by step."
  },
  {
    "title": "Configuration",
    "description": "Learn how to configure settings, environment variables, and preferences to match your project needs."
  },
  {
    "title": "User Authentication",
    "description": "Covers login, signup, password recovery, session handling, and security considerations in a simple but practical manner."
  },
  {
    "title": "Dashboard Overview",
    "description": "An overview of the dashboard layout, including widgets, charts, quick actions, navigation flow, and how users can efficiently monitor their data."
  },
  {
    "title": "Data Management",
    "description": "Explains how to create, read, update, and delete data while maintaining validation, performance optimization, and proper error handling throughout the application lifecycle."
  },
  {
    "title": "API Integration",
    "description": "Detailed guidance on integrating third-party APIs, handling asynchronous requests, managing loading states, retry mechanisms, and gracefully dealing with failures in real-world scenarios."
  },
  {
    "title": "Performance Optimization",
    "description": "Discusses advanced techniques such as memoization, lazy loading, code splitting, caching strategies, and monitoring tools to keep the application fast and responsive under heavy usage."
  },
  {
    "title": "Testing Strategy",
    "description": "Outlines unit testing, integration testing, and end-to-end testing approaches, including test case design, mocking dependencies, coverage analysis, and continuous integration best practices."
  },
  {
    "title": "Deployment & Maintenance",
    "description": "A comprehensive guide to deploying the application to production environments, setting up CI/CD pipelines, managing environment-specific configurations, monitoring uptime, handling rollbacks, applying security patches, and performing long-term maintenance."
  },
  {
    "title": "Data Management",
    "description": "Explains how to create, read, update, and delete data while maintaining validation, performance optimization, and proper error handling throughout the application lifecycle."
  },
  {
    "title": "API Integration",
    "description": "Detailed guidance on integrating third-party APIs, handling asynchronous requests, managing loading states, retry mechanisms, and gracefully dealing with failures in real-world scenarios."
  },
  {
    "title": "Performance Optimization",
    "description": "Discusses advanced techniques such as memoization, lazy loading, code splitting, caching strategies, and monitoring tools to keep the application fast and responsive under heavy usage."
  },
  {
    "title": "Testing Strategy",
    "description": "Outlines unit testing, integration testing, and end-to-end testing approaches, including test case design, mocking dependencies, coverage analysis, and continuous integration best practices."
  },
  {
    "title": "Deployment & Maintenance",
    "description": "A comprehensive guide to deploying the application to production environments, setting up CI/CD pipelines, managing environment-specific configurations, monitoring uptime, handling rollbacks, applying security patches, and performing long-term maintenance."
  }
]
