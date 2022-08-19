import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {

  const {houses, property, setProperty, properties} = useContext(HouseContext);

  const propertyHandler = (event)=> {
    setProperty(event.target.value);
  }

  return (
    <FormControl>
      <FormLabel my="-1" fontWeight="bold">
        Property Type
      </FormLabel>
      <Select variant="flushed" placeholder='select type'>
        {
          properties.map((type, index)=> {
            return <option key={index} onClick={propertyHandler}>{type}</option>
          })
        }
      </Select>
    </FormControl>
  );
};

export default PropertyTypeFilter;
