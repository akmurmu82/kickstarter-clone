import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PageContent } from "../components/PageComponents/PageContent";

function ComicsIllustration() {
  const [featFav, setFeatFav] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(`http://localhost:3000/fresh-favorites`);
      let data = await res.json();
      setFeatFav(data);
    }
    getData();
  }, []);
  return <PageContent pageHeading={<ComicPageHeading />} featFav={featFav} />;
}

export default ComicsIllustration;

function ComicPageHeading() {
  return (
    <VStack
      spacing="10px"
      alignItems="flex-start"
      w="90%"
      m="auto"
      mb="60px"
      p="50px 0"
    >
      <Text fontSize="3xl">Comics & Illustration</Text>
      <Text>
        Explore fantastical worlds and original characters from Kickstarter’s
        community of comics creators and illustrators.
      </Text>
      <HStack color="blue.500" spacing="20px">
        <Link>Explore Comics</Link>
        <Link>Explore Illustration</Link>
      </HStack>
    </VStack>
  );
}
