import { Box, Divider, HStack, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageHeading />
    </>
  );
}

function PageHeading() {
  return (
    <Box>
      <Heading fontFamily="Roboto, sans-serif" m="35px">
        Bring a creative project to life.
      </Heading>
      <Text fontWeight="500" color="#656969">
        ON KICKSTARTER:
      </Text>
      <HStack
        border="1px solid #999"
        display="flex"
        width="80%"
        margin="10px auto"
        justifyContent="space-around"
      >
        <Stats num="249,092" title="projects funded" />
        {/* <Divider orientation="vertical" height="100px" /> */}
        <Stats num="$7,693,729,211" title="towards creative work" />
        {/* <Divider orientation="vertical" height="100px" /> */}
        <Stats num="91,725,946" title="pledges" />
      </HStack>
    </Box>
  );
}

function Stats({ num, title }) {
  return (
    <Box borderRight="1px solid #999">
      <Text fontSize="40px">{num}</Text>
      <Text fontSize="20px">{title}</Text>
    </Box>
  );
}
