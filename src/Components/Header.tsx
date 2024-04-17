import './Header.css'
import { FC } from 'react';
import diskoSet from '../assets/images/disko set.png'

//use "fadeInUp-animation" for things to have fade-in animation

const Header: FC = () => {
    return (
        <header id='diskoHeader' className='disko-header'>
            <div className="bg-pic">
                <img src={diskoSet} alt="diskoSet" />
            </div>
        </header>
    )
}
 
export default Header