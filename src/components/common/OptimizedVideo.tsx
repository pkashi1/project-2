import React, { useState, useEffect, useRef } from 'react';
import { getOptimalPreload, prefersReducedData } from '../../utils/videoOptimization';

interface OptimizedVideoProps extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'fetchpriority'> {
  src: string;
  poster?: string;
  lazy?: boolean;
  priority?: boolean;
  fetchpriority?: 'high' | 'low' | 'auto';
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  lazy = true,
  priority = false,
  className = '',
  ...props
}) => {
  const [isInView, setIsInView] = useState(priority || !lazy);
  const [isLoaded, setIsLoaded] = useState(priority);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (priority || !lazy) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  useEffect(() => {
    if (isInView && videoRef.current && !isLoaded) {
      const video = videoRef.current;
      
      // Load and play when in view
      video.load();
      
      if (props.autoPlay && props.muted) {
        video.play().catch(() => {
          // Ignore autoplay errors
        });
      }
      
      setIsLoaded(true);
    }
  }, [isInView, isLoaded, props.autoPlay, props.muted]);

  const shouldReduceData = prefersReducedData();
  const preloadStrategy = priority ? 'auto' : getOptimalPreload();

  return (
    <video
      ref={videoRef}
      src={isInView ? src : undefined}
      poster={poster}
      preload={shouldReduceData ? 'none' : preloadStrategy}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      fetchpriority={priority ? 'high' : 'auto'}
      {...props}
    />
  );
};

export default OptimizedVideo;
