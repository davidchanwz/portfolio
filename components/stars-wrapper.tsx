'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const StarsCanvas = dynamic(() => import("@/components/stars-background"), {
    ssr: false,
})

export function StarsWrapper() {
    return (
        <Suspense fallback={null}>
            <div className="w-full h-lvh fixed inset-0 z-[1] backdrop-blur-[1px] overflow-hidden">
                <div className="scale-75"> {/* Reduce canvas size */}
                    <StarsCanvas />
                </div>
            </div>
        </Suspense>
    )
}
