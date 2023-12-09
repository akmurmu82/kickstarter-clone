import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  FeaturedProjects,
  RecommendedCardBody,
} from "../components/PageComponents/FeaturedProjects";
import SlidingCards from "../components/PageComponents/SlidingCards";
import NonSlidingCards from "../components/PageComponents/NonSlidingCards";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Menus />
      <PageHeading />
      <PageContent />
      <SlidingCards heading="FRESH FAVORITES" />
      <NonSlidingCards heading="HOT OF THE PRESS" />
    </Box>
  );
}

function PageHeading() {
  function Stats({ num, title }) {
    return (
      <Box width="33%" position="relative">
        <Text color="#037362" fontSize={["35px"]}>
          {num}
        </Text>
        <Text color="#656969" fontSize={["15px"]}>
          {title}
        </Text>
      </Box>
    );
  }
  return (
    <Flex
      direction="column"
      alignItems="center"
      // border="1px solid"
      position="relative"
      bg="#fff"
    >
      <Flex boxSize="sm" width="100%" justifyContent="space-between">
        <Image
          src="https://cdn.optimizely.com/img/14069890047/72ae3620b85d48c1878cbe4d0866665d.png"
          alt="Dan Abramov"
        />
        <Image
          src="https://cdn.optimizely.com/img/14069890047/efeeb04eb14c4a70a1b3ac360ea795d2.png"
          alt="Dan Abramov"
        />
      </Flex>
      <Box position="absolute" top="0px" w="100%" m="auto" zIndex="1">
        <Text
          fontSize="4xl"
          fontFamily="Roboto, sans-serif"
          color="#000"
          m="35px"
        >
          Bring a creative project to life.
        </Text>
        <Text fontWeight="500" color="#656969">
          ON KICKSTARTER:
        </Text>
        <Center
          border="1px solid #dcdedd"
          width="90%"
          margin="10px auto 20px"
          bg="#fff"
          p='10px 0'
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        >
          <Stats num="249,092" title="projects funded" />
          <Divider orientation="vertical" height="100px" />
          <Stats num="$7,693,729,211" title="towards creative work" />
          <Divider orientation="vertical" height="100px" />
          <Stats num="91,725,946" title="pledges" />
        </Center>
      </Box>
    </Flex>
  );
}

const PageContent = () => {
  return (
    <>
      <Flex
        // borderTop="1px solid red"
        w="90%"
        m="auto"
        position="relative"
        top="-60px"
        alignItems="flex-start"
        className="featuredProjects-and-recommended"
      >
        <FeaturedProjects />
        <Divider orientation="vertical" h="500px" />
        <RecommendedCardBody />
      </Flex>
      <Divider orientation="horizontal" width="90vd" />
    </>
  );
};

function Menus() {
  return (
    <Box
      h="60px"
      display="flex"
      alignItems="center"
      borderBottom="1px solid #dcdedd"
    >
      <Center
        color="#656969"
        width="60%"
        m="auto"
        justifyContent="space-between"
      >
        <Link to="/Arts">Arts</Link>
        <Link to="/comics&illustration">Comics & Illustration</Link>
        <Link to="/design&tech">Design & Tech</Link>
        <Link to="/film">Film</Link>
        <Link to="/food&craft">Food & Craft</Link>
        <Link to="/games">Games</Link>
        <Link to="/music">Music</Link>
        <Link to="/publishing">Publishing</Link>
      </Center>
    </Box>
  );
}
