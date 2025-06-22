import Iridescence from '../backgrounds/BG';
import ChromaGrid from '../components/ChromaGrid';
import CallToActionSection from '../components/CallToActionSection';

// Data for the team members. You can easily add more cards here.
const teamMembers = [
  {
    image: './images/AlexIcon.jpg',
    title: 'Alex Floarea',
    subtitle: 'Lead Developer & Project Lead. Alex is the mastermind behind the NeoDIVA project.',
    handle: '@AlexFloareaVT',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #4F46E5, #000)',
    url: 'https://github.com/',
  },
  {
    image: './images/WormIcon.jpg',
    title: 'Wormwood',
    subtitle: 'Key Artist and Music Producer. They assist in creating illustrated assets for NeoDIVA.',
    handle: '@Wormwood_PROD',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    url: 'https://dribbble.com/',
  },
  {
    image: './images/WurmIcon.jpg',
    title: 'Algernyan',
    subtitle: 'Character Designer. They assist in creating unique designs for the NeoDIVA lead vocals.',
    handle: '@mcsquirmus',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg, #10B981, #000)',
    url: 'https://linkedin.com/in/',
  },
];


export function About() {
  return (
    <div
      className="relative p-4 sm:p-6 md:p-8 rounded-4xl overflow-hidden"
      style={{
        backgroundImage: `url('./images/BG.png')`, // <-- Add the path to your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* The Iridescence component has been removed. */}

      {/* A semi-transparent overlay is added to ensure text readability over the background image. */}
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 -z-1"></div>
      {/* Hero Banner for the About page */}
      <div className="relative h-auto md:h-[400px] overflow-hidden rounded-4xl shadow-[0px_0px_45px_1px_rgba(0,0,0,0.5)] mb-8">
        <img
          src="/images/banner.png" // You'll need to create this new banner image
          alt="About the NeoDIVA Team"
          className="absolute inset-0 w-full h-auto object-cover z-0"
        />
        <div
          className="absolute inset-0 bg-black opacity-25 z-10"
          aria-hidden="true"
        ></div>
        <div className="relative z-20 flex flex-col items-start justify-center h-75 p-6 md:p-20 gap-4 text-left text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
          <h1 className="text-5xl font-bold text-white">
            Meet the Team
          </h1>
          <p className="text-lg text-zinc-300 text-shadow-[0_2px_5px_rgb(0_0_0_/_1)]">
            The architects behind the voices.
          </p>
        </div>
      </div>
      
      {/* Main content area for the team cards */}
      <div className="py-16 md:py-8 space-y-10 flex flex-col items-center">
        <ChromaGrid 
            items={teamMembers} 
            columns={3}
            rows={1}
            radius={400}
            damping={0.5}
            fadeOut={0.7}
        />
      </div>
    </div>
  );
}