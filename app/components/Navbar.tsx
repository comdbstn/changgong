import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/fox-logo.png"
              alt="창공호 로고"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold">창공호</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              소개
            </Link>
            <Link href="#programs" className="text-gray-600 hover:text-blue-600 transition-colors">
              프로그램
            </Link>
            <Link href="#community" className="text-gray-600 hover:text-blue-600 transition-colors">
              커뮤니티
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              문의하기
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              지원하기
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 