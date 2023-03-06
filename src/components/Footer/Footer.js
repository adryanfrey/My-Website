// styles
import './footer.sass'

// assets
import logo from '../../assets/logoCopy.png'

export default function Footer() {

    return (
        <footer className='footer'>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href='#'>Linkedin</a></li>
                <li><a href='#section1'>Github</a></li>
                <li><a href='#section2'>Instagram</a></li>
            </ul>
            <p>&copy; 2023 Adryan Frey</p>
        </footer>
    )
}