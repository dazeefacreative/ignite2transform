
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import heroImage from "../images/meeting-round-table.png"
import pattern from "../images/pattern.png"

export default function Hero(){

    return(
        <section className="w-full lg:px-[100px] md:px-[30px] sm:px-20 sm:pb-20 transition-all duration-300">
            <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full flex flex-col lg:flex-row gap-12 items-center justify-center lg:pt-[110px] pb-[50px] sm:p-[50px] bg-brand-green">
                <img src={pattern} className="hidden lg:block absolute top-10 left-80 w-[200px] object-cover opacity-10 z-1" />
                <img src={pattern} className="hidden lg:block absolute -bottom-10 -right-10 w-[200px] object-cover opacity-10 z-1" />
                    
                
                <div className="relative z-2">
                <div className="sm:hidden absolute bottom-0 left-0 bg-gradient-to-t from-brand-green to-transparent w-full h-[100px] z-4"/>
                <img src={heroImage} className="w-full min-w-[300px] max-w-[630px] h-full object-cover md:rounded-3xl md:rounded-bl-none z-2" />
                </div>
                <div className="max-w-[470px] flex flex-col gap-8 px-[30px] -mt-30 sm:mt-0 z-6">
                    <p className="text-white text-2xl lg:text-3xl text-center sm:text-start ">We help leadership teams build shared understanding, trust, and clarity through intentional conversations, alignment tools, and facilitated spaces.</p>
                    <div className="flex flex-col sm:items-start items-center gap-2">
                        <a href="https://calendar.app.google/FAq3GDmqFkhffqxH7" className="flex text-black w-full max-w-[230px] h-[40px] justify-center gap-2 bg-white rounded-md items-center transition-colors duration-200 hover:bg-gray-300 active:bg-white">
                            Book A Free Call <Icon icon="iconoir:arrow-up-right" className="text-brand-green bg-brand-yellow p-1 rounded-sm size-6" />
                        </a>
                        <a href="/the_alignment" className="flex text-white w-full max-w-[230px] h-[40px] justify-center gap-2 border border-white rounded-md items-center transition-colors duration-200 hover:opacity-70">
                            Explore Align & Thrive 
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}