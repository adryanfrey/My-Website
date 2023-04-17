// styles
import './footer.sass'

// assets
import logo from '../../assets/logoCopy.png'

export default function Footer() {

    return (
        <footer className='footer'>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href='https://www.linkedin.com/in/adryan-frey/'>Linkedin</a></li>
                <li><a href='https://github.com/adryanfrey'>Github</a></li>
                <li><a href='https://www.instagram.com/adryanfrey/'>Instagram</a></li>
            </ul>
            <p>&copy; 2023 Adryan Frey</p>
        </footer>
    )
}