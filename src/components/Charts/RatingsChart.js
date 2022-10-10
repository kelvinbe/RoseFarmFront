import React, {useEffect} from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend} from "recharts";

import {
  GetPs4PlatformGames,
  GetXbox1PlatformGames,
  NintendoPlatformGames,
  pcPlatformGames,
} from "./RatingGamesApi";

import { useDispatch, useSelector } from "react-redux";

export default function RatingsChart({chartIsVisible}) {
  const data = useSelector((state) => state.chartsData);
  const dispatch = useDispatch();


  

  useEffect( () => {
    const setGamesData = async () => {
        const ps4Data = await GetPs4PlatformGames();
        const xboxData = await GetXbox1PlatformGames();
        const pcData = await pcPlatformGames();
        const ninTData = await NintendoPlatformGames();
    
        const countPS4 = ps4Data.games_count;
        const countXbox = xboxData.games_count;
        const countPC = pcData.games_count;
        const countNinte = ninTData.games_count;
    
        const gameData = [
          { name: 'playstaion4', NoGames: countPS4 },
          { name: 'xbox1', NoGames: countXbox },
          { name: 'psp', NoGames: countPC },
          { name: 'nintendo', NoGames: countNinte },
        ];
       
        return dispatch({type: 'GET_CHARTS_DATA',data: gameData})
      };

      

      setGamesData()
   

    
  }, [dispatch]);

  


  console.log("data", data);

  return (
    <BarChart width={350} height={250} data={chartIsVisible ? data : null}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="NoGames" fill="#8884d8" animationDuration={4000} />
    </BarChart>
  );
}
