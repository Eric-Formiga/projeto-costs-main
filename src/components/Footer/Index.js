import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ContainerFooter } from './styles';

export function Footer() {
    return (
        <ContainerFooter>
            <ul className='socialList'>
                <li>
                    <a href='#' target='_blank' rel="noreferrer"><FaFacebook /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/eric_machado0/' target='_blank' rel="noreferrer"><FaInstagram /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/eric-formiga-680930247/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </li>
            </ul>
            <p className='copyRight'>
                <span>Costs </span> <span>By &copy;EricFormiga </span> 2022
            </p>
        </ContainerFooter>
    )
}

export default Footer