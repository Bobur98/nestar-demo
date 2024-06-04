/*******************************
 * BY DEFAULT PAGE ROUTER NEXTJS RUNS AS A CLIENT SIDE BUT _DOCUMENT.TSX FILE IS SERVER SIDE RENDERING
 *
 * ********************** */

import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";

export default function Home() {
  return (
    <>
      <Stack sx={{ background: "#81c784" }}>Header</Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular Properties</Box>
          <Box>Top Agents</Box>
          <Box>Top Properties</Box>
          <Box>Events</Box>
        </Stack>
        <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
      </Container>
    </>
  );
}
