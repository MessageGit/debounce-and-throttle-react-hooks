import React, { useRef, useEffect } from 'react';

export function useDebounce(callback, delay = 1000, deps) {
    const timeout = useRef();

    useEffect(() => {
        timeout.current = setTimeout(callback, delay);
        return () => clearTimeout(timeout.current);
    }, deps);
}