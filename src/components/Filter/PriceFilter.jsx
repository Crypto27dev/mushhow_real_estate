import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const PriceFilter = () => {
  const { price, setPrice } = useContext(HouseContext);

  const prices = [
    { value: "20000 - 30000" },
    { value: "30000 - 110000" },
    { value: "110000 - 140000" },
    { value: "140000 - 170000" },
    { value: "170000 - 200000" },
    { value: "200000 - 230000" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel my="-1" fontWeight="bold">
        Price
      </FormLabel>
      <Select variant="flushed" placeholder="select price">
        {prices.map((price, index) => {
          return (
            <option key={index} onClick={priceHandler}>
              {price.value}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default PriceFilter;
