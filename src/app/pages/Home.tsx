import React from 'react';
import { Hero } from '../components/Hero';
import { AstronautSection } from '../components/AustronautSection';
import { HighlightedContent } from '../components/HighlightedContent';
import { ConversionSection } from '../components/ConvertionSection';

export const Home = () => (
  <main>
    <Hero />
    <AstronautSection />
    <HighlightedContent />
    <ConversionSection />
  </main>
)