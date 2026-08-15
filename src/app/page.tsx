import { HeroSection } from '@/components/home/HeroSection';
import { LiveTicker } from '@/components/home/LiveTicker';
import { WhyGrantSection } from '@/components/home/WhyGrantSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { EligibilitySection } from '@/components/home/EligibilitySection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { PhotoQuoteBand } from '@/components/home/PhotoQuoteBand';
import { StoriesSection } from '@/components/home/StoriesSection';
import { CoordinatorSection } from '@/components/home/CoordinatorSection';
import { FaqSection } from '@/components/home/FaqSection';
import { ApplyCtaSection } from '@/components/home/ApplyCtaSection';

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <LiveTicker />
      <WhyGrantSection />
      <StatsSection />
      <ProgramsSection />
      <EligibilitySection />
      <ProcessSection />
      <PhotoQuoteBand />
      <StoriesSection />
      <CoordinatorSection />
      <FaqSection />
      <ApplyCtaSection />
    </div>
  );
}
