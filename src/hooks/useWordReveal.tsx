import { useEffect, useState } from 'react';

const useWordReveal = (text: string) => {
    const initialDelay: number = 500;
    const wordDelay: number = 100;

    const words = text.split(' ');
    const [visibleWords, setVisibleWords] = useState<number>(-1);

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < words.length) {
                setVisibleWords((prev) => prev + 1);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, wordDelay);

        const timeout = setTimeout(() => interval, initialDelay);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [words, wordDelay, initialDelay]);

    return { words, visibleWords };
};

export default useWordReveal;