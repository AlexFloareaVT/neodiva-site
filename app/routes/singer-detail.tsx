import { useParams, Link } from 'react-router-dom';
import type { Route } from "./+types/home";
import Iridescence from '../backgrounds/BG';

// --- Data Structures ---
interface VocalMode {
  name: string;
  description: string;
  audioUrl: string;
}

interface TermsOfUse {
  r18Content: string;
  commercialVoicebank: string;
  commercialCharacter: string;
  derivatives: string;
}

interface LanguageExample {
    language: string;
    credit: string;
}

interface SingerDetails {
  name:string;
  characterArtUrl: string;
  artistCredit: string;
  description: string;
  cv: string;
  nativeLanguage: string;
  dataSize: string;
  voiceProvider: string;
  multiLanguageData: string[];
  production: string;
  recommendedRange: string;
  suggestedTempo: string;
  modelDownloadUrl: string;
  vocalModes: VocalMode[];
  termsOfUse: TermsOfUse;
}

// --- Global Language Examples List ---
const GLOBAL_LANGUAGE_EXAMPLES: LanguageExample[] = [
    { language: 'JAPANESE', credit: 'KASANE TERRITORY BY OXI AND ZUN, UST BY ZOE' },
    { language: 'KOREAN', credit: 'GRIP! BY EVERY LITTLE THING, UST BY 마따따비 (TABI) FEAST' },
    { language: 'CHINESE', credit: 'YE HUA XIANG BY MO SI MAN, UST BY MIMISAN15' },
    { language: 'FRENCH', credit: 'SYNTHIMENTALE BY CONSLO, UST BY UFR' },
];

// --- Singer Database ---
const singersData: Record<string, SingerDetails> = {
  'alex-floarea': {
    name: 'Alex Floarea',
    characterArtUrl: '/images/AlexFullbody.png',
    artistCredit: 'Wormwood_PROD',
    description: 'Alex Floarea is an undead idol vocal with a versatile vocal range, suitable for a wide variety of genres. From pop and rock to ballads and beyond, Alex can bring your musical creations to life. They have a unique sound that is sure to add something special to your music.',
    cv: 'AlexFloareaVT',
    nativeLanguage: 'English',
    dataSize: 'Roughly 1 hour and 20 minutes',
    voiceProvider: 'AlexFloareaVT',
    multiLanguageData: ['Tigermeat', 'PJS', 'Criss', 'Lottie', 'Printto'],
    production: 'AlexFloareaVT',
    recommendedRange: 'F2 - G5',
    suggestedTempo: '60 - 180BPM',
    modelDownloadUrl: '#',
    vocalModes: [
      { name: 'AWAKEN', description: 'The basic vocal mode, soft and neutral.', audioUrl: '/audio/awaken.mp3' },
      { name: 'DIRT', description: 'An even softer, calmer vocal mode.', audioUrl: '/audio/dirt.mp3' },
      { name: 'ELECTRIC', description: 'A stronger, more powerful vocal mode.', audioUrl: '/audio/electric.mp3' },
      { name: 'BLOODLUST', description: 'A gritty, pop-punk inspired, vocal mode, with more emphasis on having an "American" accent.', audioUrl: '/audio/bloodlust.mp3' },
      { name: 'ALLEN', description: 'A light and airy vocal mode, with more emphasis on a stylised British accent.', audioUrl: '/audio/allen.mp3' },
    ],
    termsOfUse: {
      r18Content: 'Permission Not Required',
      commercialVoicebank: 'Permission Required',
      commercialCharacter: 'Permission Required',
      derivatives: 'Derivatives must be created with permission',
    }
  },
  'andromeda': {
    name: 'Andromeda',
    characterArtUrl: '/images/Andromeda_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'aurelian-silva': {
    name: 'Aurelian Silva',
    characterArtUrl: '/images/Aurelian_Silva_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
   'irone-aka': {
    name: 'Irone Aka',
    characterArtUrl: '/images/Irone_Aka_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'wurmloid': {
    name: 'WURMLOID',
    characterArtUrl: '/images/WURMLOID_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'agate': {
    name: 'AGATE',
    characterArtUrl: '/images/AGATE_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'zephyr': {
    name: 'ZEPHYR',
    characterArtUrl: '/images/ZEPHYR_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'prizrak': {
    name: 'Prizrak',
    characterArtUrl: '/images/Prizrak_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
  'kairo': {
    name: 'Kairo',
    characterArtUrl: '/images/Kairo_Art.png',
    artistCredit: 'Artist Name',
    description: 'Description not available.',
    cv: 'CV not available',
    nativeLanguage: 'Not available',
    dataSize: 'Not available',
    voiceProvider: 'Not available',
    multiLanguageData: [],
    production: 'Not available',
    recommendedRange: 'Not available',
    suggestedTempo: 'Not available',
    modelDownloadUrl: '#',
    vocalModes: [],
    termsOfUse: { r18Content: 'Not specified', commercialVoicebank: 'Not specified', commercialCharacter: 'Not specified', derivatives: 'Not specified' }
  },
};

// --- Route Meta Function ---
export function meta({ params }: Route.MetaArgs) {
  const singer = singersData[params.singerName!];
  const title = singer ? singer.name : 'Singer Not Found';
  
  return [
    { title: `NeoDIVA | ${title}` },
    { name: "description", content: `Details for ${title}, a NeoDIVA vocalist.` },
  ];
}

// --- Detail Row Component ---
const DetailRow = ({ label, value }: { label: string, value: string | string[] }) => (
    <li className="flex flex-col sm:flex-row justify-between border-t border-white/10 py-3">
        <strong className="text-white/90">{label}</strong>
        <span className="text-white/70 text-left sm:text-right">{Array.isArray(value) ? value.join(', ') : value}</span>
    </li>
);

// --- Terms of Use Row Component ---
const TermsRow = ({ label, value }: { label: string, value: string }) => (
    <li className="flex flex-col sm:flex-row justify-between text-sm py-3 border-b border-white/10 last:border-none">
        <span className="text-white/70">{label}</span>
        <strong className="text-white/90 text-left sm:text-right">{value}</strong>
    </li>
);

// --- Main Page Component ---
export default function SingerDetailPage() {
    const { singerName } = useParams();
    const singer = singersData[singerName!];

    if (!singer) {
        return (
            <div className="text-center py-20 min-h-screen">
                <h1 className="text-5xl font-bold text-white">Singer Not Found</h1>
                <Link to="/singers" className="text-lg text-pink-400 hover:underline mt-4 inline-block">
                    Return to Singers list
                </Link>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">

                {/* Left Column: Details, Modes, Terms */}
                <div className="relative w-full lg:w-1/2">
                    {/* Iridescent Background Layer */}
                    <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                       <Iridescence />
                    </div>

                    {/* Content Layer with padding */}
                    <div className="relative z-10 flex flex-col gap-8 p-4 sm:p-6">
                        {/* Main Details Section */}
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-2xl">
                            <h1 className="text-5xl font-bold text-white tracking-wider">{singer.name.toUpperCase()}</h1>
                            <hr className="border-white/20 my-4" />
                            <p className="text-lg text-white/80 mb-4 leading-relaxed">{singer.description}</p>
                            <p className="text-white/60 mb-2">CV: {singer.cv}</p>
                            <p className="text-white/60 mb-6 italic">Art by {singer.artistCredit}</p>
                            
                            <hr className="border-t-2 border-white/20 my-6" />

                            <ul>
                               <DetailRow label="Native language" value={singer.nativeLanguage} />
                               <DetailRow label="Data size" value={singer.dataSize} />
                               <DetailRow label="Voice provider" value={singer.voiceProvider} />
                               <DetailRow label="Data used for multi-language" value={singer.multiLanguageData} />
                               <DetailRow label="Production" value={singer.production} />
                               <DetailRow label="Recommended Range" value={singer.recommendedRange} />
                               <DetailRow label="Suggested Tempo" value={singer.suggestedTempo} />
                            </ul>

                            <div className="text-center mt-8">
                                <a 
                                    href={singer.modelDownloadUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-block bg-white text-black font-bold py-3 px-12 rounded-full text-lg hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105"
                                >
                                    DOWNLOAD MODEL
                                </a>
                            </div>
                        </div>
                        
                        {/* Vocal Modes Section */}
                       {singer.vocalModes.length > 0 && (
                         <div className="bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-2xl">
                            <h2 className="text-3xl font-bold text-white tracking-wider">VOCAL MODES</h2>
                             <hr className="border-white/20 my-4" />
                             <ul>
                                {singer.vocalModes.map((mode) =>(
                                    <li key={mode.name} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4 border-b border-white/10 last:border-none">
                                        <h3 className="text-2xl font-semibold text-white md:col-span-1">{mode.name}</h3>
                                        <p className="text-white/70 md:col-span-1">{mode.description}</p>
                                        <div className="md:col-span-1">
                                            <audio controls src={mode.audioUrl} className="w-full">
                                                Your browser does not support the audio element.
                                            </audio>
                                        </div>
                                    </li>
                                ))}
                             </ul>
                        </div>
                       )}

                        {/* Language Examples Section */}
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-2xl">
                            <h2 className="text-3xl font-bold text-white tracking-wider">LANGUAGE EXAMPLES</h2>
                             <hr className="border-white/20 my-4" />
                             <ul>
                                {GLOBAL_LANGUAGE_EXAMPLES.map((example) => {
                                    const languageSlug = example.language.toLowerCase();
                                    const audioUrl = `/audio/${singerName}_${languageSlug}.mp3`;

                                    return (
                                        <li key={example.language} className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-4 border-b border-white/10 last:border-none">
                                            <h3 className="text-2xl font-semibold text-white md:col-span-1">{example.language}</h3>
                                            <div className="md:col-span-1">
                                                <audio controls src={audioUrl} className="w-full">
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div>
                                            <p className="text-white/70 text-sm md:col-span-1">{example.credit}</p>
                                        </li>
                                    );
                                })}
                             </ul>
                        </div>

                        {/* Terms of Use Section */}
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-2xl">
                            <h2 className="text-3xl font-bold text-white tracking-wider text-center">TERMS OF USE</h2>
                            <hr className="border-white/20 my-4" />
                            <ul>
                                <TermsRow label="R-18 Content Allowed?" value={singer.termsOfUse.r18Content} />
                                <TermsRow label="Commercial Use of Voicebank Allowed?" value={singer.termsOfUse.commercialVoicebank} />
                                <TermsRow label="Commercial Use of Character Allowed?" value={singer.termsOfUse.commercialCharacter} />
                                <TermsRow label="Do these terms apply to derivative characters/voices?" value={singer.termsOfUse.derivatives} />
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Right Column: Sticky Character Art */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-8 flex flex-col items-center self-center lg:self-start">
                    <img 
                        src={singer.characterArtUrl} 
                        alt={singer.name} 
                        className="max-w-full h-auto max-h-[150vh] drop-shadow-[-15px_10px_0px_rgba(255,255,255,1)]"
                    />
                </div>
            </div>
        </div>
    );
}