import { Box, Center, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PageContent } from "../components/PageComponents/PageContent";

export default function Home() {
  const [featFav, setFeatFav] = useState([]);
  const baseAPI = `https://657bf12b394ca9e4af15098b.mockapi.io/`;
  useEffect(() => {
    async function getData() {
      let res = await fetch(`${baseAPI}fresh-favorites`);
      let data = await res.json();
      setFeatFav(data);
    }
    getData();
  }, []);

  useEffect(() => console.log("featFav", featFav), [featFav]);
  return (
    <Box>
      <PageContent pageHeading={<PageHeading />} featFav={featFav} />
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
          p="10px 0"
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
