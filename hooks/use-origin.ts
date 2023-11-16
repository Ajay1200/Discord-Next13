import { useEffect, useState } from "react"

export const useOrigin = () => {
    const [mounted, setMunted] = useState(false);

    useEffect(() => {
        setMunted(true);
    }, []);

    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

    if (!mounted) {
        return "";
    }

    return origin;
}