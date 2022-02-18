import { useState } from "react";
import { Navigation } from "../Components/Navigation";
import { SideMenu } from "../Components/SideMenu";

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
};
export const Homepage = (): JSX.Element => {
    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
    return (
        <div className='relative'>
            <div style={showSideMenu ? mountedStyle : unmountedStyle} className={'sidebar w-full min-h-screen absolute z-[1] lg:hidden h-full'}>
                <SideMenu closeSideMenu={() => setShowSideMenu(false)} />
            </div>
            <Navigation showSideMenu={() => setShowSideMenu(true)} />

            {/* Hero section with slider */}
            <div className="hero h-[450px]">

            </div>
        </div>
    )
}