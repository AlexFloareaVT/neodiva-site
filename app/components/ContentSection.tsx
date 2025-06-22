import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Reusable component for the content sections, now with optional button props
const ContentSection = ({ title, children, imageUrl, imageAlt, reverse = false, buttonText, buttonTo }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const textSection = (
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
            <h2 className="text-6xl font-bold text-white mb-4 text-shadow-[0_2px_5px_rgb(0_0_0_/_0.6)]">{title}</h2>
            <p className="text-2xl text-white leading-relaxed text-shadow-[0_2px_5px_rgb(0_0_0_/_0.5)] mb-8">{children}</p>
            {/* Conditionally render the button if props are provided */}
            {buttonText && buttonTo && (
                <Link to={buttonTo} viewTransition>
<button className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-zinc-200 transition-all duration-300 transform hover:scale-105 cursor-pointer">
    {buttonText}
</button>
                </Link>
            )}
        </div>
    );
    const imageSection = (
        <div className="md:w-1/2 flex items-center justify-center p-4">
            <img src={imageUrl} alt={imageAlt} className="max-w-md md:max-w-lg h-auto drop-shadow-xl/50" />
        </div>
    );

    return (
        <div
            ref={sectionRef}
            className={`
                bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-saturate-[2] rounded-3xl border-2 border-white p-8 backdrop-blur-3xl
                shadow-[0px_0px_10px_1px_rgba(0,0,0,0.2)] transition-all duration-1000 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div
                className={`
                    flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
                    items-center gap-8
                `}
            >
                {textSection}
                {imageSection}
            </div>
        </div>
    );
};

export default ContentSection;