import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PageContent } from "../components/PageComponents/PageContent";

function Film() {
  const [featFav, setFeatFav] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(`http://localhost:3000/fresh-favorites`);
      let data = await res.json();
      setFeatFav(data);
    }
    getData();
  }, []);
  return <PageContent pageHeading={<FilmPageHeading />} featFav={featFav} />;
}

export default Film;

function FilmPageHeading() {
  return (
    <VStack
      spacing="10px"
      alignItems="flex-start"
      w="90%"
      m="auto"
      mb="60px"
      p="50px 0"
    >
      <Text fontSize="3xl">Film</Text>
      <Text>
        Join forces with the intrepid filmmakers and festival creators changing
        the way stories get told on screen.
      </Text>
      <HStack color="blue.500" spacing="20px">
        <Link>Explore Film & Video</Link>
      </HStack>
    </VStack>
  );
}
