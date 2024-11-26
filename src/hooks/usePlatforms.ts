import useData from "./useData";
import { Platform } from "./useGames";
interface platform{

    id: number,
    name: string,
    slug:string
}

const usePlatforms = () =>useData<Platform>('/platforms/lists/parents');

export default usePlatforms;


/*first select the platform > send the id Tthe api fetching the platfrom games

when return show them  grid  


detail we pass a function from apps as props to the children componenet platformselector
for get the id of the element selected 
then retuned to app parent we passe it ti grid componnet > then will sent it the the hook form calling it 
then sow the data 
*/

