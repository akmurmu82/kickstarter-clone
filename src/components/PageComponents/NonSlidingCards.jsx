import { Box, HStack, Text } from "@chakra-ui/react";
import { CardCom } from "./SlidingCards";

export default function NonSlidingCards({heading}) {
  return (
    <Box className="fresh-favorites" p="20px 50px" border="1px solid red">
      <HStack justifyContent="space-between">
        <Text>{heading}</Text>
      </HStack>
      <NonSlidingCardsBody />
    </Box>
  );
}

function NonSlidingCardsBody() {
  return (
    <HStack w="100vd" border="1px solid blue">
      <CardCom />
      <CardCom />
      <CardCom />
      <CardCom />
    </HStack>
  );
}
