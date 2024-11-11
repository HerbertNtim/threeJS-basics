import * as THREE from 'three'

const canvas = document.querySelector('canvas')

const scene = new THREE.Scene()
scene.background = new THREE.Color("#f0f0f0")

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshLambertMaterial({ color: "#468585", emissive: "#468585" })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)

const light = new THREE.DirectionalLight(0x9CDBA6, 10)
light.position.set(1, 1, 1)
scene.add(light)  

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.render(scene, camera) 

function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.x += 0.01
  sphere.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.render(scene, camera)
})


