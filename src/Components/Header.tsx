import './Header.css'
import { FC } from 'react';
import diskoSet from '../assets/images/disko set.png'

//use "fadeInUp-animation" for things to have fade-in animation

const Header: FC = () => {
    return (
        <header id='Home' className='disko-header'>
            <div className="bg-pic">
                <img src={diskoSet} alt="diskoSet" />
            </div>
            <div className="name-big-container fadeInUp-animation">
                <h1 id='disko-name'>DIS<span id='disko-end'>KO</span></h1>
            </div>
        </header>
    )
}
 
export default Header