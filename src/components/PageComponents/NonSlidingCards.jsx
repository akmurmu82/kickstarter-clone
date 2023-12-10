import {
  Box,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

export default function NonSlidingCards({ heading }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/hot-of-the-press");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  return (
    <Box w="90%" m="auto">
      <HStack justifyContent="space-between">
        <Text as="b" fontSize="13px" m="20px 0">
          {heading}
        </Text>
      </HStack>
      <HStack
        alignItems="flex-start"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {data.map((card) => (
          <StaticCard
            imgSrc={card.imgSrc}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </HStack>
    </Box>
  );
}

function StaticCard({ imgSrc, title, desc }) {
  const theme = useTheme();
  return (
    <Card
      // w="25%"
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
      <CardBody>
        <Box h="360px" overflow="hidden">
          <Image
            src={imgSrc}
            alt="Green double couch with wooden legs"
            objectFit="cover"
            h="130%"
          />
        </Box>
        <Stack mt="6" textAlign="left" spacing="3">
          <Text lineHeight="1" className="cardTitle" fontSize="lg">
            {title}
          </Text>
          <Text
            lineHeight="1.2"
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
            Read more...
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
