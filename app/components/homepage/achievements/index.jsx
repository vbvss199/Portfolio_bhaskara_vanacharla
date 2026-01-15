import { achievements } from '@/utils/data/achievements'; // Using the new data file name
import AchievementCarousel from './achievement-slider';

const Achievements = () => {
  return (
    <div id='achievements' className="relative z-50 my-12 lg:my-24">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
      <div className="flex items-center justify-start relative">
        <span className="bg-[#2F2F2F] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          ACHIEVEMENTS
        </span>
        <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
      </div>
      <AchievementCarousel achievementsData={achievements} />
    </div>
  );
};

export default Achievements;