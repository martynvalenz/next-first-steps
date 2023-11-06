import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page Description',
  keywords:['About page','Martiner','info']
};
export default function ContactPage() {
  return (
    <>
      <h1 className="text-7xl">Contact page</h1>
      <p>
        This is the contact page.
      </p>
    </>
  )
}