import { useContext } from 'react';
import { MultiStepFormContext } from './MultiStepFormContext';

export function useMultiStepForm() {
    const context = useContext(MultiStepFormContext);

    if (context === undefined)
        throw new Error('MultiStepFormContext was used outside of MultiStepFormContextProvider');

    return context;
}
