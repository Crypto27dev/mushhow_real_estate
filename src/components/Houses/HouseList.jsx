import { Grid, Heading } from "@chakra-ui/react";
import { useContext } from "react";

import { HouseContext } from "../../context/HouseContext";
import HouseItem from "./HouseItem";

const HouseList = () => {
  const { houses } = useContext(HouseContext);

  if (houses.length === 0) {
    return (
      <Heading size="lg" p="10" align="center">
        Oops... Can try another one?
      </Heading>
    );
  }

  return (
    <Grid
      my="8"
      gap="4"
      gridTemplateColumns="repeat(auto-fit, minmax(300px,1fr))"
    >
      {houses.map((house) => {
        return <HouseItem house={house} key={house.id} />;
      })}
    </Grid>
  );
};

export default HouseList;
