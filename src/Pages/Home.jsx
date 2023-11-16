import { Box, Center, Divider, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  FeaturedProjects,
  RecommendedCardBody,
} from "../components/PageComponents/FeaturedProjects";
import SlidingCards from "../components/PageComponents/SlidingCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Menus />
      <PageHeading />
      <PageContent />
      <SlidingCards/>
    </>
  );
}

const PageContent = () => {
  return (
    <>
      <Box
        // border="1px solid red"
        display="flex"
        alignItems="flex-start"
        className="featuredProjects-and-recommended"
      >
        <FeaturedProjects title="some title" imgLink="some link" />
        <Divider orientation="vertical" h="500px" />
        <RecommendedCardBody />
      </Box>
      <Divider orientation="horizontal" width="90vd" />
    </>
  );
};

function PageHeading() {
  function Stats({ num, title }) {
    return (
      <Box width="33%">
        <Text fontSize="3vw">{num}</Text>
        <Text fontSize="20px">{title}</Text>
      </Box>
    );
  }
  return (
    <Box>
      <Box
        boxSize="sm"
        width="100%"
        display="flex"
        justifyContent="space-between"
        position="absolute"
        top="130px"
        zIndex="-1"
      >
        <Image
          src="https://cdn.optimizely.com/img/14069890047/72ae3620b85d48c1878cbe4d0866665d.png"
          alt="Dan Abramov"
        />
        <Image
          src="https://cdn.optimizely.com/img/14069890047/efeeb04eb14c4a70a1b3ac360ea795d2.png"
          alt="Dan Abramov"
        />
      </Box>
      <Heading fontFamily="Roboto, sans-serif" m="35px">
        Bring a creative project to life.
      </Heading>
      <Text fontWeight="500" color="#656969">
        ON KICKSTARTER:
      </Text>
      <Center
        border="1px solid #dcdedd"
        width="90%"
        margin="10px auto 20px"
        bg="#fff"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      >
        <Stats num="249,092" title="projects funded" />
        <Divider orientation="vertical" height="100px" />
        <Stats num="$7,693,729,211" title="towards creative work" />
        <Divider orientation="vertical" height="100px" />
        <Stats num="91,725,946" title="pledges" />
      </Center>
    </Box>
  );
}

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
