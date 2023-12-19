import { Grid } from '@mui/material';
import React from 'react';
import ApexArtistry from './apexArtistry';
import CarDoctor from './carDoctor';
import DragonNews from './dragonNews';
import Kioko from './kioko';

const Projects = () => {
    return (
      <div>
      <h1 className='pl-10 text-3xl uppercase font-semibold'>Recent Projects:</h1>
        <ApexArtistry></ApexArtistry>
        <CarDoctor></CarDoctor>
        <DragonNews></DragonNews>
        <Kioko></Kioko>
      </div>
    );
};

export default Projects;