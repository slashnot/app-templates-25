import { useEffect } from 'react';
import { useLocation } from 'react-router';

async function loadFlyonUI() {
    return import('flyonui/flyonui');
}

export const useFlyon = () => {
    const location = useLocation();

    useEffect(() => {
        const initFlyonUI = async () => {
            await loadFlyonUI();
        };

        initFlyonUI();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (
                window.HSStaticMethods &&
                typeof window.HSStaticMethods.autoInit === 'function'
            ) {
                window.HSStaticMethods.autoInit();
            }
        }, 100);
    }, [location.pathname]);
}