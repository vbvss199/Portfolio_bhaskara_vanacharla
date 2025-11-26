"use client";
// ...existing code...
import dynamic from "next/dynamic";
import { useMemo } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <div style={{ width: "95%", height: 200 }} />
});

const AnimationLottie = ({ animationPath, width }) => {
  const options = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: { width: width || "95%" }
    }),
    [animationPath, width]
  );

  return <Lottie {...options} />;
};

export default AnimationLottie;
