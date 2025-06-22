import { Link } from 'react-router-dom';
// The Iridescence import is no longer needed, so it can be removed or commented out.
// import Iridescence from '../backgrounds/BG';
import ContentSection from '../components/ContentSection';
import CallToActionSection from '../components/CallToActionSection';

export function Welcome() {
  return (
    // The main container is now styled with a background image.
    <div
      className="relative p-4 sm:p-6 md:p-8 rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `url('./images/BG.png')`, // <-- Add the path to your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* The Iridescence component has been removed. */}

      {/* A semi-transparent overlay is added to ensure text readability over the background image. */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 -z-1"></div>

      {/* Image Hero Banner (unchanged) */}
      <div className="relative h-auto md:h-[400px] overflow-hidden rounded-4xl shadow-[0px_0px_10px_1px_rgba(0,0,0,0.5)] mb-8">
        <img
          src="/images/banner.png"
          alt="AI Vocalists"
          className="absolute inset-0 w-full h-auto object-cover z-0"
        />
        <div
          className="absolute inset-0 bg-black opacity-25 z-10"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 flex flex-col items-start justify-center h-75 p-6 md:p-20 gap-4 text-left text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
          <h1 className="text-5xl font-bold text-white">
            This is NeoDIVA.
          </h1>
          <p className="text-lg text-zinc-300 text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
            AI Vocalists for everyone.
          </p>
        </div>
      </div>

      {/* New Main Body Content (unchanged) */}
      <div className="py-16 md:py-8 space-y-10">

        <ContentSection
          title="WHO ARE WE?"
          imageUrl="/images/AlexPlaceholder.png"
          imageAlt="NeoDIVA character with pink hair"
          buttonText="Meet The Team"
          buttonTo="/about"
        >
          NeoDIVA is a group dedicated to creating unique AI Vocalists, utilising OpenVPI's DiffSinger engine.
        </ContentSection>

        <ContentSection
          title="NEODIVA LEAD VOCALS"
          imageUrl="/images/AndromedaPlaceholder.png"
          imageAlt="NeoDIVA character with green hair"
          reverse={true}
          buttonText="Meet The Singers"
          buttonTo="/singers"
        >
          NeoDIVA's "Lead" vocals are designed to provide the essential foundations for AI vocal synthesis, offering a range of voices that includes both masculine and feminine options, as well as a neutral or in-between voice.
        </ContentSection>

        <CallToActionSection />

      </div>
    </div>
  );
}