import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function SlidingCard() {
  return (
    <Box className="fresh-favorites" p="20px 50px" border='1px solid red'>
      <HStack justifyContent="space-between">
        <Text>FRESH FAVORITES</Text>
        <Box>
          <IconButton
            aria-label="Slide Left"
            variant="outline"
            icon={<ChevronLeftIcon />}
          />
          <IconButton
            aria-label="Slide Right"
            variant="outline"
            icon={<ChevronRightIcon />}
          />
        </Box>
      </HStack>
      <FreshFavoriteCardBody />
    </Box>
  );
}

function FreshFavoriteCardBody() {
  return (
    <HStack w='100vd' border='1px solid blue'>
      <CardCom />
      <CardCom />
      <CardCom />
      <CardCom />
      <CardCom />
    </HStack>
  );
}

function CardCom() {
  return (
    <Card w="250px" borderRadius='0' variant='unstyled' border='1px solid green'>
      <CardBody>
        <Image
          src="https://ksr-ugc.imgix.net/assets/042/978/274/4eb814fc20c1d8a823ce7b809fcf0530_original.jpg?ixlib=rb-4.1.0&crop=faces&w=352&h=198&fit=crop&v=1699372437&auto=format&frame=1&q=92&s=5f21644ceaa1e8a2fe230e61013af007"
          alt="Green double couch with wooden legs"
          //   borderRadius="lg"
        />
        <Stack mt="6" textAlign='left' spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            A little theater, a little circus, a little music; a fully immersive
            wedding experience with a skeleton in every closet….
          </Text>
          <Text color="blue.600" fontSize="sm">
            By the cell theatre
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
