import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/images/fox-logo.png"
                alt="창공호 로고"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">창공호</span>
            </div>
            <p className="text-gray-400">
              개개인의 브랜드를 가치있게 만드는 창업 학회
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">프로그램</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  브랜드 워크샵
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  창업 멘토링
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  브랜딩 실습
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">커뮤니티</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  활동 회원
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  성공 사례
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  파트너십
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">문의하기</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                이메일: contact@changgong.com
              </li>
              <li className="text-gray-400">
                전화: 02-123-4567
              </li>
              <li className="text-gray-400">
                주소: 서울특별시 강남구
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 창공호. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 