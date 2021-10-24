import { useState, useLayoutEffect } from "react";

function useDevice() {
  const [deviceType, setDeviceType] = useState("mobile");

  useLayoutEffect(() => {
    function updateSize() {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      setDeviceType(vw >= 1024 ? "desktop" : "mobile");
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { deviceType };
}

export default useDevice;
