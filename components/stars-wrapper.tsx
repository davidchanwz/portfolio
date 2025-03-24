'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const StarsCanvas = dynamic(() => import("@/components/stars-background"), {
    ssr: false,
})

export function StarsWrapper() {
    return (
        <Suspense fallback={null}>
            <div className="w-full min-h-screen fixed inset-0 z-[1] backdrop-blur-[1px] overflow-hidden touch-action-none">
                <div className="scale-75">
                    <StarsCanvas />
                </div>
            </div>
        </Suspense>
    )
}
