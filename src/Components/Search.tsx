import SearchSharpIcon from "./Icons/Search"

type NavigationSearchType = {
    width: string
}

export const NavigationSearch = ({ width }: NavigationSearchType): JSX.Element => {
    return (
        <div className="relative">
            <input type="text" name="search" id="search" placeholder="Search item" className={`px-4 rounded-full border-2 border-gray-600 h-[50px] ${width}`} />
            <SearchSharpIcon className="w-6 h-6 absolute right-[17px] top-[15px]" />
        </div>
    )
}