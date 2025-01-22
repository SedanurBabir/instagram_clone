import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"
import { doc, updateDoc } from "firebase/firestore"
import userProfileStore from "../store/userProfile"
import { supabase } from '../lib/supabaseClient'

const useEditProfile = () => {
    const [isUpdating, setIsUpdating] = useState(false)
    const authUser = useAuthStore((state) => state.user)
    const setAuthUser = useAuthStore((state) => state.setUser)
    const setUserProfile = userProfileStore((state) => state.setUserProfile)
    const showToast = useShowToast()

    const editProfile = async (inputs, selectedFile) => {
        if (isUpdating || !authUser) return
        setIsUpdating(true)
        let URL = ""

        try {
            if (selectedFile) {
                const fileName = `${authUser.uid}-${Date.now()}`
                const { data, error } = await supabase.storage
                    .from('profilePics')
                    .upload(fileName, decode(selectedFile), {
                        contentType: 'image/png'
                    })

                if (error) throw error

                const { data: { publicUrl } } = supabase.storage
                    .from('profilePics')
                    .getPublicUrl(fileName)

                URL = publicUrl
            }

            const updatedUser = {
                ...authUser,
                fullName: inputs.fullName || authUser.fullName,
                username: inputs.username || authUser.username,
                bio: inputs.bio || authUser.bio,
                profilePic: URL || authUser.profilePic,
            }

            await updateDoc(userDocRef, updatedUser)
            localStorage.setItem("user-info", JSON.stringify(updatedUser))
            setAuthUser(updatedUser)
            setUserProfile(updatedUser)
            showToast('Success', 'Profile updated successfully.', 'success')
        } catch (error) {
            showToast('Error', error.message, 'error')
        }
        setIsUpdating(false)
    }

    return { editProfile, isUpdating }
}

function decode(dataUrl) {
    const arr = dataUrl.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
}

export default useEditProfile