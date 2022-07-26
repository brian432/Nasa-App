import { AstronomicalImage } from "../../astronomicalImage/astronomicalImage";
import { Earth } from "../../earth/earth";
import { Mars } from "../../mars/mars";
export const Nasa = () => {
    console.log("-");
    return (
        <div id="Nasa" >
            <AstronomicalImage />
            <Earth />
            <Mars />
        </div >
    )
}