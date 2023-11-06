import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Title',
  description: 'About Description',
  keywords:['About page','Martiner','info']
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-7xl">About page</h1>
      <p>
        This is the about page.
      </p>
    </>
  )
}