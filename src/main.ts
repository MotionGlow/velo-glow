import { MeshGradient } from '@mesh-gradient/core'

const canvas = document.createElement('canvas')
canvas.id = 'gradient'
canvas.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;display:block'
document.body.appendChild(canvas)

const gradient = new MeshGradient()
gradient.init('#gradient', {
  colors: ['#ff6b6b', '#ffa94d', '#ffd43b', '#ff922b'],
  animationSpeed: 0.8,
})
