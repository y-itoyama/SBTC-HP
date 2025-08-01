"use client";

import { useEffect, useState } from "react";

interface UseInitialAnimationOptions {
  delay?: number; // アニメーション開始の遅延（ミリ秒）
  duration?: number; // アニメーション継続時間（ミリ秒）
}

export function useInitialAnimation(options: UseInitialAnimationOptions = {}) {
  const { delay = 0, duration = 1000 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClasses = (type: 'fadeUp' | 'fadeIn' | 'scale' | 'slideLeft' | 'slideRight' = 'fadeUp') => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    const animationMap = {
      fadeUp: isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8',
      fadeIn: isVisible 
        ? 'opacity-100' 
        : 'opacity-0',
      scale: isVisible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95',
      slideLeft: isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-8',
      slideRight: isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-8',
    };

    return `${baseClasses} ${animationMap[type]}`;
  };

  return {
    isVisible,
    getAnimationClasses,
  };
}

// 複数の要素で段階的アニメーション
export function useStaggeredAnimation(count: number, baseDelay: number = 0, staggerDelay: number = 200) {
  return Array.from({ length: count }, (_, index) => 
    useInitialAnimation({ 
      delay: baseDelay + (index * staggerDelay) 
    })
  );
}