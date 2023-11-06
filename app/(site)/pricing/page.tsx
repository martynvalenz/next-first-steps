import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Description',
  keywords:['About page','Martiner','info']
};
export default function PricingPage() {
  return (
    <>
      <h1 className="text-7xl">Pricing page</h1>
      <p>
        This is the pricing page.
      </p>
    </>
  )
}