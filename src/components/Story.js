import '../App.css'
import pfp from '../images/download.jfif'

export default function Story() {
    return (
        <div className='story'>
            <div className='image'>
                <img src={pfp}/>
            </div>
            <p>rockyBalboa</p>
        </div>
    )
}