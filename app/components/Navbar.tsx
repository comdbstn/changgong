'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">B</span>
            </Link>
            
            <div className="hidden md:flex items-center ml-8 space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                New
              </Link>
              <Link href="/magazine" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                Magazine
              </Link>
              <Link href="/books" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                Books & E-books
              </Link>
              <Link href="/newsletter" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                Newsletter
              </Link>
              <Link href="/index" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                Index
              </Link>
              <Link href="/subscribe" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                Subscribe
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-sm text-gray-900 hover:text-gray-600">
              Search
            </button>
            <button className="text-sm text-gray-900 hover:text-gray-600">
              Login
            </button>
            <button className="text-sm text-gray-900 hover:text-gray-600">
              Cart(0)
            </button>
            <button className="text-sm text-gray-900 hover:text-gray-600 md:hidden">
              KR
            </button>
            <button className="text-sm text-gray-900 hover:text-gray-600 hidden md:block">
              US
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                New
              </Link>
              <Link 
                href="/magazine" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Magazine
              </Link>
              <Link 
                href="/books" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Books & E-books
              </Link>
              <Link 
                href="/newsletter" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Newsletter
              </Link>
              <Link 
                href="/index" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Index
              </Link>
              <Link 
                href="/subscribe" 
                className="block text-sm font-medium text-gray-900 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 