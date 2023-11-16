import { useEffect, useState } from 'react'

export const useHeight = () => {
    const [contentHeigth, setContentHeigth] = useState<string>('600px')

    useEffect(() => {

        // if (window.innerHeight < 900) {
        //     setContentHeigth('550px')
        //     console.log(window.innerHeight, contentHeigth, '<900');
        // }
        
        if (window.innerHeight < 800) {
            setContentHeigth('480px')
            console.log(window.innerHeight, contentHeigth, '<800');
        }
        if (window.innerHeight < 700) {
            setContentHeigth('390px')
            console.log(window.innerHeight, contentHeigth, '<700');
        }

        else {
            setContentHeigth('600px')
            console.log(window.innerHeight, contentHeigth, 'else');
        }
    }, [window.innerHeight])

    return contentHeigth;
}