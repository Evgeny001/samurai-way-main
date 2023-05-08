import React from "react";
import {Pocts} from "./Pocts/Pocts";

export const MyPosts = () => {
  
    return(

            <div >
                <Pocts message={'Hi, how are you'} likes={15} />
               <Pocts message={'It is my first post'} likes={20}/>
        </div>
    )
}
