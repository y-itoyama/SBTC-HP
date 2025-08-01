"use client";

import { useEffect, useRef, useState } from "react";

interface UseParallaxOptions {
  speed?: number; // パララックスの速度 (0.1-1.0)
  direction?: 'up' | 'down'; // スクロール方向
  offset?: number; // 開始オフセット
}

export function useParallax<T extends HTMLElement = HTMLElement>(
  options: UseParallaxOptions = {}
) {
  const { speed = 0.5, direction = 'up', offset = 0 } = options;
  const elementRef = useRef<T>(null);
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const requestRef = useRef<number>();

  useEffect(() => {
    // 初期設定
    const updateDimensions = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
      }
      setWindowHeight(window.innerHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking && elementRef.current) {
        requestRef.current = requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // パララックス変換値を計算
  const getTransform = () => {
    if (!elementRef.current || windowHeight === 0) return 'translateY(0px)';

    const elementBottom = elementTop + elementRef.current.offsetHeight;
    const scrollTop = scrollY;
    const scrollBottom = scrollY + windowHeight;

    // 要素が画面内にある時のみパララックス効果を適用
    if (scrollBottom >= elementTop && scrollTop <= elementBottom) {
      const relativePos = scrollY - elementTop + offset;
      const moveDistance = relativePos * speed;
      const translateY = direction === 'up' ? -moveDistance : moveDistance;
      
      return `translateY(${translateY}px)`;
    }

    return 'translateY(0px)';
  };

  return {
    ref: elementRef,
    transform: getTransform(),
    scrollY,
  };
}

// 複数の要素に異なるパララックス速度を適用
export function useMultipleParallax(configs: UseParallaxOptions[]) {
  return configs.map(config => useParallax(config));
}