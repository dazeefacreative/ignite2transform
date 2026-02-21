import { useState } from "react";
import { Icon } from "@iconify/react";

import book from "../images/book.png"

export default function Book(){
    const [readMore, setReadMore] = useState(false);

    return(
      <section id="misaligned_book" className="lg:p-12 scroll-mt-32">
        <div className="flex flex-col justify-center items-center md:gap-10 gap-6  mx-auto max-w-7xl sm:p-12 pt-12 p-6 md:rounded-xl">
              <div
                className={`flex flex-col lg:flex-row-reverse lg:flex-row justify-between w-full min-w-[300px] md:gap-10 xl:px-[70px] xl:py-[50px] items-center`}
              >
                {/* Image */}
                <div
                  className={`min-w-[300px] w-full max-w-[400px] md:max-w-[580px] md:h-full sm:max-w-[500px] items-center flex justify-center`}
                >
                  <img
                    src={book}
                    alt="The Book Image"
                    className="w-full h-full rounded-lg overflow-hidden object-cover"
                  />
                </div>
                {/* Text */}
                <div
                  className={`flex flex-col items-start lg:max-w-[480px]`}
                >
                  <div className="flex flex-col items-start gap-6 md:gap-6 mb-4">
                    <h3 className="reveal-up sm:text-3xl text-lg font-heading text-brand-green">
                      Buy The <span className="line-through">Mis</span>aligned Book
                    </h3>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">
                      Why smart teams still struggle and how alignment changes everything
                    </p>
                    <h4 className="reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue">Why the book exists</h4>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">{readMore ? `Aligned was written because too many teams struggle not from a lack of talent or care, but from a lack of shared understanding. Expectations go unspoken, assumptions replace clarity, and misalignment slowly erodes trust, performance, and morale. This book exists to help leaders and teams intentionally design alignment, rather than hoping it happens on its own.` : `Aligned was written because too many teams struggle not from a lack of talent or care, but from a lack of shared understanding. Expectations go unspoken, assumptions replace clarity, and misalignment slowly erodes trust, performance, and morale. This book exists to help leaders and teams intentionally design alignment, rather than hoping it happens on its own.`.slice(0, 200) + "..." }</p>
                    <h4 className={`reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue ${readMore ? "block" : "hidden"}`}>What readers gain</h4>
                    <p className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>Readers will gain practical tools and guided reflections to help teams communicate clearly, build trust, and stay aligned around goals, roles, and decisions. Aligned offers real world frameworks for creating clarity, improving collaboration, and leading intentional conversations that move teams forward with confidence and purpose.</p>
                    <h4 className={`reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue ${readMore ? "block" : "hidden"}`}>Who it is for?</h4>
                    <p className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>Aligned is for leaders, managers, founders, and teams who want to work better together. It is especially valuable for organisations experiencing growth, change, or tension, and for anyone responsible for bringing people into alignment around a shared direction.</p>
                    <div className="flex gap-2">
                    <button 
                    onClick={() => setReadMore(!readMore)}
                    className="flex text-sm text-black gap-2 border border-black p-2 px-4 rounded-md cursor-pointer items-center transition-colors duration-200 hover:opacity-60">
                        {readMore ? "Read less" : "Read more"}
                    </button>
                    <a href="https://amzn.eu/d/fQt1Ma1" target="_blank" className="flex text-sm text-white gap-2 bg-brand-green pl-5 p-2 rounded-md items-center transition-colors duration-200 hover:bg-brand-green-hover">
                      Buy The Book <Icon icon="iconoir:arrow-up-right" className="text-brand-green bg-brand-yellow p-1 rounded-sm size-6" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </section>
    )
}