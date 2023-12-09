import {
  Box,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Styles from './NonSlidingCards.module.css'

export default function NonSlidingCards({ heading }) {
  return (
    <Box className={Styles.nonSlidingCards}>
      <HStack justifyContent="space-between">
        <Text>{heading}</Text>
      </HStack>
      <NonSlidingCardsBody />
    </Box>
  );
}

function NonSlidingCardsBody() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/hot-of-the-press");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);
  useEffect(() => {
    console.log(data);
  });
  return (
    <HStack className={Styles.NonSlidingCardsBody}>
      {data.map((card) => (
        <StaticCard imgSrc={card.imgSrc} title={card.title} desc={card.desc} />
      ))}
    </HStack>
  );
}

function StaticCard({ imgSrc, title, desc }) {
  return (
    <Card
      w="25%"
      borderRadius="0"
      variant="unstyled"
      border="1px solid green"
      >
      <CardBody>
        <Box h='360px' overflow='hidden'>
          <Image
            src={imgSrc}
            alt="Green double couch with wooden legs"
            objectFit='cover'
            h='120%'
          />
        </Box>
        <Stack mt="6" textAlign="left" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
          <Text color="blue.600" fontSize="sm">
            Read more...
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
