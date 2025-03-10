import './styles.scss'
import { motion } from 'motion/react';
import styleNestImg from '../../../assets/stylenest.svg'
import { RxCross2 } from "react-icons/rx";

interface SideBarProps{
    onClose: ()=>void
}
const SideBar = ({onClose}:SideBarProps) =>{
    return(
        <>
        <motion.section  initial={{x:-50, opacity:0}} animate={{x:0, opacity:1}}  transition={{ duration:.35}}  className='sideBarMain'>
            <div  className='sideBarMain_components'>
                <div className='container1'>
                    <img src={styleNestImg} alt="style nest img"/>
                    <RxCross2 size={22} onClick={onClose}/>
                </div>
                <div className='container2'>
                    <nav>
                        <li>Shop all</li>
                        <li>Latest arrivals</li>
                    </nav>
                </div>
            </div>
        </motion.section>
        </>
    )
}


export default SideBar;