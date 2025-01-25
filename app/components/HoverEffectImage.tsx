import Image from "next/image";
import React from "react";
import img1 from '@/public/assets/slideshow-character1.jpg'

const HoverEffectImage: React.FC = () => {
    return (
      <div className="relative group w-80 h-80 mx-auto overflow-hidden">
        {/* Image */}
        <Image
          src={img1}
          alt="Hover Effect"
          className="w-full h-full object-contain"
        />
  
        {/* Hover Effect */}
        <div className="absolute inset-0 opacity-10 bg-white scale-x-0 group-hover:scale-x-100 transform origin-center transition-transform duration-500 ease-in-out" />
        <div className="absolute inset-0 opacity-10 bg-white scale-y-0 group-hover:scale-y-100 transform origin-center transition-transform duration-500 ease-in-out" />
      </div>
    );
  };

export default HoverEffectImage;
