import { animateScroll } from 'react-scroll'

import inPPM from '../../assets/inPPM.png'
import githublogo from '../../assets/githublogo.png'
import pakFiles from '../../assets/pakFiles.png'
import usingPPM from '../../assets/usingPPM.png'

export default function Project_PPM() {

    const scrollOptions = {
        smooth: true,
        isDynamic: true,
    }

    
    animateScroll.scrollToTop(scrollOptions)
    

    return (
        <div className="PPM">
            <div className='PPM--Title'>
                <h1>Pak Patch Manager for Monster Hunter Rise</h1>
                <img className='PPM--Title--img' src={ inPPM } alt=""/>
                <p>
                    Pak Patch Manager (PPM) is a python script that allows the user to easily manage pak 
                    files that are used to modify the game Monster Hunter Rise by Capcom.
                </p>
            </div>
            
            <div className='PPM--Body'>
                <h3>Inspiration</h3>
                <div className='PPM--Inspiration'>
                    <p>
                        As an avid player of Monster Hunter Rise and a person interested in mods for PC games, working with pak files
                        is nearly unavoidable. Pak files come in the format of re_chunk_000.pak.patch_000.pak. if you want to add
                        another pak file for a different mod you increment the last number (ex. re_chunk_000.pak.patch_001.pak). With
                        a small number of mods, this system is perfectly sufficient. However, this system gets tedious when you have an
                        upwards of 10 to 20 pak files and need to remove a single pak file. The first problem is you may forget which pak file
                        corresponds to which mod given how the filenames are generic. The second problem is that it can get tedious to
                        rename each following pak file to fix the sequence. This script handles both issues by managing all the pak mods
                        that the player has.
                    </p>
                    <img src={pakFiles} alt="" />
                </div>
                <h3>How it Works</h3>
                <div className='PPM--HowItWorks'>
                    <img src={usingPPM} alt=""/>
                    <p>
                        PPM uses a python dictionary to associate the generic pak file name to the name of the specific mod. When the user specifies a
                        mod to activate, PPM gets the proper pak file, renames it if necessary to maintain filename consistency, and copies it to Monster Hunter's
                        directory. When the user wants to deactivate a mod, they just need to specify the mod and PPM will remove the proper pak file from Monster
                        Hunter's directory. In order to maintain the filename consistency, PPM also renames all the active pak files that follow the 
                        removed pak file. PPM uses a JSON file to keep its state after the script is closed. 
                    </p>
                </div>
            </div>
            <div className='PPM--Git'>
                <p>
                    Find the project and specific usage instructions on my github:
                </p>
                <div className='PPM--Git--Logo'>
                    <a href='https://github.com/philipdometita/PakPatchManager' target="_blank" rel="noreferrer">
                        <img src={githublogo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}