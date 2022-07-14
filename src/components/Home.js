import { scroller } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import PicAndName from './PicAndName'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

export default function Home() {
    let location = useLocation()
    
    //default for section in case location.state is null
    let section = ""
    if (location.state) {
        section = location.state.section
    }
    
    //options for scrollto function
    const scrollOptions = {
        smooth: true,
        isDynamic: true,
        offset: -50,
    }
    // effect for scrolling to the appropriate section
    useEffect(() => {
        switch (section) {
            case 'AboutMe':
                scroller.scrollTo('AboutMe', scrollOptions)
                break
            case 'ContactMe':
                scroller.scrollTo('ContactMe', scrollOptions)
                break
            default:
                scroller.scrollTo('PicAndName', scrollOptions)
        }
    })

    return (
        <div className="Home">
            <div name="PicAndName">
                <PicAndName /> 
            </div>
            <div name="AboutMe">
                <AboutMe />
            </div>
            <div name="ContactMe">
                <ContactMe />
            </div>
        </div>
    )
}