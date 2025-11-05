
'use client';

import { useEffect } from 'react';

export function PwaInstaller() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // The service worker is registered directly from the public folder.
      // The basePath in next.config.js will handle the path correction.
      navigator.serviceWorker.register('/Alamal/service-worker.js', { scope: '/Alamal/' })
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
