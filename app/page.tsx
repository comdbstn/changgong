'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const [brandRef, brandInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [programsRef, programsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [communityRef, communityInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        {/* 그라데이션 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          {/* SVG 패턴 오버레이 */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* 동적 원형 그라데이션 */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* 컨텐츠 */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto text-center text-white px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              CHANGGONG
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              개개인의 브랜드를 가치있게 만드는 창업 학회
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
              >
                시작하기
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <motion.section 
        ref={brandRef}
        initial="hidden"
        animate={brandInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            브랜드 가치의 발견
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">브랜드 전략</h3>
              <p className="text-gray-600">개인의 가치를 발견하고 브랜드로 성장시키는 전략적 접근</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">브랜딩 실습</h3>
              <p className="text-gray-600">실전 프로젝트를 통한 브랜드 구축 경험</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">창업 연계</h3>
              <p className="text-gray-600">브랜드를 기반으로 한 창업 지원 및 멘토링</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        ref={programsRef}
        initial="hidden"
        animate={programsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            프로그램
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">브랜드 워크샵</h3>
              <p className="text-gray-600 mb-4">매주 진행되는 실전 브랜딩 워크샵</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>브랜드 아이덴티티 개발</li>
                <li>마케팅 전략 수립</li>
                <li>디자인 씽킹</li>
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">창업 멘토링</h3>
              <p className="text-gray-600 mb-4">전문가와 함께하는 1:1 멘토링</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>사업계획서 작성</li>
                <li>투자 유치 전략</li>
                <li>시장 분석</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section 
        ref={communityRef}
        initial="hidden"
        animate={communityInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            커뮤니티
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <h3 className="text-6xl font-bold text-blue-600 mb-4">150+</h3>
              <p className="text-xl text-gray-600">활동 회원</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <h3 className="text-6xl font-bold text-purple-600 mb-4">50+</h3>
              <p className="text-xl text-gray-600">성공 프로젝트</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <h3 className="text-6xl font-bold text-indigo-600 mb-4">30+</h3>
              <p className="text-xl text-gray-600">파트너십</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            함께하기
          </motion.h2>
          <div className="max-w-2xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              창공호와 함께 당신만의 브랜드를 만들어보세요
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
            >
              지원하기
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  )
} 