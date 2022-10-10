import axios from "axios"


const getAllGamesURL= 'https://api.rawg.io/api/games?key=973bd0fd235343c58eebaf81de68b6cd'

// const getAllPlatForm = 'https://api.rawg.io/api/platforms?key=973bd0fd235343c58eebaf81de68b6cd'/

export const GetAllGames = async () => {

   const resp = await axios.get(getAllGamesURL)
      const filteredResults = resp.data.results.filter((game) => game.id > 100);

    return filteredResults
}


export const GetAllPS4Games = async () => {


    const resp = await axios.get(getAllGamesURL)

    const Games = resp.data.results.filter((game) => game.id > 4000) 
    const filteredPs4Games = Games.filter((game) => game.platforms.filter((platform) => platform.slug === 'playstation4'))

    return filteredPs4Games

}


export const GetAllPS5Games = async () => {

    const resp = await axios.get(getAllGamesURL)
    const Games = resp.data.results.filter((game) => game.id > 9000)
    const filteredPs5Games = Games.filter((game) => game.platforms.filter((platform) => platform.slug === 'playstation5'))

    return filteredPs5Games
}


export const GetAllXBOXGames = async () => {

    const resp = await axios.get(getAllGamesURL)
    const Games = resp.data.results.filter((game) => game.id > 5000)
    const filteredXBOXGames = Games.filter((game) => game.platforms.filter((platform) => platform.slug === 'xbox360'))

    return filteredXBOXGames
}


export const GetAllPCGames = async () => {

    const resp = await axios.get(getAllGamesURL)
    const Games = resp.data.results.filter((game) => game.id > 1000)
    const filteresPCGAMES = Games.filter((game) => game.platforms.filter((platform) => platform.slug === 'pc'))
    return filteresPCGAMES
}



export const OrderGamesByDate = async () => {

    const resp = await axios.get(getAllGamesURL)
    const Games = resp.data.results.filter((game) => game.id > 1000)
    const sortedGames = Games.sort(function(a,b){
        return new Date(b.released) - new Date(a.released)
    })
    return sortedGames





}


