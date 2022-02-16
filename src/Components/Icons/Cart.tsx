import * as React from "react";

function CartIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 21 21"
            fill="currentColor"
            {...props}
        >
            <g fill="none" fillRule="evenodd">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.5 4.615h11V10.5a2 2 0 01-2 2H8.262a2 2 0 01-1.984-1.748z"
                />
                <path fill="currentColor" d="M15 14h2v2h-2zM8 14h2v2H8z" />
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.5 4.5h13M6 7.5h10.5" />
                </g>
            </g>
        </svg>
    );
}

export default CartIcon;