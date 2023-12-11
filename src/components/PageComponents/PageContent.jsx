import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import NonSlidingCarousel from "./NonSlidingCarousel";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

export const PageContent = ({ pageHeading, featFav }) => {
  return (
    <>
      {pageHeading}
      <Flex
        // borderTop="1px solid red"
        w="90%"
        m="auto"
        position="relative"
        // top="0"
        top="-60px"
        alignItems="flex-start"
        className="featuredProjects-and-recommended"
      >
        <FeaturedProjects />
        <Divider orientation="vertical" h="500px" />
        <RecommendedCardBody />
      </Flex>
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <Carousel cardArr={featFav} heading="FRESH FAVORITES" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <NonSlidingCarousel heading="HOT OF THE PRESS" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <Carousel cardArr={featFav} heading="TAKING OFF" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <NonSlidingCarousel heading="INTERVIEWS FROM THE CREATIVE INDEPENDENT" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <Carousel cardArr={featFav} heading="NEAR YOU" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <NonSlidingCarousel heading="THE MAKING OF" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
      <Carousel cardArr={featFav} heading="HOME STRETCH" />
      <Divider orientation="horizontal" width="90vd" m="20px 0" />
    </>
  );
};


function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const theme = useTheme();

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
      position="relative"
      zIndex="2"
      pr="60px"
      w="60%"
      _hover={{
        cursor: "pointer",
        "& .featured-projects-text > :first-of-type": {
          color: theme.color.greenShade,
          textDecoration: "underline",
        },
      }}
    >
      {featuredProjects.map((itemObj) => {
        return (
          <Flex
            key={itemObj.id}
            direction="column"
            color={theme.color.greyShade}
            alignItems="flex-start"
            _hover={{ cursor: "pointer" }}
          >
            <Text as="b" fontSize="13px" mb="20px">
              FEATURE PROJECTS
            </Text>
            <Box className="featured-projects-img">
              <img src={itemObj.image} alt="some Img" />
            </Box>
            <Box
              textAlign="left"
              color="black"
              className="featured-projects-text"
            >
              <Text fontSize="30px">{itemObj.title}</Text>
              <Text fontSize="18px" m="10px 0">
                {itemObj.desc}
              </Text>
              <Text fontSize="14px" mt="10px">
                {itemObj.auther}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
}

const RecommendedCardBody = () => {
  const theme = useTheme();
  return (
    <Flex direction="column" alignItems="flex-start" width="50%" pl="60px">
      <Text color={theme.color.greyShade} as="b" fontSize="13px" mb="20px">
        RECOMMENDED FOR YOU
      </Text>
      <RecommendedCard />
      <RecommendedCard />
      <RecommendedCard />
    </Flex>
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
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        variant="unstyled"
        // border="1px solid"
        // pb="20px"
        _hover={{ cursor: "pointer" }}
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

      <Divider m="20px 0" />
    </>
  );
};
