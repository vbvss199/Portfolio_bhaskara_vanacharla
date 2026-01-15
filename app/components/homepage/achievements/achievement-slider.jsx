"use client";

import React from 'react';
import Image from 'next/image';

const AchievementCarousel = ({ achievementsData }) => {
  const handleViewLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="pt-24">
      <div className="flex overflow-x-auto gap-6 pb-6 px-6">
        {(achievementsData || []).map((achievement, index) => (
          <div
            key={index}
            className="achievement-card flex-shrink-0 bg-black text-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            style={{ width: '320px', minWidth: '320px' }}
          >
            <div className="relative overflow-hidden rounded-t-lg h-64 w-full">
              <Image
                src={achievement.image}
                alt={achievement.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="px-4 py-3">
              <p className="text-lg font-semibold">{achievement.title}</p>``
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleViewLink(achievement.link)}
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                >
                  View Achievement
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCarousel;