import { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */

function useClickaway(handler) {
    const ref = useRef(null);

    useEffect(() => {
        // Bind the event listener
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener("mousedown", handleClickOutside, true);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside, true);
            // document.removeEventListener("click", handleClickOutside, true);
        };
    }, [ref, handler]);

    return { ref };
}

export default useClickaway;
