import {
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Menus } from "./Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  function LinkCom({ text }) {
    return <Link fontSize="14px">{text}</Link>;
  }
  return (
    <>
      <Menus />
      <HStack w="80%" m="auto" mt="50px" justifyContent="space-around">
        <VStack alignItems="flex-start" spacing="1">
          <Text as="b" fontSize="14px">
            ABOUT
          </Text>
          <LinkCom text="About us" />
          <LinkCom text="Our charter" />
          <LinkCom text="Stats" />
          <LinkCom text="Press" />
          <LinkCom text="Jobs" />
        </VStack>
        <VStack alignItems="flex-start" spacing="1">
          <Text as="b" fontSize="14px">
            SUPPORT
          </Text>
          <LinkCom text="Help Center" />
          <LinkCom text="Our Rules" />
          <LinkCom text="Creator Resources" />
          <LinkCom text="Forward Funds" />
          <LinkCom text="Brand assets" />
        </VStack>
        <VStack alignItems="flex-start" spacing="1">
          <Text as="b" fontSize="14px">
            MORE FROM KICKSTARTER
          </Text>
          <LinkCom text="Newsletters" />
          <LinkCom text="Kickstarter Project Updates" />
          <LinkCom text="The Creative Independent" />
          <LinkCom text="Mobile apps" />
          <LinkCom text="Research" />
        </VStack>
      </HStack>
      <Flex w="90%" m="auto">
        <Flex>
          <Image
            w="18px"
            h="18px"
            src="https://www.pngfind.com/pngs/m/57-572421_kickstarter-icon-kickstarter-character-kickstarter-icon-png-transparent.png"
            alt="logo"
            mr="10px"
          />
          <Text>Kickstarter, PBC © 2023</Text>
        </Flex>
        <ButtonGroup>
          <IconButton aria-label="Search database" icon={<FaFacebook />} />
        </ButtonGroup>
      </Flex>
    </>
  );
}
