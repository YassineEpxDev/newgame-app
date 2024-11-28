import React, { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./component/navBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/SortSelector";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string
}


const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  //const[ selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  //const [ selectedPlatfrom, setSelectedPlatform] = useState<Platform | null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
       }}
    >
      <GridItem area="nav "> 
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>  
      <Show above="lg">
        <GridItem paddingX='5' area="aside " >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main " >
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector   selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery ,platform})}/>
          <SortSelector sortOrder={gameQuery.sortOrder}  onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          
        </HStack> 
        
        <GameGrid  gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
