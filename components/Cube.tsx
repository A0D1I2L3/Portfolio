'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default function Cube() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(10, 1, 0.1, 100)
    camera.position.z = 3
    camera.rotation.x = Math.PI / 12

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x41b06e, 1.5)
    scene.add(hemiLight)

    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    const controls = new OrbitControls(camera, canvas)
    controls.enableZoom = false
    controls.enablePan = false
    controls.minPolarAngle = Math.PI / 2
    controls.maxPolarAngle = Math.PI / 2

    let model: THREE.Object3D | null = null

    const resizeRendererToDisplaySize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        renderer.setSize(width, height, false)
        camera.aspect = width / height

        const isMobile = window.innerWidth < 768
        camera.fov = isMobile ? 5 : 10
        camera.updateProjectionMatrix()
      }
    }

    const render = () => {
      resizeRendererToDisplaySize()
      if (model) {
        model.rotation.y += 0.01
        model.rotation.x += 0.01
      }
      renderer.render(scene, camera)
      animationFrameRef.current = requestAnimationFrame(render)
    }

    loader.load(
      '/assets/rubiks_cube.glb',
      (gltf) => {
        model = gltf.scene
        scene.add(model)
        render()
      },
      undefined,
      (error) => console.error('Error loading model:', error),
    )

    const onResize = () => resizeRendererToDisplaySize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      controls.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas id="cube" ref={canvasRef} />
}

