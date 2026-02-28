import {delay, motion} from "framer-motion";
import { Icon } from "@iconify/react";

import pattern from "../images/bigpatterngreen.png"

const workData = [
  {
    icon: "ri:chat-voice-fill",
    title: "Team Alignment Coaching",
    description: "Support for leadership teams navigating change and complexity. Focused coaching that restores clarity, strengthens relationships, and drives aligned action. ",
    link: "https://calendar.app.google/FAq3GDmqFkhffqxH7",
    button: "Book a Coaching Session",
    y: 0,
    x: -60,
    delay: 0
  },
  {
    icon: "ri:home-office-fill",
    title: "Workshops & Facilitated Sessions",
    description: "Spaces where clarity, accountability, and trust come alive. Interactive sessions designed to surface what matters and help teams align around shared goals. ",
    link: "mailto:info@ignite2transform.com?subject=Workshop%20Enquiry",
    button: "Make enquiry about workshops",
    y: -20,
    x: 0,
    delay: 0.2
  },
  {
    icon: "ri:align-item-horizontal-center-fill",
    title: "Align Metrics Team Assessment",
    description: "See where misalignment is costing your team energy and results. A diagnostic that reveals hidden gaps in communication, decision-making, and expectations.",
    link: "https://alignandthrive.app/",
    button: "Use Team Assesment",
    y: 60, 
    x: 0,
    delay: 0.4
  },
    {
    icon: "ri:id-card-fill",
    title: "Align & Thrive Cards",
    description: "Spark meaningful conversations that create clarity, trust, and action. A practical card deck to help teams reflect, realign, and move forward together.",
    link: "mailto:info@ignite2transform.com?subject=Align%20&%20Thrive%20Cards%20Enquiry",
    button: "Request for Align & Thrive Cards",
    y: 0,
    x: -40,
    delay: 0.4
  },
  {
    icon: "ri:wechat-fill",
    title: "Feedback Yes!",
    description: "Build confidence around feedback without fear or friction. A practical tool that helps managers and teams practice real conversations that improve performance.",
    link: "https://feedbackyes.com/",
    button: "Use FeedbackYes AI",
    y: 20,
    x: 0,
    delay: 0.6
  },
  {
    icon: "ri:team-fill",
    title: "Team Building Sessions",
    description: "Connection with purpose. Alignment with impact. Not forced fun. Real conversations that strengthen collaboration and team culture. ",
    link: "mailto:info@ignite2transform.com?subject=Team%20Building%20Request",
    button: "Send a Team Building Request",
    y: 0,
    x: 40,
    delay: 0.6
  }
]

export default function HowWeWork(){

    return(
      <section id="how_we_work" className="relative lg:p-6 bg-[#D1E6D3] overflow-hidden scroll-mt-32">
        <img src={pattern} alt="Background pattern" className="absolute -bottom-10 -right-20 rotate-20 w-[400px] h-[400px] object-cover opacity-10" />
        <div className="flex flex-col justify-center items-center md:gap-10 gap-6 mx-auto max-w-7xl sm:p-12 pt-12 p-6 md:rounded-xl">
              <div
                className={`flex flex-col justify-center w-full min-w-[300px] gap-8 md:gap-10 xl:px-[70px] xl:py-[50px] items-center z-10`}
              >
                    <h3 className="reveal-up sm:text-3xl text-xl font-heading text-brand-green">
                      How we work together
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
                        {workData.map((item, index) => (
                          <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: item.y, x: item.x}}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: item.delay }}
                            viewport={{once: true}}
                            className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md group sm:hover:scale-105 sm:hover:bg-brand-green transition-all duration-300">
                            <div className="flex gap-4 items-center">
                            <Icon icon={item.icon} className="text-[#044A2F] bg-[#D1E6D3] p-1 min-w-[32px] min-h-[32px] rounded-full overflow-hidden" />
                            <h4 className="text-xl font-semibold mb-2 leading-tight sm:group-hover:text-white transition-colors duration-300">{item.title} </h4>
                            </div>
                            <p className="text-sm opacity-80 group-hover:opacity-100 sm:group-hover:text-white transition-colors duration-300">{item.description}</p>
                            {item.link && 
                              <a className="flex text-xs text-white gap-2 bg-brand-green px-5 py-2 rounded-md items-center text-center transition-colors duration-200 sm:group-hover:bg-[#D1E6D3] sm:group-hover:text-brand-green"
                                href={item.link}>
                                {item.button}                           
                              </a>
                            }
                        </motion.div>
                        ))}
                    </div>
              </div>
        </div>
      </section>
    )
}