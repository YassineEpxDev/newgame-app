import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

interface Props{
  onSelectGenre: (genre:Genre) => void;
}


const GenreList = ({onSelectGenre}:Props) => {
  
  //const{genres} = useGenres()
  const { data, isLoading, error } = useGenres();

  if (error) return null; // we return null because we dont neet too mush show error in the app

  isLoading && <Spinner />;

  // or you acn use if(isLoading) return null

  return (
    <List >
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />

            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
