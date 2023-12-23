import { Grid } from '@mui/material';
import React from 'react';
import ApexArtistry from './apexArtistry';
import CarDoctor from './carDoctor';
import DragonNews from './dragonNews';
import Kioko from './kioko';

const Projects = () => {
    return (
      <div>
      <h1 className='pl-10 text-3xl uppercase font-semibold my-5'>Recent Projects:</h1>
     <div className='lg:grid grid-cols-2 px-10 gap-5'>
     <ApexArtistry></ApexArtistry>
        <CarDoctor></CarDoctor>
        <DragonNews></DragonNews>
        <Kioko></Kioko>
     </div>
      </div>
    );
};

export default Projects;