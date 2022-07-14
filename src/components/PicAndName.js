import profPic from '../assets/profpsketchglasses.jpg'

export default function PicAndName() {
    return (
        <div className="Title">
            <img className="profPic" src={profPic} alt="" />
            <h1 className="name">Philip A. Dometita</h1>
        </div>
    )
}