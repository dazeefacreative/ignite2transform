import { Helmet } from "react-helmet";

import drAmara from "../images/Dr Amara.jpeg"

export default function About(){

    return(
        <main className="mt-20">
            <Helmet>
                <title>About Us | Ignite to Transform</title>
                <meta name="description" content="Learn more about working with Ignite to Transform and how we can help you and your team thrive." />
            </Helmet>
            <section className="flex flex-col justify-center items-center md:gap-10 gap-6  mx-auto max-w-5xl p-12 md:rounded-xl">
                <div>
                    <div className="float-left mr-6 mb-4 w-[300px] h-[full] sm:w-[400px] sm:h-[340px] rounded-lg overflow-hidden object-cover bg-brand-green/40 p-3">
                        <img src={drAmara} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <h3 className="reveal-up sm:text-2xl text-lg mb-4 font-semibold text-brand-blue">
                        Keynote Speaker on Leadership & Team Alignment
                    </h3>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        Dr. Amara Igboegwu-Okwum is a leadership and team alignment strategist who delivers compelling keynotes on communication, trust, feedback, and leading through change.                    
                    </p>                    
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        With extensive experience supporting leaders across international NGOs and complex environments, she helps teams move from misalignment to clarity, confidence, and collective action.    
                    </p>                    
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        Her talks blend powerful real-life stories with practical tools, leaving leaders grounded, energized, and equipped to lead with calm authority.                                    
                    </p>                     
                    <h3 className="reveal-up sm:text-2xl text-lg mt-8 mb-4 font-semibold text-brand-blue">
                        Our mission
                    </h3>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        At Ignite2Transform, we believe leadership is not a title, it is a mindset. Leadership lives in everyday decisions, behaviours, and interactions, especially for middle and senior leaders who play a critical role in shaping workplace culture. 
                    </p>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                    We exist to help organisations build harmonious and collaborative environments where people feel connected, valued, and motivated to do their best work. Through intentional leadership development, we support leaders to influence positively, lead with clarity, and create cultures where both people and performance thrive.
                    </p>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                    Our approach is deeply human centred. We recognise that effective leadership begins within and grows outward. By developing self awareness, emotional intelligence, and authentic connection, leaders are better equipped to inspire trust, collaboration, and meaningful change.
                    </p>
                    <h3 className="reveal-up sm:text-2xl text-lg mt-8 mb-4 font-semibold text-brand-blue">
                        Our values
                    </h3>
                    <span className="font-semibold">Self Awareness</span>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        We begin with critical self reflection, enabling leaders to understand their impact, align their values with their actions, and move from awareness to spontaneous intentional action.
                    </p>
                    <span className="font-semibold">Humanness</span>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        Empathy, care, and authenticity are at the heart of everything we do. We believe leadership is most powerful when people feel seen, heard, and respected.
                    </p>
                    <span className="font-semibold">Exceptional Service</span>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        We deliver high impact, personalised support at every stage of the journey. Our work is tailored, practical, and designed to meet leaders where they are, while helping them grow into where they need to be.
                    </p>
                    <p className="reveal-up opacity-80 text-sm mb-4 sm:text-base">
                        At Ignite2Transform, we do not just develop leaders, we help transform mindsets, behaviours, and cultures for lasting impact.
                    </p>
                </div>
            </section>
        </main>
    );
}