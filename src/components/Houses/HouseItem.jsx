import { Divider, Heading, HStack, Image, Stack, Text, Flex} from '@chakra-ui/react'
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const HouseItem = ({house}) => {
  return (
    <Flex justify='center' align='center'>
        <Stack width="300px" bg="white" boxShadow="xl" borderRadius="xl">
        <Image
            src={house.imageLg}
            h="170"
            alt=""
        />
        <Flex p="4" direction="column">
            <Text mt="-1" fontWeight="extrabold" fontSize="19px" color="purple.500">
            Rs.{house.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
                /month
            </span>
            </Text>
            <Heading fontSize="26px" letterSpacing="tight">
                {house.name}
            </Heading>
            <Text fontSize="13px" color="grey">
                {house.address}
            </Text>
            <Divider my="2.5" />
            <HStack spacing="5">
            <HStack>
                <BiBed style={{ color: "purple" }} />
                <Text fontSize="12px">{house.bedrooms} Beds</Text>
            </HStack>
            <HStack>
                <BiBath style={{ color: "purple" }} />
                <Text fontSize="12px">{house.bathrooms} Bathrooms</Text>
            </HStack>
            <HStack>
                <BiArea style={{ color: "purple" }} />
                <Text fontSize="12px">{house.surface}</Text>
            </HStack>
            </HStack>
        </Flex>
        </Stack>
    </Flex>
  );
};

export default HouseItem;
