import mailIcon from '../assets/mailIcon.png'

export default function ContactMe() { 
    return (
        <div className='ContactMe'>
            <div className='ContactMe--content'>
                <h3 className='ContactMe--title'>Contact Me</h3>
                <hr />
                <p>
                    I can be reached at my email:
                </p>
                <div className='ContactMe--email'>
                    <img src={mailIcon} alt="" />
                    <p><i>philip.dometita@ucalgary.ca</i></p>
                </div>
            </div>
        </div>
    )
}