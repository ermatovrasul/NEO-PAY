
import { Hero } from '@/components/HeroSection';
import { Countries } from '@/components/Countries';
import { InfoCards } from '@/components/InfoCard';
import { VideoInstruction } from '@/components/VideoInstruction';
import { BecomePart } from '@/components/BecomePart';
import { CryptoControl } from '@/components/CryptoControl';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <Countries />
      <InfoCards />
      <VideoInstruction />
      <CryptoControl />
      <BecomePart />
    </main>
  );
}