import './styles.scss'
import styleNestImg from '../../assets/stylenest.svg'
import { RiShoppingBag3Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import SideBar from './SideBar/SideBar';
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () =>{

    const [isNotDesktop, setIsNotDesktop] = useState(window.innerWidth<=1280);
    const [isOpen, setIsOpen] = useState<boolean>(false);

   
    useEffect(()=>{
        const handleResize = () =>{
            setIsNotDesktop(window.innerWidth<=1280)
        }

        window.addEventListener('resize', handleResize)

        return() => window.removeEventListener('resize', handleResize)
    },[])
    console.log(isOpen);
    
    return (
        <>
            <header className='headerMain'>
                <div className='headerMain_components'>
                    <div className='leftSection'>  
                        <img src={styleNestImg} alt="style nest img" />
                    </div>
                    <div className='middleSection'>
                        <nav>
                            <li>Shop all</li>
                            <li>Latest arrivals</li>
                        </nav>
                    </div>
                    <div className='rightSection'>
                        {!isOpen&&(
                            <>
                                <RiShoppingBag3Line size={22}/>
                            </>
                        )}
                        {isNotDesktop&&(
                            <>
                            <RxHamburgerMenu size={22} onClick={()=>setIsOpen(true)}/>
                            </>
                        )}
                        
                    </div>
                    {isOpen&&(
                        <SideBar onClose={()=>setIsOpen(false)}/>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header;