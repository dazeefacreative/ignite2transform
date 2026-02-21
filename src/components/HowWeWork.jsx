import {delay, motion} from "framer-motion";
import { Icon } from "@iconify/react";

import pattern from "../images/bigpatterngreen.png"

const workData = [
  {
    icon: "ri:chat-voice-fill",
    title: "Team Alignment Coaching",
    description: "Ongoing support for leadership teams navigating change.",
    y: 0,
    x: -60,
    delay: 0
  },
  {
    icon: "ri:home-office-fill",
    title: "Workshops & Facilitated Sessions",
    description: "Designed gatherings that surface clarity, accountability, and trust.",
    y: -20,
    x: 0,
    delay: 0.2
  },
  {
    icon: "ri:align-item-horizontal-center-fill",
    title: "Align Metrics Team Assessment",
    description: "A diagnostic to reveal where misalignment is costing energy.",
    y: 60, 
    x: 0,
    delay: 0.4
  },
    {
    icon: "ri:id-card-fill",
    title: "Align & Thrive Cards",
    description: "Practical tools for teams who want better conversations, immediately.",
    y: 0,
    x: -40,
    delay: 0.4
  },
  {
    icon: "ri:wechat-fill",
    title: "Feedback Yes!",
    description: "A practical feedback practice tool for managers and teams.",
    y: 20,
    x: 0,
    delay: 0.6
  },
  {
    icon: "ri:team-fill",
    title: "Team Building Sessions",
    description: "Purposeful connection aligned to real work. No forced fun.",
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
                            className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md group hover:scale-105 hover:bg-brand-green transition-all duration-300">
                            <div className="flex gap-4 items-center">
                            <Icon icon={item.icon} className="text-[#044A2F] bg-[#D1E6D3] p-1 min-w-[32px] min-h-[32px] rounded-full overflow-hidden" />
                            <h4 className="text-xl font-semibold mb-2 leading-tight group-hover:text-white transition-colors duration-300">{item.title} </h4>
                            </div>
                            <p className="text-sm opacity-80 group-hover:opacity-100 group-hover:text-white transition-colors duration-300">{item.description}</p>
                        </motion.div>
                        ))}
                    </div>
              </div>
        </div>
      </section>
    )
}