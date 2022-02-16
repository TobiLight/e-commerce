import { useState } from "react"
import { Link } from "react-router-dom"
import CartIcon from "./Icons/Cart"
import MenuSharpIcon from "./Icons/Menu"
import AccountIcon from "./Icons/Profile"
import SearchSharpIcon from "./Icons/Search"
import ShoppingBag from "./Icons/ShoppingBag"
import TelephoneIcon from "./Icons/Telephone"
import { SideMenu } from "./SideMenu"

type NavigationType = {
    showSideMenu: () => void | boolean
}

export const Navigation = ({ showSideMenu }: NavigationType): JSX.Element => {
    return (
        <div className="navigation relative">
            <div className="w-full flex justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-xl font-bold cursor-pointer flex items-center gap-2">
                        <span>
                            <ShoppingBag className="w-[35px] h-[35px]" />
                        </span>
                        Shopit.
                    </Link>
                    <div onClick={showSideMenu} className="menu cursor-pointer hover:text-green-400">
                        <MenuSharpIcon className="w-8 h-8" />
                    </div>
                </div>

                <div className=" flex items-center gap-5">
                    <div className="hidden lg:block search relative">
                        <input type="text" name="search" id="search" placeholder="Search item" className="px-4 rounded-full border-2 border-gray-600 h-[50px] w-[350px]" />
                        <SearchSharpIcon className="w-6 h-6 absolute right-[17px] top-[15px]" />
                    </div>
                    <div className="account cursor-pointer">
                        <AccountIcon className="w-8 h-8" />
                    </div>
                    <div className="cart cursor-pointer ">
                        <CartIcon className="w-8 h-8" />
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                        <TelephoneIcon className="w-6 h-6" />
                        <p>+2348023456789</p>
                    </div>
                </div>
            </div>
        </div>
    )
}