import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

import phone from "../images/phone.png"

const podcasts = [
    {
        name: "EP 1: Generative AI for Workplace & Business Automation with Charles Agbo",
        youtube_url: "https://www.youtube.com/embed/tK0jdn3aGEA"
    },
    {
        name: "EP 2: How to Bring Clarity & Cohesion to Your Team",
        youtube_url: "https://www.youtube.com/embed/YBVCwBCeY_8"
    },
    {
        name: "EP 3: Why Nigeria Needs Inclusive Workplaces",
        youtube_url: "https://www.youtube.com/embed/vNgIUG-JVBk"
    },
    {
        name: "EP 4: Try These Stress Management Techniques",
        youtube_url: "https://www.youtube.com/embed/tgWQL1_QVJc"
    },
]

export default function Podcast(){
    //   const [podcasts, setPodcasts] = useState([]);
      const [currentPlaying, setCurrentPlaying] = useState(null);
      const audioRefs = useRef({}); // store multiple refs

    const togglePlay = (index) => {
    const currentAudio = audioRefs.current[index];

    if (!currentAudio) return;

    // If the clicked one is already playing, pause it
    if (currentPlaying === index) {
      currentAudio.pause();
      setCurrentPlaying(null);
    } else {
      // Pause the previous one
      if (currentPlaying !== null && audioRefs.current[currentPlaying]) {
        audioRefs.current[currentPlaying].pause();
      }

      // Play the new one
      currentAudio.play();
      setCurrentPlaying(index);
    }
  };

    return(

        <main className="mt-20">
            <Helmet>
                <title>Podcast | Ignite to Transform</title>
                <meta name="description" content="Learn more about working with Ignite to Transform and how we can help you and your team thrive." />
            </Helmet>
            <section>
                <div className="flex flex-col justify-center md:gap-10 gap-6  mx-auto max-w-7xl pt-12 sm:p-12 md:rounded-xl">
                    <div
                        className={`flex flex-col lg:flex-row-reverse lg:flex-row justify-between w-full min-w-[300px] md:gap-10 xl:px-[70px] xl:py-[50px]`}
                    >
                        <div className="flex flex-col items-start lg:max-w-[480px] p-6" >
                            <div className="flex flex-col items-start gap-6 md:gap-6 mb-4">
                                <h3 className="text-2xl font-heading text-brand-green">Ignite to Transform Podcast</h3>

                                <p className="reveal-up opacity-80 text-sm sm:text-base">
                                Here is a podcast dedicated to reshaping how we think about leadership, culture, and human connection at work. Through honest conversations, practical insights, and real world experiences, we explore self awareness, empathy, and intentional leadership in action. 
                                </p>
                                <p className="reveal-up opacity-80 text-sm sm:text-base">
                                Each episode is designed to equip middle and senior leaders with the mindset and tools needed to create workplaces where people feel valued, engaged, and empowered to perform at their best.
                                </p>
                            </div>
                            
                        <a href="https://www.youtube.com/@theteamalignmentpodcast" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-hover hover:underline transition-all duration-200">
                            {`> Browse Youtube for more Podcasts`}
                        </a>
                        </div>
                        <div className="flex flex-col gap-2.5 mb-5 justify-start px-6 lg:px-0">
                            
                                {podcasts?.map((episode, i) => (
                                <div key={i} className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                    <p className="w-[300px] sm:w-[260px] font-bold">{episode.name}</p>
                                    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-gray-300 mb-6">
                                        <iframe
                                            width="100%"
                                            height="160"
                                            src={episode.youtube_url}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section> 
        </main>

    );
}