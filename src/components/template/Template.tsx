import React from 'react'
import Header from './Header';
import Footer from './Footer';
export interface TemplateProps {
  children?: React.ReactNode;
  className?: string;
}
export default function Template(props: TemplateProps) {
  return (
    <>
      <Header />
        <main>
          <div className={`w-full max-w-7xl mx-auto ${props.className}`}>
            {props.children}
          </div>
        </main>
      <Footer />
    </>
  )
}
