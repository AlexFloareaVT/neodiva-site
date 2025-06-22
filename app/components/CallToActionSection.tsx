import React from 'react';

// A new, dedicated component for the Call to Action section
const CallToActionSection = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl rounded-3xl border-2 border-white p-12 text-center flex flex-col items-center shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] backdrop-saturate-[2]">
            <h2 className="text-6xl font-bold text-white mb-4 text-shadow-[0_2px_5px_rgb(0_0_0_/_0.6)]">Ready to Collaborate?</h2>
            <p className="text-2xl text-white max-w-2xl mx-auto mb-8 text-shadow-[0_2px_5px_rgb(0_0_0_/_0.5)]">
                At NeoDIVA, we believe in the strength of community. We are committed to collaborating with and supporting creators. If you'd like to work with us, please submit your vocal for consideration as a NeoDIVA feature.
            </p>
<button className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
    Submit Your Vocal
</button>
        </div>
    );
};

export default CallToActionSection;