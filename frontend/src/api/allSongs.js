import API_URL from "../Config/Api"



export const fetchAllSongs = async (page)=>{
    try {
        const res =  await fetch(`${API_URL}/api/v1/song/allSongs?page=${page}&limit=20`);
         const data = await res.json();
         return data?.data?.docs
    } catch (error) {
        return console.error(error);
    }
};