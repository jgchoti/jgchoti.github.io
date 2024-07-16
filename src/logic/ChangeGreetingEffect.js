import { useEffect, useState, useMemo } from 'react';

const useChangeGreetingEffect = () => {
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    // Define languages array using useMemo to memoize its value
    const languages = useMemo(() => [
        { lang: 'en', text: "Hello👋🏽" }, // English
        { lang: 'th', text: "สวัสดีค่ะ🙏🏽" }, // Thai
        { lang: 'nl', text: "Hallo👋🏽" } // Dutch
    ], []);

    useEffect(() => {
        const typingEffect = () => {
            const fullText = languages[currentLanguageIndex].text;
            let currentIndex = 0;

            const typeInterval = setInterval(() => {
                setDisplayedText((prevText) => prevText + fullText[currentIndex]);
                currentIndex++;

                if (currentIndex === fullText.length) {
                    clearInterval(typeInterval);
                    // Delay before starting to delete text
                    setTimeout(() => deleteEffect(fullText), 1000);
                }
            }, 100); // Typing speed

            const deleteEffect = (text) => {
                const deleteInterval = setInterval(() => {
                    setDisplayedText((prevText) => prevText.slice(0, -1));
                    if (displayedText === '') {
                        clearInterval(deleteInterval);
                        setTimeout(() => {
                            setCurrentLanguageIndex((prevIndex) => (prevIndex + 1) % languages.length);
                        }, 500);
                    }
                }, 50);
            };
        };
        typingEffect();

        return () => {
            clearInterval(typingEffect);
        };
    }, [currentLanguageIndex, languages, displayedText]);
    return displayedText;
};

export default useChangeGreetingEffect;
