import React, { useCallback, useEffect } from "react"

interface IuseClickOutside {
    handler: () => void | boolean
    ref: React.RefObject<HTMLDivElement>
}

export const useClickOutside = ({ ref, handler }: IuseClickOutside) => {
    const clickListener = useCallback((event: MouseEvent | TouchEvent) => {
        if (ref.current === event.target) {
            return handler()
        }
    }, [handler, ref])

    useEffect(() => {
        document.addEventListener('click', clickListener)
        document.addEventListener('mousedown', clickListener)
        document.addEventListener('touchstart', clickListener)
        return () => {
            document.removeEventListener('click', clickListener)
            document.removeEventListener('mousedown', clickListener)
            document.removeEventListener('touchstart', clickListener)
        }

    }, [])
    return
}