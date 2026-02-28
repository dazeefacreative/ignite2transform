
import { Icon } from "@iconify/react";

import coaching from "../images/Align & Thrive Coaching Programme.png"
import facilitate from "../images/Facilitate Like a Pro.png"
import building from "../images/Building Cultures of Trust & Belonging.png"

const servicesData = [
  {
    index: 1,
    title: "Align & Thrive Coaching Programme",
    description:
      "Align & Thrive helps middle managers move past misalignment and unclear expectations by building clarity, confidence, and team alignment. Through a blend of strategy and human connection, leaders learn to communicate effectively, lead with intention, and guide their teams towards shared direction and engagement.",
    image: coaching,
    bgColor: "sm:bg-[#B3E0AB]",
  },
    {
    index: 2,
    title: "Facilitate Like a Pro!",
    description:
      "Tired of unproductive meetings and disengaged teams? Strong facilitation is now a must have skill for modern leaders. This programme helps you create psychological safety, engage diverse voices, manage group dynamics, and lead with confidence. Whether you are just starting out or ready to grow, you will learn how to lead any session with clarity and impact. Book a consultation meeting today.",
    image: facilitate,
    bgColor: "sm:bg-[#E0D8AB]",
  },
    {
    index: 3,
    title: "Inclusive Teams: Building Cultures of Trust & Belonging",
    description:
      "Leading a team is about more than targets, it is about creating safety, trust, and inclusion. This experience helps middle managers build psychological safety, empathy, bias awareness, and have more conscious conversations. Designed for in person or hybrid teams, it supports more intentional and collaborative ways of working. Book a consultation meeting today to lead with clarity, connection, and impact.",
    image: building,
    bgColor: "sm:bg-[#ABD6E0]",
  },
];

export default function Services(){

    return(
      <section className="lg:p-12">
        <div className="flex flex-col justify-center items-center md:gap-10 gap-6 bg-gray-200 mx-auto max-w-7xl md:p-12 p-6 py-12   md:rounded-xl">
          {servicesData.map((service, i) => {
            const isEven = service.index % 2 === 0;
            return (
              <div
                key={service.index}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between w-full min-w-[300px] md:gap-10 xl:px-[70px] xl:py-[50px] p-[30px] items-center bg-white rounded-xl shadow-md sm:shadow-none`}
              >
                {/* Image */}
                <div
                  className={`min-w-[300px] w-full max-w-[400px] md:max-w-[580px] md:h-[400px] sm:max-w-[500px] rounded-[20px] items-center flex justify-center p-6 ${service.bgColor}`}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} Image`}
                    className="w-full h-full rounded-lg overflow-hidden object-cover"
                  />
                </div>
                {/* Text */}
                <div
                  className={`flex flex-col items-start lg:max-w-[480px]`}
                >
                  <div className="flex flex-col items-start gap-6 md:gap-12 mb-4">
                    <h3 className="reveal-up sm:text-2xl text-lg font-heading text-brand-green">
                      {service.title}
                    </h3>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">
                      {service.description}
                    </p>
                    <a href="https://calendar.app.google/FAq3GDmqFkhffqxH7" className="flex text-sm text-white gap-2 bg-brand-green pl-5 p-2 rounded-md items-center transition-colors duration-200 hover:bg-brand-green-hover">
                      Book A Call <Icon icon="iconoir:arrow-up-right" className="text-brand-green bg-brand-yellow p-1 rounded-sm size-6" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
}