import { useState } from "react";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";

const Loader = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const load = gsap.timeline({
    paused: true,
    onComplete: () => setLoadingComplete(true),
  });

  load.to("#percent , #bar", {
    duration: 0.2,
    opacity: 0,
    zIndex: -1,
  });
  load.to(".progress", {
    duration: 0.8,
    width: "0%",
  });

  const idRef = useRef<number | null>(null);
  const barConfirmRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLDivElement>(null);

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
  }, [width, load]);

  useEffect(() => {
    loading();

    return () => {
      clearInterval(idRef.current!);
    };
  }, [loading, load]);

  useEffect(() => {
    if (!loadingComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loadingComplete]);
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
