
'use client';

import { useEffect } from 'react';
import nextConfig from '../../next.config.js';

const basePath = nextConfig.basePath || '';

export function PwaInstaller() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      const serviceWorkerUrl = `${basePath}/service-worker.js`;
      navigator.serviceWorker.register(serviceWorkerUrl)
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return null;
}
