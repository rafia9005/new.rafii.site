import NextTopLoader from 'nextjs-toploader';
import { useState, useEffect } from "react";

export default function RootMiddleware({ children }) {
    const [isLoading, setIsLoading] = useState(true);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const dotsInterval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 5 ? prevDots + "." : "."));
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(dotsInterval);
    };
  }, []);
    return (
        <main>
            <NextTopLoader color="black"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  showSpinner={false}
  easing="ease"
  speed={300}
  shadow="0 0 10px #2299DD,0 0 5px #2299DD"
  zIndex={1600}
  showAtBottom={false}/>
  {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div>
            <div className="rounded-full bg-black w-[60px] h-[60px] animate-bounce shadow-lg">
              <div className="rounded-full bg-white w-[40px] h-[40px] animate-bounce"></div>
            </div>
            <p className="text-center text-3xl">{dots}</p>
          </div>
        </div>
      ) : (
        <>
          {children}
        </>
      )}
        </main>
    );
}