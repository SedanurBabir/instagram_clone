import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';
const useShowToast = () => {
    const toast = useToast();

    // The useCallback hook is used to memoize the function so that it doesn't get recreated on every render.
    const showToast = useCallback((title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: 3000,
            isClosable: true
        });
    }, [toast]);
    return showToast;
}

export default useShowToast;