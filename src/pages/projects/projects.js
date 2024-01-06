import { Grid } from "@mui/material";
import React from "react";
import ApexArtistry from "./apexArtistry";
import CarDoctor from "./carDoctor";
import DragonNews from "./dragonNews";
import Kioko from "./kioko";

const Projects = () => {
  return (
    <div>
      <h1 className="pl-10 lg:text-4xl uppercase font-semibold my-5 lg:text-center text-2xl">
        Aktuelle Projekte:
      </h1>
      <div className="lg:grid grid-cols-2 px-10 gap-10">
        <ApexArtistry></ApexArtistry>
        <CarDoctor></CarDoctor>
        <DragonNews></DragonNews>
        <Kioko></Kioko>
      </div>
    </div>
  );
};

export default Projects;
