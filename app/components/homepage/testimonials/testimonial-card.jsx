"use client";

import React from 'react';
import Image from 'next/image';

const AchievementCarousel = ({ achievementsData }) => {
  const handleViewLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-16">
      <div className="flex overflow-x-auto gap-6 pb-6 px-6">
        {(achievementsData || []).map((achievement, index) => (
          <div
            key={index}
            className="bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex-shrink-0"
            style={{ width: '350px', minWidth: '350px' }}
          >
            {/* Gradient Borders */}
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>

            <div className="px-4 lg:px-6 py-5">
              {/* Header with Image and Title */}
              <div className="flex items-start space-x-4">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-[#16f2b3] text-lg font-semibold">{achievement.title}</p>
                  <div className="flex mt-3">
                    <button
                      onClick={() => handleViewLink(achievement.link)}
                      className="bg-transparent border border-[#16f2b3] text-[#16f2b3] py-1 px-4 rounded-md text-sm hover:bg-[#16f2b3] hover:text-black transition-all"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCarousel;