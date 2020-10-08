import React, {useState} from 'react'
import DropdownItem from './DropdownItem'
import {ReactComponent as CogIcon} from '../icon/cog.svg';
import {ReactComponent as BoltIcon} from '../icon/bolt.svg';
import {ReactComponent as ChevronIcon} from '../icon/chevron.svg';
import {ReactComponent as ArrowIcon} from '../icon/arrow.svg';
import {ReactComponent as FrogIcon} from '../icon/frog.svg';
import {ReactComponent as CatIcon} from '../icon/cat.svg';
import {ReactComponent as DogIcon} from '../icon/dog.svg';
import {ReactComponent as TigerIcon} from '../icon/tiger.svg';
import {ReactComponent as RabbitIcon} from '../icon/rabbit.svg';
import {CSSTransition} from 'react-transition-group';


function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null);
    const menuSlider = (x) => setActiveMenu(x)

    const calcHeight = el => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    return (
        <div className="dropdown" style={{height:menuHeight}}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-primary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem leftIcon={<BoltIcon />}>My Profile</DropdownItem>
                    <DropdownItem 
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                        menuSlider= {menuSlider}
                        >
                        Settings
                    </DropdownItem>
                    <DropdownItem 
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                        menuSlider= {menuSlider}
                        >
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" menuSlider={menuSlider}>Go Back</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                    <DropdownItem>Something</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'animals'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}
                >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" menuSlider={menuSlider}>Go Back</DropdownItem>
                    <DropdownItem leftIcon={<FrogIcon />}>Frog</DropdownItem>
                    <DropdownItem leftIcon={<CatIcon />}>Cat</DropdownItem>
                    <DropdownItem leftIcon={<DogIcon />}>Dog</DropdownItem>
                    <DropdownItem leftIcon={<TigerIcon />}>Tiger</DropdownItem>
                    <DropdownItem leftIcon={<RabbitIcon />}>Rabbit</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
