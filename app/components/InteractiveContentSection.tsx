import { useState, useEffect, useRef } from 'react';
import './InteractiveContentSection.css';

const InteractiveContentSection = ({ title, backgroundUrl, reverse = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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

        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className={`
                group relative flex items-center overflow-hidden
                min-h-[150px] rounded-3xl border-2 border-white
                shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.02]
                cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            {/* Background Image with Hover Effect */}
            <div
                style={{ backgroundImage: `url(${backgroundUrl})` }}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out opacity-50 group-hover:opacity-100"
            ></div>

            {/* Content Container */}
            <div className={`relative z-10 flex w-full p-8 md:p-12 ${reverse ? 'justify-start' : 'justify-end'}`}>
                <div className="md:w-1/2 text-center">
                    <h2 className="text-7xl font-bold text-white">
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default InteractiveContentSection;