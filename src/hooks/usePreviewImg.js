
import { useState } from 'react'
import useShowToast from './useShowToast'

const usePreviewImg = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const showToast = useShowToast();
    const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            if (file.size > maxFileSizeInBytes) {
                showToast("error", "File size exceeds 2MB. Please select a smaller file.");
                setSelectedFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);

        } else {
            showToast("error", "Invalid file type. Please select an image file.");
            setSelectedFile(null);
        }
    }
    return { selectedFile, handleImageChange, setSelectedFile };
}
export default usePreviewImg