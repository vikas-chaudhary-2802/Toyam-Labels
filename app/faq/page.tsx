import { FAQ } from "@/components/premium/FAQ";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Toyam Labels',
  description: 'Frequently Asked Questions about Toyam Labels business models, pricing, and distribution.',
}

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen">
      <FAQ />
    </div>
  );
}
