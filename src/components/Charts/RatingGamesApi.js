import axios from "axios"

const platFormsApi = 'https://api.rawg.io/api/platforms?key=973bd0fd235343c58eebaf81de68b6cd'






export const GetPs4PlatformGames = async () => {

    const resp = await axios.get(platFormsApi)

    const ps4GamePlatform = resp.data.results.filter((game) => game.name === "PlayStation 4")
    
    const ps4GameCount = ps4GamePlatform.find(game => game.games_count)

    return ps4GameCount


}

export const GetXbox1PlatformGames = async () => {

    const resp = await axios.get(platFormsApi)

    const xbox1GamePlatform = resp.data.results.filter((game) => game.name === "Xbox One")
    
    const xbox1GameCount = xbox1GamePlatform.find(game => game.games_count)

    return xbox1GameCount


}

export const pcPlatformGames = async () => {

    const resp = await axios.get(platFormsApi)

    const PCGamePlatform = resp.data.results.filter((game) => game.name === "PSP")
    
    const PCGameCount = PCGamePlatform.find(game => game.games_count)

    return PCGameCount


}

export const NintendoPlatformGames = async () => {

    const resp = await axios.get(platFormsApi)

    const NintendoGamePlatform = resp.data.results.filter((game) => game.name === "Nintendo Switch")
    
    const NintendoGameCount = NintendoGamePlatform.find(game => game.games_count)

    return NintendoGameCount


}

















