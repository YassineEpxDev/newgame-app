import { Button,  Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
       Order by 
      </MenuButton>
     <MenuList>
     <MenuItem>Relevance</MenuItem>
      <MenuItem>data added</MenuItem>
      <MenuItem>name</MenuItem>
      <MenuItem>Release</MenuItem>
      <MenuItem>Popurarity</MenuItem>
      <MenuItem>Average rating</MenuItem>
     </MenuList>
    </Menu>
  );
};

export default SortSelector;
