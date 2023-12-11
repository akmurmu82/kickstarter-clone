import React, { useEffect, useState } from "react";
import { PageContent } from "../components/PageComponents/PageContent";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";

export default function Arts() {
  const [featFav, setFeatFav] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(`http://localhost:3000/fresh-favorites`);
      let data = await res.json();
      setFeatFav(data);
    }
    getData();
  }, []);
  return <PageContent pageHeading={<ArtPageHeading />} featFav={featFav} />;
}

function ArtPageHeading() {
  return (
    <VStack spacing='10px' alignItems='flex-start' w='90%' m='auto' mb='60px' p='50px 0'>
      <Text fontSize="3xl">Arts</Text>
      <Text>
        Discover the artists and organizations using Kickstarter to realize
        ambitious projects in visual art and performance.
      </Text>
      <HStack color='blue.500' spacing='20px'>
        <Link>Explore Art</Link>
        <Link>Explore Dance</Link>
        <Link>Explore Photography</Link>
        <Link>Explore Theater</Link>
      </HStack>
    </VStack>
  );
}
