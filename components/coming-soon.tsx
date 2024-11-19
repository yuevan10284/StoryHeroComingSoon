'use client'

import { useState } from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoon() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server or email service
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md text-center">
        <div className="mb-12 relative">
          <div className="absolute inset-0 blur-2xl bg-red-500/40"></div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-15%20at%202.40.37%E2%80%AFPM-a1ukb5YvqQaDCw3VOD9dvy9wpXh7Sl.png"
            alt="StoryHero Logo"
            width={300}
            height={300}
            className="mx-auto relative z-10"
            priority
          />
        </div>
        
        <h2 className="text-4xl font-semibold mb-4 text-red-500">Coming Soon</h2>
        
        <p className="text-xl mb-8 text-gray-300">Be the first to know when our new site is live!</p>
        
        <form onSubmit={handleSubmit} className="flex mb-12">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-800 text-white border border-red-500/30"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-r-md transition-colors bg-red-500 text-white hover:bg-red-600"
          >
            Submit
          </button>
        </form>
        
        <div className="flex justify-center space-x-6 mb-8">
          {['Instagram', 'Twitter', 'Facebook'].map((icon) => (
            <a
              key={icon}
              href="#"
              className="text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full border border-red-500/30 hover:border-red-500"
            >
              {icon === 'Instagram' && <Instagram size={24} />}
              {icon === 'Twitter' && <Twitter size={24} />}
              {icon === 'Facebook' && <Facebook size={24} />}
            </a>
          ))}
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>By using this site, you agree to our</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://docs.google.com/document/d/1ppoiuTJTTLkbTWEzeSamwbZW5JkFUnORH2DKPHfTYB8/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline"
          >
            Terms of Service
          </a>
          <a
            href="https://docs.google.com/document/d/1hbwm18-TN2zKt0WtTAG2UoYRcQX93T59o7v_mxH2k-I/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

