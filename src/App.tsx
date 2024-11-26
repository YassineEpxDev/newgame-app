import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/navBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";


const App = () => {

  const[ selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [ selectedPlatfrom, setSelectedPlatform] = useState<Platform | null>(null)
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
        <NavBar/>
      </GridItem>
      <Show above="lg">
        <GridItem paddingX='5' area="aside " >
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main " >
        <PlatformSelector   selectedPlatform={selectedPlatfrom} onSelectPlatform={(platform) => setSelectedPlatform(platform)}/>
        <GameGrid  selectedPlatform={selectedPlatfrom} selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
