import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoader, isPostLoading, callback) => {

    const observer = useRef();
    useEffect(() => {
        if (isPostLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries, observer) {
            if (entries[0].isIntersecting && canLoader) {
                callback();
            };

        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    }, [isPostLoading]);
}