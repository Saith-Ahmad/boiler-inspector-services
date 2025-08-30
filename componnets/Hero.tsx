


"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/assets/heroimg6.png",
  "/assets/heroimg5.png",
  "/assets/heroimg2.png",
    "/assets/heroimg3.png",
    "/assets/heroimg1.png",
    "/assets/heroimg4.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Boiler background"
            unoptimized
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-2000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-primary opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4">
        <motion.h1
        initial={{y: -60, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        transition={{duration : 1}}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Boiler Inspector Services
        </motion.h1>
        <p className="max-w-2xl text-base md:text-lg mb-6">
          Ensuring safety, quality, and compliance in industrial boiler and
          pressure systems with expert inspections and certifications.
        </p>
        <a
          href="#contact"
          className="bg-accent hover:bg-accent-hover text-black px-6 py-2 rounded-sm font-medium transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}