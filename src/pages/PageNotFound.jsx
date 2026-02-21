import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import animationData from "../animations/Lonely 404.json"; 
// import lonely from "../assets/animations/Lonely 404 - Mumbossador.lottie";

export default function NotFound() {
  return (
    <main className="mt-40 mb-20">
      <Helmet>
      <title>
        Not Found | Mumbossador
      </title>          
      </Helmet>
      <section>
        <div 
        className="min-w-[300px] m-auto py-none px-10 sm:max-w-[700px] flex flex-col items-center text-center"
        >
          <Lottie 
          className="max-w-[500px]" 
          animationData={animationData} 
          loop 
          />
          <h2 
          className="text-[1.5rem]"
          >
            Page Not Found</h2>
          <p>The page you’re looking for doesn’t exist or has been moved.</p>
          <a 
          className="bg-brand-green hover:bg-brand-green-hover text-white py-2 px-4 rounded-md mt-5"
          href="/"
          >
            Take Me Home
          </a>        
        </div>        
      </section>

    </main>
  );
}
