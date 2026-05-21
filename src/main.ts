import './style.css'
import { MeshGradient } from '@mesh-gradient/core'

const app = document.querySelector<HTMLDivElement>('#app')!

const canvas = document.createElement('canvas')
canvas.id = 'gradient-canvas'
app.appendChild(canvas)

const overlay = document.createElement('div')
overlay.className = 'overlay'
overlay.innerHTML = `
  <h1>Mesh Gradient</h1>
  <p>Animated WebGL mesh gradients powered by @mesh-gradient/core</p>
`
app.appendChild(overlay)

const controls = document.createElement('div')
controls.className = 'controls'

const presets: { name: string; colors: [string, string, string, string] }[] = [
  { name: 'Sunset', colors: ['#ff6b6b', '#ffa94d', '#ffd43b', '#ff922b'] },
  { name: 'Ocean', colors: ['#0c5259', '#0b7285', '#1098ad', '#22b8cf'] },
  { name: 'Neon', colors: ['#d6336c', '#ae3ec9', '#7048e8', '#4263eb'] },
  { name: 'Forest', colors: ['#2b8a3e', '#51cf66', '#94d82d', '#fcc419'] },
  { name: 'Aurora', colors: ['#0f0c29', '#302b63', '#24243e', '#06beb6'] },
  { name: 'Berry', colors: ['#ec2f4b', '#e91e63', '#9c27b0', '#673ab7'] },
  { name: 'Random', colors: ['#000', '#000', '#000', '#000'] },
]

presets.forEach(({ name, colors }) => {
  const btn = document.createElement('button')
  btn.textContent = name
  btn.addEventListener('click', () => {
    const finalColors = name === 'Random'
      ? colors.map(() => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`) as [string, string, string, string]
      : colors
    gradient.setColors(finalColors)
  })
  controls.appendChild(btn)
});

const pauseBtn = document.createElement('button')
pauseBtn.textContent = 'Pause'
pauseBtn.addEventListener('click', () => {
  if (gradient.isInitialized) {
    gradient.pause()
    pauseBtn.textContent = 'Play'
  } else {
    gradient.play()
    pauseBtn.textContent = 'Pause'
  }
})
controls.appendChild(pauseBtn)

app.appendChild(controls)

const gradient = new MeshGradient()
gradient.init('#gradient-canvas', {
  colors: ['#ff6b6b', '#ffa94d', '#ffd43b', '#ff922b'],
  animationSpeed: 0.8,
})
