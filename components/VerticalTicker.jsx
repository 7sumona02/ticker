"use client"

import React from "react"

export default function VerticalTicker({ width = "300px", height = "100%" }) {
  const images = [
    "https://i.pinimg.com/736x/5f/a7/b6/5fa7b67fe7110363f9ae290d0b26c3d9.jpg",
    "https://i.pinimg.com/736x/22/0f/f8/220ff890b5f33abfcc4a78e4a724fe4e.jpg",
    "https://i.pinimg.com/736x/18/84/3d/18843d0bf89e525e71c014df0fa598f6.jpg",
    "https://i.pinimg.com/736x/fe/e7/ec/fee7ec015f37ae0d4f3720642ab62f0f.jpg",
    "https://i.pinimg.com/736x/4c/5a/64/4c5a6486a909e658cb9a5edfb0a10560.jpg",
    "https://i.pinimg.com/736x/3d/e0/69/3de069a53ed026bb2d707945e022907e.jpg",
    "https://i.pinimg.com/1200x/fb/78/79/fb787909767b73255307affea8ec7d3a.jpg",
  ]

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative overflow-hidden flex justify-center" style={{ width, height }}>
        <div
          className="absolute flex flex-col items-center animate-[marquee_15s_linear_infinite]"
        >
          {/* Original set */}
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-[250px] h-[30vh] m-2 flex items-center justify-center overflow-hidden"
            >
              <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Duplicate set for smooth loop */}
          {images.map((src, idx) => (
            <div
              key={`dup-${idx}`}
              className="w-[250px] h-[30vh] m-2 flex items-center justify-center overflow-hidden"
            >
              <img src={src} alt={`dup-img-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes */}
      <div className="hidden">
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }

          .animate-[marquee_15s_linear_infinite] {
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </div>
    </div>
  )
}
