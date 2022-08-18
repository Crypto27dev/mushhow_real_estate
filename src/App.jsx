import { Hide, Container, Heading, HStack, Show, Text } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

import FilterList from "./components/Filter/FilterList";
import HouseList from "./components/Houses/HouseList";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <Container maxW="container.lg" my="8">
      <Heading
        fontSize={{ base: "5xl", sm: "2xl", md: "3xl", lg: "4xl", xl: "4xl" }}
        align="center"
        fontWeight="extrabold"
      >
        Search Properties to rent
      </Heading>
      <Show below="md">
        <HStack
          my="2"
          py="2" cursor='pointer' _hover={{backgroundColor: '#CBD5E0'}} _active={ { transform: "translateY(2px)" } }
          bg="gray.200"
          justify="center"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter /> <Text>Filter</Text>
        </HStack>
      </Show>
      <Hide below="md">
        <FilterList />
      </Hide>
      {showFilter && <FilterList />}
      <HouseList />
    </Container>
  );
};

export default App;
