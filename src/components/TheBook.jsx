import { useState } from "react";
import { Icon } from "@iconify/react";

import book from "../images/book.png"
import promptbook from "../images/alignmentprompt.png"

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
                      Grab a copy of MISALIGNED
                    </h3>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">
                      Why smart teams still struggle and how alignment changes everything
                    </p>
                    <h4 className="reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue">Why the book exists</h4>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">Smart teams struggle. Not because they lack intelligence or strategy, but because they lack alignment.</p>
                    <h4 className={`reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue ${readMore ? "block" : "hidden"}`}>What readers gain</h4>
                    <p className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>In MISALIGNED, Dr. Amarachi Igboegwu-Okwum reveals the hidden forces that undermine even the most capable teams: unclear expectations, avoided feedback, decision bottlenecks and silent resentment.</p>
                    <p className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>Drawing on years of experience supporting senior leaders across humanitarian and global contexts, she shows how misalignment quietly erodes trust and performance, especially during change.</p>
                    <h4 className={`reveal-up sm:text-xl text-lg font-semibold font-body text-brand-blue ${readMore ? "block" : "hidden"}`}>This practical guide helps you:</h4>
                    <ul className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>
                      <li className="list-disc ml-4">Spot early signs of misalignment</li>
                      <li className="list-disc ml-4">Strengthen communication without defensiveness</li>
                      <li className="list-disc ml-4">Balance psychological safety with accountability</li>
                      <li className="list-disc ml-4">Clarify roles, decisions and expectations</li>
                      <li className="list-disc ml-4">Lead difficult conversations with calm authority</li>
                    </ul>
                    <p className={`reveal-up opacity-80 text-sm sm:text-base ${readMore ? "block" : "hidden"}`}>If you lead people and carry responsibility for results, MISALIGNED will help you restore clarity, rebuild trust and create the conditions where teams thrive.</p>
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
        <div className="flex flex-col justify-center items-center md:gap-10 gap-6  mx-auto max-w-7xl sm:p-12 pt-12 p-6 md:rounded-xl">
              <div
                className={`flex flex-col lg:flex-row-reverse lg:flex-row justify-between w-full min-w-[300px] md:gap-10 xl:px-[70px] xl:py-[50px] items-center`}
              >
                <div
                  className={`min-w-[300px] w-full max-w-[400px] items-center flex justify-center`}
                >
                  <img
                    src={promptbook}
                    alt="The Book Image"
                    className="rounded-lg overflow-hidden object-cover w-full h-full"
                  />
                </div>
                {/* Text */}
                <div
                  className={`flex flex-col items-start lg:max-w-[480px]`}
                >
                  <div className="flex flex-col items-start gap-6 md:gap-6 mt-4 mb-4">
                    <h3 className="reveal-up sm:text-3xl text-lg font-heading text-brand-green">
                      Get the Align & Thrive Prompts for free
                    </h3>
                    <p className="reveal-up opacity-80 text-sm sm:text-base">
                      12 prompts designed to build alignment in your next all-staff or team meeting. 
                    </p>
                    <span className="reveal-up opacity-80 text-sm sm:text-base font-bold">Download the digital flipbook here:  

                    </span>
                    <div className="flex gap-2">
                    <a 
                      href="https://heyzine.com/flip-book/Align_Thrive_Prompt_and_More_Digital_Download" 
                      className="flex text-sm text-black gap-2 border border-black p-2 px-4 rounded-md cursor-pointer items-center transition-colors duration-200 hover:opacity-60">
                        Read The Book 
                    </a>
                    <a 
                      href="https://cdn.heyzine.com/flip-book/pdf/46836505dc6579b92cca60ed402af7b110d58ffb.pdf"
                      target="_blank" 
                      className="flex text-sm text-white gap-2 bg-brand-green px-5 py-2 rounded-md items-center text-center transition-colors duration-200 hover:bg-brand-green-hover">
                        Download Now
                    </a>
                    </div>
                  </div>
                </div>
              </div>
        </div>      
        </section>
    )
}