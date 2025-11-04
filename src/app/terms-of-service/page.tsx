
"use client";

import { TermsOfServiceScreenContent } from '@/components/TermsOfServiceScreenContent';
import { useRouter } from 'next/navigation';

export default function TermsOfServicePage() {
  const router = useRouter();

  // Mock navigation functions for compatibility with the component
  const navigate = (screen: string, props?: Record<string, any>) => {
    router.back();
  };

  const goBack = () => {
    router.back();
  };

  return (
    <TermsOfServiceScreenContent
      navigate={navigate}
      goBack={goBack}
      canGoBack={true}
    />
  );
}
