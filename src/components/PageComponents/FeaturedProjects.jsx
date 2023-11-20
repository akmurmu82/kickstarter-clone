import { Card, Image, CardBody, IconButton } from "@chakra-ui/react";
import { Box, Divider, HStack, Stack, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

export function FeaturedProjects({ imgLink, title, desc }) {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/home-page");
        const result = await response.json();
        setFeaturedProjects(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("featuredProjects", featuredProjects);
  }, [featuredProjects]); // Add data as a dependency

  return (
    <Box
      className="featured-projects"
      p="20px 50px"
      style={{ width: "60%"}}
    >
      {featuredProjects.map((itemObj) => {
        return (
          <>
            <Box className="featured-projects-img">
              <img src={itemObj.image} alt='some Img' />
            </Box>
            <Box textAlign='left' className="featured-projects-text">
            <Text fontSize='30px'>{itemObj.title}</Text>
              <Text fontSize='17px' m='10px 0'>{itemObj.desc}</Text>
              <Text fontSize='14px' mt='10px'>{itemObj.auther}</Text>
            </Box>
          </>
        );
      })}
    </Box>
  );
}

export const RecommendedCardBody = () => {
  return (
    <Box width="50%" p='0 50px'>
      <RecommendedCard />
      <Divider />
      <RecommendedCard />
      <Divider />
      <RecommendedCard />
      <Divider />
    </Box>
  );
};

const RecommendedCard = () => {
  function Icon({ icon }) {
    return (
      <IconButton
        aria-label="like"
        icon={<i className={`fa-regular fa-${icon}`}></i>}
        variant="outline"
        size="sm"
        borderRadius="50%"
      />
    );
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="unstyled"
      p="20px 0"
      // border='1px solid blue'
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "150px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody textAlign="left" padding="0 10px" lineHeight="0.5">
          <Text py="2">The perfect latte</Text>
          <Text py="2">4000% funded</Text>
          <Text py="2">By auther</Text>
          <HStack>
            <Icon icon="bookmark" />
            <Icon icon="thumbs-up" />
            <Icon icon="thumbs-down" />
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
};
