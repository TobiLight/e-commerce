import { Link } from "react-router-dom"

const HeroSection = (): JSX.Element => {
    return (
        <section className="hero h-[600px] w-full bg-gray-200">
            <div className="flex flex-col justify-end h-full">
                <div className="flex justify-center gap-6 items-end">
                    <div className="bg-green-500 rounded-tl rounded-tr h-[200px] w-[300px] flex place-content-center items-center">
                        <div className="caption">
                            <h1 className="text-2xl text-white font-semibold">
                                Men's wear
                            </h1>
                        </div>
                    </div>
                    <div className="bg-green-500 rounded-tl rounded-tr h-[300px] w-[300px]">
                        <div className="flex justify-end">
                            <div className="w-[150px] h-[150px] rounded-full bg-white my-5 mr-4 grid items-center place-content-center text-left text-green-400 shadow-sm">
                                <p>from</p>
                                <p className="font-bold text-2xl">N2500</p>
                            </div>
                        </div>
                        <h1 className="text-2xl text-white font-semibold text-center">
                            Children's wear
                        </h1>
                    </div>
                    <div className="bg-green-500 rounded-tl rounded-tr h-[200px] w-[300px] flex place-content-center items-center">
                        <div className="caption">
                            <h1 className="text-2xl text-white font-semibold">
                                Women's wear
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Homepage = (): JSX.Element => {
    return (
        <main>
            {/* Hero section */}
            <HeroSection />

            {/* shop preview items */}

            <section className="py-12 px-8">
                <h1 className="text-4xl text-center font-bold text-gray-600">Popular Little Closet</h1>
                {/* breadcrumbs */}
                <div className="breadcrumbs flex gap-4 justify-center font-bold text-gray-600 text-lg mt-8">
                    <Link to="/" className="flex gap-3 hover:text-green-400">Women</Link>
                    <Link to="/" className="flex gap-3 hover:text-green-400">Men</Link>
                    <Link to="/" className="flex gap-3 hover:text-green-400">Kids</Link>
                    <Link to="/" className="flex gap-3 hover:text-green-400">Home Deco</Link>
                </div>
            </section>
        </main>
    )
}