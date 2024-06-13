/*******************************
 * BY DEFAULT PAGE ROUTER NEXTJS RUNS AS A CLIENT SIDE BUT _DOCUMENT.TSX FILE IS SERVER SIDE RENDERING
 *
 * ********************** */

import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrendProperties from "@/libs/components/homePage/TrendProperties";
import Advertisement from "@/libs/components/homePage/Advertisement";
import PopularProperties from "@/libs/components/homePage/PopularProperties";
import TopAgents from "@/libs/components/homePage/TopAgents";
import TopProperties from "@/libs/components/homePage/TopProperties";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();

  if (device === "mobile") {
    return <Stack>Mobile Hompage</Stack>;
  } else {
    return (
      <Stack className="home-page">
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);