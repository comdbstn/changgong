'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  const [currentSlide, setCurrentSlide] = useState(1)
  
  const totalSlides = 3
  
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
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 text-white">
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">THE CULTURE, THE FUTURE</h1>
            <p className="text-sm md:text-base mb-8 max-w-2xl">
              창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
              다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
            </p>
            <button className="text-sm border-b border-white pb-1 hover:opacity-75 transition-opacity">
              READ MORE
            </button>
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-between p-6 md:p-12">
          <div className="text-4xl font-bold">{currentSlide}</div>
          <div className="text-4xl font-bold">{totalSlides}</div>
        </div>
        
        {/* Slider Images */}
        <div className="absolute inset-0">
          {currentSlide === 1 && (
            <div className="absolute inset-0 bg-gray-900">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}
          {currentSlide === 2 && (
            <div className="absolute inset-0 bg-gray-800">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}
          {currentSlide === 3 && (
            <div className="absolute inset-0 bg-gray-700">
              <div className="absolute inset-0 opacity-50">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  fill
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Magazine Section */}
      <section className="py-16 bg-teal-100">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Brand</p>
            <h2 className="text-2xl font-bold">Magazine B, Magazine F, Media, Beauty</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">MAGAZINE B · ISSUE NO.97</p>
                <h3 className="text-xl font-bold mb-2">RIMOWA TEST</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">MAGAZINE F · ISSUE NO.16</p>
                <h3 className="text-xl font-bold mb-2">REPETTO</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Magazine Cover"
                  width={300}
                  height={400}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">MAGAZINE F · ISSUE NO.15</p>
                <h3 className="text-xl font-bold mb-2">BARBOUR</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-right">
            <Link href="/shop" className="text-lg inline-flex items-center">
              Shop <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-xs text-gray-400 mb-1">MAGAZINE F · ISSUE NO.14</p>
              <h2 className="text-3xl font-bold mb-4">THE BALVENIE</h2>
              <p className="text-sm text-gray-300 mb-4">
                창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
              </p>
              <button className="text-sm border-b border-white pb-1 hover:opacity-75 transition-opacity">
                SHOP NOW
              </button>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/images/logo/changgong-logo.png"
                alt="Featured Image"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-2">Brand</p>
            <h2 className="text-2xl font-bold">Jobs, The Series, Others</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Jobs Image"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">JOBS · EDITION</p>
                <h3 className="text-xl font-bold mb-2">EDITOR</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Jobs Image"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">JOBS · CHEF</p>
                <h3 className="text-xl font-bold mb-2">CHEF</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-4 bg-white p-4">
                <Image 
                  src="/images/logo/changgong-logo.png"
                  alt="Jobs Image"
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">JOBS · NOVELIST</p>
                <h3 className="text-xl font-bold mb-2">NOVELIST</h3>
                <p className="text-sm text-gray-600">
                  창공호는 개인의 브랜드 가치를 발견하고 성장시키는 창업 학회입니다. 
                  다양한 분야의 전문가들과 함께 당신만의 브랜드를 만들어보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Saturday,</h2>
              <h2 className="text-2xl font-bold mb-2">15 Mar</h2>
              <h2 className="text-2xl font-bold">2025</h2>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-gray-600 mb-1">• 10:00 AM</p>
                <h3 className="text-lg font-bold mb-2">SWEET MEMORIES</h3>
                <p className="text-sm text-gray-600 mb-4">Magazine No.97</p>
                <p className="text-sm text-gray-600">Opening</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1">• 12:00 PM</p>
                <h3 className="text-lg font-bold mb-2">시즌4에 온걸 환영합니다</h3>
                <p className="text-sm text-gray-600 mb-4">창업 아이디어 대회</p>
                <p className="text-sm text-gray-600">창공호 본관</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1">• 02:00 PM</p>
                <h3 className="text-lg font-bold mb-2">Contemporary Issue</h3>
                <p className="text-sm text-gray-600 mb-4">No.B-Lens</p>
                <p className="text-sm text-gray-600">Opening</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1">• 04:00 PM</p>
                <h3 className="text-lg font-bold mb-2">학습과 경험을 통한 성장</h3>
                <p className="text-sm text-gray-600 mb-4">워크샵 세미나</p>
                <p className="text-sm text-gray-600">창공호 세미나실</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1">• 06:00 PM</p>
                <h3 className="text-lg font-bold mb-2">창업자의 길</h3>
                <p className="text-sm text-gray-600 mb-4">마케팅 전략 강연</p>
                <p className="text-sm text-gray-600">창공호 본관</p>
              </div>
              
              <div>
                <p className="text-xs text-gray-600 mb-1">• 08:00 PM</p>
                <h3 className="text-lg font-bold mb-2">Contemporary Issue</h3>
                <p className="text-sm text-gray-600 mb-4">No.B-La Lune</p>
                <p className="text-sm text-gray-600">Opening</p>
              </div>
            </div>
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
    </>
  )
} 