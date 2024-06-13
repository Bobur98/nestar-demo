import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMovbile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setDevice(isMovbile ? "mobile" : "desktop");
  }, [device]);

  return device;
};

export default useDeviceDetect;
