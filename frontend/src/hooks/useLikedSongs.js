import {useMutation, useQuery,useQueryClient} from '@tanstack/react-query';
import { fetchLikedSongs, toggleLikedSongApi } from '../api/likedSongs';
import LikedSongs from '../pages/LikedSongs';

export const useLikedSongs = () =>{
   return useQuery({
    queryKey:["likedSongs"],
    queryFn:fetchLikedSongs,
   })
};


export const useToggleLike = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (songId) => toggleLikedSongApi(songId),

    // Tera purana logic yahan aa gaya
    onMutate: async (songId) => {
      await queryClient.cancelQueries({ queryKey: ['likedSongs'] })

      // Backup
      const previousSongs = queryClient.getQueryData(['likedSongs'])

      // Tera purana logic same hai bas setLikedSongs ki jagah setQueryData
      queryClient.setQueryData(['likedSongs'], (old) => {
        const isSongLiked = old.some(s => {
          const sId = s._id ? String(s._id) : String(s)
          return sId === String(songId)
        })

        if (isSongLiked) {
          return old.filter(s => {
            const sId = s._id ? String(s._id) : String(s)
            return sId !== String(songId)
          })
        } else {
          return [...old, { _id: songId }]
        }
      })

      return { previousSongs }
    },

    // API fail hua to wapas karo
    onError: (err, songId, context) => {
      queryClient.setQueryData(['likedSongs'], context.previousSongs)
    },

    // Confirm ke liye fresh fetch
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likedSongs'] })
    }
  })
};