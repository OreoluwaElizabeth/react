import React, { useState } from 'react';
import Input from '../../Componenet/Input'
import './Topnav.css';
import './input.css';
import Cart from '../../Images/Cart.png'
import Human from '../../Images/Human Icon.png'
import Dropdown from '../../Images/Dropdown.png'
import SearchIcon from '../../Images/Frame.png'

const TopNav = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        console.log("searchValue 1 ==>", e.target.value);

        setSearchValue(e.target.value);
    }

    console.log("SearchValue 2 ==>", searchValue);

    return (
        <div className='topnav_container'>
            <p className='topnav_logo'>DAV.CO</p>
            <ul className='topnav_list'>
                <li className='list_item'>
                    Shop
                    <img src={Dropdown} alt="DropdownIcon" />
                </li>
                <li className='list_item'>On Sale</li>
                <li className='list_item'>New Arrivals</li>
                <li className='list_item'>Brands</li>
            </ul>
            <div className='topnav_input'>
                <Input
                    image={SearchIcon}
                    type='text'
                    placeholder='Search for products...'
                    value={searchValue}
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            <div className='topnav_cart_container'>
                <img className='cart_container_first' src={Cart} alt="" />
                <img className='cart_container_second' src={Human} alt="" />
            </div>
        </div>
    )
}

export default TopNav;