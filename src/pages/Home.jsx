import React, { useEffect } from 'react';
import Hero from '../sections/Hero';

export default function Home({ onPageChange }) {
    console.log("Home:", onPageChange);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero onPageChange={onPageChange} />
    </>
  );
}
