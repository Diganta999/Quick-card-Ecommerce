// /utils/particles.ts
export type Particle = {
  x: number
  y: number
  delay: number
  duration: number
}

export const generateParticles = (count: number = 5): Particle[] => {
  return Array.from({ length: count }).map(() => ({
    x: Math.random() * 330,
    y: Math.random() * 435,
    delay: Math.random() * 2,
    duration: 4 + Math.random() * 2
  }))
}
