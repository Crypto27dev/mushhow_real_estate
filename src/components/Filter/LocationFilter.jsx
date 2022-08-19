import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const LocationFilter = () => {

  const {country, setCountry, countries} = useContext(HouseContext);

  const locationHandler = (event)=> {
    setCountry(event.target.value);
  }

  return (
    <FormControl>
      <FormLabel my="-1" fontWeight="bold" >
        Location
      </FormLabel>
      <Select variant="flushed" placeholder='select country'>
        {
          countries.map((country, index)=> {
            return <option key={index} onClick={locationHandler}>{country}</option>
          })
        }
      </Select>
    </FormControl>
  );
};

export default LocationFilter;
