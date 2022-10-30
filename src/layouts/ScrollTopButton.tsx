import React, { useCallback, useEffect, useMemo, useState } from "react";

import icTop from "./../assets/icons/ic_top.png";

interface Props {
  contentWidth: number;
}

function ScrollTopButton({ contentWidth }: Props) {
  const [visible, setVisible] = useState<boolean>();

  const right = useMemo(() => {
    if (window.innerWidth < 768) {
      return 8;
    }

    let position = (window.innerWidth - contentWidth) / 2 - 16 - 48;
    if (position < 0) position = 8;

    return position;
  }, [contentWidth]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {visible && (
        <button
          style={{ right }}
          onClick={scrollToTop}
          className="bg-white hover:bg-primary-400 btn-scroll-to-top fixed lg:bottom-96 bottom-48 w-12 h-12 flex justify-center items-center border border-dark-100 border-solid rounded-full"
        >
          <img src={icTop} alt="icon-top" className="h-2 w-auto" />
        </button>
      )}
    </>
  );
}

export default React.memo(ScrollTopButton);
