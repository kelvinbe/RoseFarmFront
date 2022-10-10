import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Header from "../Header/Header";
import "../Games/Games.css";
import LoaderPage from "../Loader/LoaderPage";
import { Grid } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
import OrderMenus from "../Menu/OrderMenu";
import PlatformsMenus from "../Menu/PlatformsMenu";
import { GetAllGames} from "./GamesApi";
import FooterContainer from "../Footer/footer";








const Games = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isGameId, setGameId] = useState(null)
  const [index, setIndex] = useState(1)

  const dispatch = useDispatch()
  const results = useSelector((state) => state.results )
  const stop = 7;


  const handleHover = (id) => {
    setIsHover(true)
    setGameId(id)


  }

  const handleHoverOut = () => {

    setIsHover(false)

}




useEffect(() => {
  let interval = null


  function increment() {
    setIndex(index + 1);;
  
    if (index === stop) {
      setIndex(1)
    }
  
  }


  if(isHover){
   interval = setInterval(increment, 5000);
  }else if(!isHover){
    setIndex(1)
    clearInterval(interval)
  }

  return () => clearInterval(interval)

}, [isHover, index])



  useEffect(() => {
    
    
    const FetchData = async () => {
      try {
        setIsLoading(true)
        const resp = await GetAllGames()
        dispatch({type: 'GET_RESULTS', data: resp})
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.error(err);
      }
    }
    FetchData() 
  

  }, [dispatch]);

  if (!results) return null;

  console.log(results);

 

  return (
    <div>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#9c2a2a",
        paddingTop: 80,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
    { isLoading ? <LoaderPage /> :  (
      <>
    <Header />

      <Grid container style={{ justifyContent: "center" }}>
        <Grid item md={12}>
          <h1 className="text-games">Top Upcoming Games</h1>
        </Grid>
        <Grid item md={12} style={{display: 'flex', justifyContent: 'center'}}>
          <OrderMenus />
          <PlatformsMenus />

        </Grid>
        {results?.map((game, key) => {
          return (
            <Grid item style={{ padding: 10 }} key={game.id} className="flex-wrapper">
              <Card sx={{ maxWidth: 345 }} key={game.id} className="tag" onMouseOver={() => handleHover(game.id)} onMouseOut={handleHoverOut}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={game.name}
                  subheader={game.released}
                />
               {isHover && game.id === isGameId ? <CardMedia
                  component="img"
                  height="194"
                  image={game.short_screenshots[index].image}
                  alt="Paella dish"
                /> : <CardMedia
                component="img"
                height="194"
                image={game.background_image}
                alt="Paella dish" />}
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    genre: {game.genres[0].name}
                    <br />
                    Rating: {game.rating}
                    <br />
                    Tags: {game.tags[0].name}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </>
      )}

    </div>
    {!isLoading && <FooterContainer />}
    </div>
  );
}




export default Games
