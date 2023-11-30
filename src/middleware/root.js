import NextTopLoader from 'nextjs-toploader';

export default function RootMiddleware({ children }) {
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
            {children}
        </main>
    );
}