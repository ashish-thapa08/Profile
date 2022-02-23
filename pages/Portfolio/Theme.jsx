import React, { createContext, useState, useEffect } from 'react'
export const Themee = createContext();
export default function Theme(props) {
    let [theme, setTheme] = useState(true);
    let Changetheme = () => {
        if (theme) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            console.log(theme)
            return
        }
        else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            console.log(theme)
            return
        }

    }
    useEffect(() => {
        Changetheme();
        //console.log(theme)
    })
    return (
        <>
            <Themee.Provider value={[theme, setTheme]}>
                {props.children}
            </Themee.Provider>
        </>
    )
}
