"use client"
import { Pixelify_Sans } from "next/font/google"
import { useState } from "react"
import HorizontalTicker from '@/components/HorizontalTicker'
import VerticalTicker from '@/components/VerticalTicker'
import Link from "next/link"

const pixel = Pixelify_Sans({
  weight: '400',
  subsets: ['latin'],
})

const Page = () => {
  const [direction, setDirection] = useState('horizontal')

  return (
    <div className='min-h-screen w-screen flex items-center bg-[#5652f5] text-[#bcb8b8]'>
      {/* Left Section */}
      <div className={`w-[60%] ${pixel.className} text-5xl flex flex-col justify-center items-center`}>
        <div className="space-y-5">
          <div>Ticker</div>
          <div className="font-mono text-sm max-w-sm">
            A lightweight, reusable React/Next.js component for smooth, infinite scrolling images. Supports vertical and horizontal directions, fully customizable width, height, and speed, using Tailwind CSS for clean styling. Perfect for portfolios, logos, or product showcases.
          </div>

          {/* Buttons to select ticker */}
          <div className="flex gap-3 w-full max-w-sm">
            <div
              className={`border border-[#bcb8b8] text-[#bcb8b8] w-full py-2 text-sm text-center cursor-pointer ${direction === 'horizontal' ? 'bg-[#bcb8b8] text-black' : 'text-[#bcb8b8]'}`}
              onClick={() => setDirection('horizontal')}
            >
              Horizontal Marquee
            </div>
            <div
              className={`border border-[#bcb8b8] text-[#bcb8b8] w-full py-2 text-sm text-center cursor-pointer ${direction === 'vertical' ? 'bg-[#bcb8b8] text-black' : 'text-[#bcb8b8]'}`}
              onClick={() => setDirection('vertical')}
            >
              Vertical Marquee
            </div>
          </div>

          <div>
            <Link href='https://github.com/7sumona02/ticker/tree/main/components'>
            <div className="bg-black w-full py-2 text-[#bcb8b8] text-sm text-center cursor-pointer">
              GET THE CODE
            </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - show ticker based on state */}
      <div className="w-full h-screen flex items-center justify-center border-l">
        {direction === 'horizontal' && <HorizontalTicker />}
        {direction === 'vertical' && <VerticalTicker />}
        {!direction && (
          <div className="text-black text-center">Select a ticker to preview</div>
        )}
      </div>
    </div>
  )
}

export default Page
