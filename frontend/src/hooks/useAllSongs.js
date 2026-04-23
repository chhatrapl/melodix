import { useQuery } from "@tanstack/react-query";
import { fetchAllSongs } from "../api/allSongs";




export const useAllSongs = ()=>{
    return useQuery({
        queryKey:["songs"],
        queryFn:fetchAllSongs,
        staleTime:5*60*1000,
        })
};

