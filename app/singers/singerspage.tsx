import { Link } from 'react-router-dom';
import InteractiveContentSection from '../components/InteractiveContentSection';
import CallToActionSection from '../components/CallToActionSection';

// Data for the singers. This can be easily expanded.
const leadSingers = [
  {
    name: 'Alex Floarea',
    backgroundUrl: '/images/AlexBanner.png',
  },
  {
    name: 'Andromeda',
    backgroundUrl: '/images/AndromedaBanner.png',
  },
  {
    name: 'Aurelian Silva',
    backgroundUrl: '/images/LyraBanner.png',
  },
    {
    name: 'Irone Aka',
    backgroundUrl: '/images/CygnusBanner.png',
  },
  {
    name: 'WURMLOID',
    backgroundUrl: '/images/PhoenixBanner.png',
  },
  {
    name: 'AGATE',
    backgroundUrl: '/images/PhoenixBanner.png',
  }
];

const featureSingers = [
    {
    name: 'ZEPHYR',
    backgroundUrl: '/images/ZephyrBanner.png',
  },
  {
    name: 'Prizrak',
    backgroundUrl: '/images/PrizrakBanner.png',
  },
  {
    name: 'Kairo',
    backgroundUrl: '/images/KairoBanner.png',
  }
];

export function Singers() {
  return (
    <div
      className="relative p-4 sm:p-6 md:p-8 rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `url('./images/BG.png')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 -z-1"></div>
      
      <div className="py-16 md:py-8">
        
        {/* Lead Vocals Banner */}
        <div className="relative h-auto md:h-[300px] overflow-hidden rounded-4xl shadow-[0px_0px_45px_1px_rgba(0,0,0,0.5)] mb-12">
            <img
              src="/images/banner.png"
              alt="Lead Vocals"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div
              className="absolute inset-0 bg-black opacity-25 z-10"
              aria-hidden="true"
            ></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 md:p-20 gap-4 text-center text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
              <h1 className="text-5xl font-bold text-white">
                Lead Vocals
              </h1>
              <p className="text-lg text-zinc-300 text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
                The essential foundations for AI vocal synthesis.
              </p>
            </div>
        </div>
        
        {/* Wrapper for Lead Singers List */}
        <div className="flex flex-col gap-8 mb-12">
            {leadSingers.map((singer, index) => {
                const singerSlug = singer.name.toLowerCase().replace(/\s+/g, '-');
                return (
                     <Link to={`/singers/${singerSlug}`} key={singer.name} viewTransition>
                        <InteractiveContentSection
                            title={singer.name.toUpperCase()}
                            backgroundUrl={singer.backgroundUrl}
                            reverse={index % 2 !== 0}
                        />
                    </Link>
                );
            })}
        </div>

        {/* Feature Vocals Banner */}
        <div className="relative h-auto md:h-[300px] overflow-hidden rounded-4xl shadow-[0px_0px_45px_1px_rgba(0,0,0,0.5)] mb-12">
            <img
              src="/images/banner.png"
              alt="Feature Vocals"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div
              className="absolute inset-0 bg-black opacity-25 z-10"
              aria-hidden="true"
            ></div>
            <div className="relative z-20 flex flex-col items-center justify-center h-full p-6 md:p-20 gap-4 text-center text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
              <h1 className="text-5xl font-bold text-white">
                Feature Vocals
              </h1>
               <p className="text-lg text-zinc-300 text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
                Highlighting community collaborations and unique voices.
              </p>
            </div>
        </div>

        {/* Wrapper for Feature Singers List */}
        <div className="flex flex-col gap-8 mb-12">
            {featureSingers.map((singer, index) => {
                 const singerSlug = singer.name.toLowerCase().replace(/\s+/g, '-');
                 return (
                    <Link to={`/singers/${singerSlug}`} key={singer.name} viewTransition>
                        <InteractiveContentSection
                            title={singer.name.toUpperCase()}
                            backgroundUrl={singer.backgroundUrl}
                            reverse={index % 2 !== 0}
                        />
                    </Link>
                );
            })}
        </div>

        <CallToActionSection />

      </div>
    </div>
  );
}