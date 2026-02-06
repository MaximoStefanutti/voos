import { useEffect, useState } from "react";

export function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setisDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setisDesktop(window.innerWidth >= breakpoint);

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, [breakpoint]);

  return isDesktop;
}
