import React from "react"
import { Link } from "react-router-dom"
import CloseOutlineIcon from "./Icons/Close"
import TelephoneIcon from "./Icons/Telephone"
import { NavigationSearch } from "./Search"

type SideMenuType = {
    // opened: boolean
    isOpen: boolean
    closeSideMenu: () => void | boolean
}

export const SideMenu = ({ isOpen, closeSideMenu }: SideMenuType): JSX.Element => {
    return (
        <>
            {
                isOpen &&
                <div className="w-[350px] bg-white h-full flex flex-col py-4 px-8">
                    <div className="flex justify-end mb-4">
                        <div className="cursor-pointer hover:text-green-400">
                            <CloseOutlineIcon onClick={closeSideMenu} className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-8">
                        <div className="grid gap-12">
                            <div className="flex justify-center mt-10">
                                <NavigationSearch width="w-[280px]" />
                            </div>

                            <div className="flex flex-col gap-1 text-xl font-semibold pl-3">
                                <Link to="/">Women</Link>
                                <Link to="/">Men</Link>
                                <Link to="/">Kids</Link>
                                <Link to="/">Home Deco</Link>
                                <Link to="/">Contact</Link>
                            </div>
                        </div>

                        <div className="grid">
                            <div className="flex items-center gap-3 text-md mb-5">
                                <TelephoneIcon className="w-6 h-6" />
                                <p>+234805678901</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}