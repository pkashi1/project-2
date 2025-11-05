// src/utils/videoOptimization.ts

import React from 'react';

export interface VideoOptimizationOptions {
  preload?: 'none' | 'metadata' | 'auto';
  lazy?: boolean;
  poster?: string;
  quality?: 'low' | 'medium' | 'high';
}

export interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  lazy?: boolean;
  priority?: boolean;
}

/**
 * Detect connection speed
 */
export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'medium';
  }

  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType;

  if (effectiveType === '4g') return 'fast';
  if (effectiveType === '3g') return 'medium';
  return 'slow';
}

/**
 * Get optimal preload strategy based on connection
 */
export function getOptimalPreload(): 'none' | 'metadata' | 'auto' {
  const speed = getConnectionSpeed();
  
  if (speed === 'slow') return 'none';
  if (speed === 'medium') return 'metadata';
  return 'metadata'; // Even on fast, metadata is safer
}

/**
 * Check if device prefers reduced data
 */
export function prefersReducedData(): boolean {
  if (typeof navigator === 'undefined') return false;
  
  const connection = (navigator as any).connection;
  return connection?.saveData === true;
}

/**
 * Preload video metadata
 */
export function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => resolve();
    video.onerror = reject;
    video.src = src;
  });
}

/**
 * Create video lazy loader with IntersectionObserver
 */
export function createVideoLazyLoader(
  rootMargin: string = '200px'
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target as HTMLVideoElement;
          const src = video.dataset.src;

          if (src) {
            video.src = src;
            video.load();
            video.removeAttribute('data-src');
          }

          // Auto-play if muted
          if (video.muted) {
            video.play().catch(() => {
              // Ignore autoplay errors
            });
          }
        }
      });
    },
    {
      rootMargin,
      threshold: 0.1,
    }
  );
}

/**
 * Get video dimensions
 */
export function getVideoDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.onloadedmetadata = () => {
      resolve({ width: video.videoWidth, height: video.videoHeight });
    };
    video.onerror = reject;
    video.src = src;
  });
}
