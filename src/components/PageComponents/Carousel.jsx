import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardBody,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@emotion/react";

export const Carousel = ({ heading, cardArr }) => {
  const sliderRef = useRef(null);
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "0px", // Adjust this value to control the gap
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box w="90%" m="auto">
      <HStack justifyContent="space-between" m="20px 0">
        <Text color={theme.color.greyShade} as="b" fontSize="13px">
          {heading}
        </Text>
        <Box>
          <IconButton
            aria-label="Slide Left"
            variant="outline"
            icon={<ChevronLeftIcon />}
            onClick={() => sliderRef.current.slickPrev()}
          />
          <IconButton
            aria-label="Slide Right"
            variant="outline"
            icon={<ChevronRightIcon />}
            onClick={() => sliderRef.current.slickNext()}
          />
        </Box>
      </HStack>
      <Slider ref={sliderRef} {...settings}>
        {cardArr.map(({ id, imgSrc, imgAlt, title, desc, author }) => (
          <CardCom
            title={title}
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            desc={desc}
            author={author}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

function CardCom({ imgSrc, imgAlt, title, desc, author }) {
  function Icon({ icon }) {
    return (
      <IconButton
        aria-label="like"
        icon={<i className={`fa-regular fa-${icon}`}></i>}
        variant="outline"
        size="sm"
        transition="all 0.3s ease-out"
        _hover={{ fontSize: "20px" }}
        bg="#fff"
        borderRadius="50%"
      />
    );
  }
  const theme = useTheme();
  return (
    <Card
      w="280px"
      className="staticCardComp"
      borderRadius="0"
      variant="unstyled"
      // border="1px solid green"
      _hover={{
        cursor: "pointer",
        "& .cardTitle": {
          color: theme.color.greenShade,
          textDecoration: "underline",
        },
        "& .icons": { opacity: "1" },
      }}
    >
      <CardBody position="relative">
        <VStack
          className="icons"
          position="absolute"
          top="5px"
          right="5px"
          opacity="0"
          transition="all 0.3s"
        >
          <Icon icon="bookmark" />
          <Icon icon="thumbs-up" />
          <Icon icon="thumbs-down" />
        </VStack>
        <Image
          src={imgSrc}
          alt={imgAlt}
          //   borderRadius="lg"
        />
        <Stack mt="6" textAlign="left" spacing="2">
          <Text className="cardTitle" fontSize="xl">
            {title}
          </Text>
          <Text
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
            fontSize="15px"
          >
            {desc}
          </Text>
          <Text
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
            color="blue.600"
            fontSize="sm"
          >
            {author}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
