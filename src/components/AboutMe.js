import laptopAndHeadphone from '../assets/laptopAndHeadphone.png'
import headphoneIcon from '../assets/headphoneIcon.png'
export default function AboutMe() {
    return (
        <div className="AboutMe">
            <img
                src={laptopAndHeadphone}
                className="laptopAndHeadphone"
                alt=""
            />
            <div className="AboutMe--content">
                <h3 className="AboutMe--Title">About Me</h3>
                <hr/>
                <div className="AboutMe--paragraph">
                    <p>
                        I am a Calgary born computer science graduate from the University of Calgary with a concentration in
                        Human-Computer Interactions. I am interested in UI/UX design and I have been studying web developement
                        since finishing my degree. I make programs that help me tackle problems or annoyances that occur in my
                        everyday life such as managing modification files for a game or keeping track of recipes i like or want to try.
                    </p>
                    <p>
                        Whether it be programming, phones, PCs, or headphones, I am excited to see where technology goes in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}