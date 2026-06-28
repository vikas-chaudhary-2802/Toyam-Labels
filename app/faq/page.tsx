import { FAQ } from "@/components/premium/FAQ";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | FreeToyam',
  description: 'Frequently Asked Questions about FreeToyam business models, pricing, and distribution.',
}

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen">
      <FAQ />
    </div>
  );
}
