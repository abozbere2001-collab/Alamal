
'use client';

import { useEffect } from 'react';

const basePath = '/Alamal';

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
