import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const aosfunc = () =>{
    useEffect(() => {
        Aos.init()
    } ,[])
}


export default aosfunc