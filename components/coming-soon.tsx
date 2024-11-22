'use client'

import { useState } from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'
import Image from 'next/image'

export function ComingSoon() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server or email service
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md text-center">
        <div className="mb-12 relative">
          <div className="absolute inset-0 blur-2xl bg-red-500/40"></div>
          <Image
            src="/images/logo.png"
            alt="StoryHero Logo"
            width={300}
            height={300}
            className="mx-auto relative z-10"
            priority
          />
        </div>

        <h2 className="text-4xl font-semibold mb-4 text-red-500">Subscribe!</h2>

        <p className="text-xl mb-8 text-gray-300">Subscribe and try StoryHero today!!</p>

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
        
        <div className="text-gray-400 text-sm">
          By using this site, you agree to our{' '}
          <a 
            href="/StoryHero%20Terms%20of%20Service.pdf"
            className="text-red-500 hover:text-red-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          {' '}and{' '}
          <a 
            href="/StoryHero%20Privacy%20Policy.pdf"
            className="text-red-500 hover:text-red-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}
