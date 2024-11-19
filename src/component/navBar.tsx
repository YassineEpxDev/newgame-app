import { HStack , Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const navBar = () => {
  return (
   <HStack>
    <Image src={logo} boxSize="60px"/>
    <text>NavBar</text>
   </HStack>
  )
}

export default navBar