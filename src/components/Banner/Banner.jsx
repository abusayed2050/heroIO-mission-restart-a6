import React from 'react';
import Hero from '../../assets/Hero.png';

const Banner = () => {
    return (
        <div>
            <div className="bg-gray-50 py-16 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    We Build
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-purple-600">Productive</span>{" "}
                    <span className="text-gray-900">Apps</span>
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className="flex justify-center gap-4 mb-10">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    >
                        <svg viewBox="0 0 512 512" className="w-5 h-5" fill="none">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35V477c0 15.8 8.7 28.2 21.7 35l242.7-242L47 0zm425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.9 17.1-34.9-.2-60.8zm-220 55.3L69.7 512l280.8-161.2-97.9-70.9z" fill="url(#playGradient)" />
                            <defs>
                                <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00d2ff" />
                                    <stop offset="100%" stopColor="#3a7bd5" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Google Play
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    >
                        <svg viewBox="0 0 814 1000" className="w-5 h-5">
                            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.2 135.4-316.7 268.1-316.7 70.5 0 129.2 46.4 173.1 46.4 42.1 0 108.2-49 190.4-49 30.8 0 108.2 2.6 168.1 81.3zm-137.3-333c34.3-41 58.5-98.8 58.5-156.6 0-8.3-.6-16.6-2-24.3-55.3 2-118.7 36.8-158.2 82.8-32.1 37.1-61.4 94.9-61.4 153.4 0 9 1.3 18 2 20.7 3.3.6 8.5 1.3 13.8 1.3 49.9 0 109.5-32.7 147.3-77.3z" fill="#555" />
                        </svg>
                        App Store
                    </a>
                </div>

                {/* Phone mockup with app icons */}
                <div className="relative inline-block">
                    <div className=" mx-auto ">
                        <img src={Hero} alt="Hero.IO" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;