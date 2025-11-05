
'use client';

import { useEffect } from 'react';

export function PwaInstaller() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator
    ) {
      // Use a static path that will be correct on GitHub Pages
      const serviceWorkerUrl = '/Alamal/sw.js';
      navigator.service-worker.js
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
