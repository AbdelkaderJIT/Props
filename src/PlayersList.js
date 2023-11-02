import Player from "./player";
import { playa } from "./players";



function PlayerList() {
    console.log(playa,"hhh")
    return ( 
        <>
        <h1>hello</h1>
        {
        playa.map((el)=>(
        <Player el= {el} />
        )
        
     )
        }
     </>);
}

export default PlayerList;