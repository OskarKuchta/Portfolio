import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import gsap from "gsap";

const Loader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const barConfirmRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);
  const idRef = useRef<number | null>(null);

  const load = useMemo(() => {
    return gsap.timeline({
      paused: true,
      onComplete: () => setLoadingComplete(true),
    });
  }, []);

  let width = 1;

  const loading = useCallback(() => {
    idRef.current = setInterval(frame, 25);

    function frame() {
      if (width >= 100) {
        clearInterval(idRef.current!);
        load.play();
      } else {
        width++;
        if (barConfirmRef.current && percentRef.current) {
          barConfirmRef.current.style.width = `${width}%`;
          percentRef.current.innerHTML = `${width}%`;
        }
      }
    }
  }, [load, width]);

  useEffect(() => {
    load.to(".loader #bar", {
      duration: 0.1,
      opacity: 0,
      zIndex: -1,
    });
   

    loading();

    return () => {
      clearInterval(idRef.current!);
    };
  }, [load, loading]);

  if (!loadingComplete) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <>
      {!loadingComplete && (
        <div className="loader fixed top-0 left-0 w-full h-screen bg-black z-[100]">
          <div className="progress h-screen">
            <div id="bar" ref={barConfirmRef} className="bg-[#0a192f]">
              <div
                id="barconfirm"
                ref={percentRef}
                className="h-screen w-screen text-white text-9xl font-light italic mix-blend-difference flex justify-center items-center"
              >
                {width}%
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
