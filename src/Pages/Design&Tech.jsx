import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PageContent } from "../components/PageComponents/PageContent";

function DesignTech() {
  const [featFav, setFeatFav] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(`http://localhost:3000/fresh-favorites`);
      let data = await res.json();
      setFeatFav(data);
    }
    getData();
  }, []);
  return <PageContent pageHeading={<DesignPageHeading />} featFav={featFav} />;
}

export default DesignTech;

function DesignPageHeading() {
  return (
    <VStack
      spacing="10px"
      alignItems="flex-start"
      w="90%"
      m="auto"
      mb="60px"
      p="50px 0"
    >
      <Text fontSize="3xl">Design and Tech</Text>
      <Text>
        From fine design to innovative tech, discover projects from creators
        working to build a more beautiful future.
      </Text>
      <HStack color="blue.500" spacing="20px">
        <Link>Explore Design</Link>
        <Link>Explore Technology</Link>
      </HStack>
    </VStack>
  );
}
