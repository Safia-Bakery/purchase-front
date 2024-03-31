import { useEffect, useState } from "react";
import arrow from "/icons/whiteArrow.svg";
import classNames from "classnames";

const ScrollToTop = () => {
  const [shown, $shown] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        $shown(true);
      } else if (scrolled <= 300) {
        $shown(false);
      }
    };

    window?.addEventListener("scroll", toggleVisible);
  }, []);

  const toTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={classNames(
        "fixed w-12 h-12 bottom-20 right-6 rounded-full bg-lightGray flex items-center justify-center z-20 translate-x-0 transition-transform",
        { ["translate-x-20"]: !shown }
      )}
      onClick={toTop}
    >
      <img src={arrow} alt={"to-top"} className="rotate-90" />
    </div>
  );
};
export default ScrollToTop;
