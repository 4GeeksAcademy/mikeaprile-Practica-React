import React, { useState } from "react";
import { App } from "./App.jsx";
import { FollowCard } from "./FollowCard.jsx";


export const Main = () => {
  const [name , setName] = useState ('midudev')

 return (
   <>
   <FollowCard userNames = {name}  fullNames= {"Miguel Angel"}/>
   <FollowCard userNames = {name}  fullNames= {"Michael Aprile Mancha"}/>
   </>
  );
};