import React, { useState } from 'react'
import { Box, Typography, Button,Stack,TextField } from "@mui/material";
import { exercisesOptions, fetchData } from '../utils/fetchData';
import { useEffect } from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

   const [search , setSearch] = useState('');
  //  const [exercises , setExercises] = useState([]);
   const [bodyParts, setbodyParts] = useState([]);
   
   useEffect(()=>{
     const fetchExcercisesData = async()=>{
       const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

       setbodyParts(['all', ...bodyPartData]);
     }

     fetchExcercisesData();
   },[])

   const handleSearch = async()=>{
         if (search) {
           const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
            const SearchedExercises = exercisesData.filter(
              (exercise)=>exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(SearchedExercises);
         }
   }

  return (
    <Stack  justifyContent='center' alignItems="center" mt="37px" p="20px">
       <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px'} }}
       mb='50px' textAlign='center'>
          Awesome Exercises You <br /> 
          Should know
       </Typography>
       <Box position='relative' mb='72px'>
         <TextField 
          sx={{ 
            input: {fontWeight:'700', border: 'none', borderRadius: '4px'},
            width: {lg: '800px', xs: '350px'},
            backgroundColor:'#fff',
            borderRadius: '40px'
           }}
          height='76px'
          value={search}
          onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type="text"
         />
         <Button className='search-btn'
          sx={{ 
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: {lg: "175px", xs: '80px'},
            fontSize: {lg:'20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'

           }}
           onClick={handleSearch}
         >
          Search
         </Button>
       </Box>
       <Box sx={{ positon: 'relative' , width:'100%', p: '20px' }}>
            <HorizontalScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/>
       </Box>
    </Stack>
  )
}

export default SearchExercises