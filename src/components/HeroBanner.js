import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImg from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
    >
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
        mb='23px' mt='30px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" href="#exercises" color="error" sx={{ 
        background:"#ff2625",
        padding: '10px'
       }}>
        Explore Exercises
      </Button>
      <Typography fontWeight={600} color='#ff2625' sx={{ 
         opacity: 0.1,
         dixplay: {lg: 'block', xs: 'none'}
       }}
       fontSize={200}
       >
        Exercises
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
