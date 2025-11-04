
"use client";

import { PrivacyPolicyScreenContent } from '@/components/PrivacyPolicyScreenContent';
import { useRouter } from 'next/navigation';

export default function PrivacyPolicyPage() {
  const router = useRouter();

  // Mock navigation functions for compatibility with the component
  const navigate = (screen: string, props?: Record<string, any>) => {
    // This is a simplified navigation. In a real app, you'd map 'screen' to a URL.
    // For now, we assume this page is standalone and navigation goes back.
    router.back();
  };

  const goBack = () => {
    router.back();
  };

  return (
    <PrivacyPolicyScreenContent
      navigate={navigate}
      goBack={goBack}
      canGoBack={true}
    />
  );
}
