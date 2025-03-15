import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center justify-center relative">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/fox-pattern.png"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6"
          >
            CHANGGONG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            개개인의 브랜드를 가치있게 만드는 창업 학회
          </motion.p>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">브랜드 가치의 발견</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">브랜드 전략</h3>
              <p className="text-gray-600">개인의 가치를 발견하고 브랜드로 성장시키는 전략적 접근</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">브랜딩 실습</h3>
              <p className="text-gray-600">실전 프로젝트를 통한 브랜드 구축 경험</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">창업 연계</h3>
              <p className="text-gray-600">브랜드를 기반으로 한 창업 지원 및 멘토링</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">프로그램</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">브랜드 워크샵</h3>
              <p className="text-gray-600 mb-4">매주 진행되는 실전 브랜딩 워크샵</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>브랜드 아이덴티티 개발</li>
                <li>마케팅 전략 수립</li>
                <li>디자인 씽킹</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">창업 멘토링</h3>
              <p className="text-gray-600 mb-4">전문가와 함께하는 1:1 멘토링</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>사업계획서 작성</li>
                <li>투자 유치 전략</li>
                <li>시장 분석</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">커뮤니티</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-6xl font-bold text-blue-600 mb-4">150+</h3>
              <p className="text-xl text-gray-600">활동 회원</p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold text-blue-600 mb-4">50+</h3>
              <p className="text-xl text-gray-600">성공 프로젝트</p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl font-bold text-blue-600 mb-4">30+</h3>
              <p className="text-xl text-gray-600">파트너십</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">함께하기</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-8">
              창공호와 함께 당신만의 브랜드를 만들어보세요
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              지원하기
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 