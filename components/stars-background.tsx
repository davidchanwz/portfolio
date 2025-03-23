"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useTheme } from "next-themes"

function Stars() {
    const ref = useRef<THREE.Points>(null!)
    const { theme } = useTheme()

    const positions = useMemo(() => {
        const positions = new Float32Array(6000)
        for (let i = 0; i < 2000; i++) {
            const radius = Math.random() * 4 + 2 // Keeping stars within reasonable bounds
            const theta = 2 * Math.PI * Math.random()
            const phi = Math.acos(2 * Math.random() - 1)

            const x = radius * Math.sin(phi) * Math.cos(theta)
            const y = radius * Math.sin(phi) * Math.sin(theta)
            const z = radius * Math.cos(phi)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z
        }
        return positions
    }, [])

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x += 0.0001
            ref.current.rotation.y += 0.0001
        }
    })

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.01}
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
                color={theme === 'dark' ? 'white' : '#333333'}
            />
        </points>
    )
}

export default function StarsBackground() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    )
}
