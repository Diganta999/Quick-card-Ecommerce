// components/ProfileCard.tsx
'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import React, { useState, useMemo, useEffect } from 'react'
import { generateParticles, Particle } from './particles'


type ProfileCardProps = {
  title: string
  description: string
  price: string
  bgImage: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, price, bgImage }) => {
  const [isVisible, setIsVisible] = useState(false)

  // Generate particles once, outside render
  const particles: Particle[] = useMemo(() => generateParticles(5), [])

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(timer)
  }, [])

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } }
  }

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
  }

  return (
    <div className="flex justify-center mb-[100px]">
      <motion.div
        className="w-[500px] h-[700px] rounded-3xl border border-cyan-800 relative overflow-hidden shadow-lg cursor-pointer"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        whileHover={{
          y: -10,
          boxShadow: '0 25px 50px -12px rgba(0, 255, 255, 0.25)',
          transition: { duration: 0.3 }
        }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

        {/* Animated Profile Info */}
        <motion.div
          className="relative z-10 text-center mt-9 px-4"
          variants={textContainerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.h1 variants={textItemVariants} className="text-4xl font-bold text-white drop-shadow-lg">
            {title}
          </motion.h1>
          <motion.p variants={textItemVariants} className="text-sm font-bold text-white mt-2 drop-shadow-md">
            {description}
          </motion.p>
        </motion.div>

        {/* Glassmorphic Bottom Bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[440px] h-[70px] rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center px-4">
          <div className="w-[35px] h-[35px] rounded-full overflow-hidden border border-white/50 mr-3 flex-shrink-0">
            <Image src={bgImage} alt="headphone" width={30} height={30} />
          </div>
          <div className="flex items-center justify-between w-full text-white font-semibold text-sm">
            <span>{title} {price}</span>
            <button className="ml-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs  px-[40px] py-[16px] rounded hover:bg-white/30 transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
              initial={{ x: p.x, y: p.y }}
              animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileCard