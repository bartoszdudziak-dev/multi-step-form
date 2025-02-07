import { createContext } from 'react';
import { MultiStepFormContextType } from '../type';

export const MultiStepFormContext = createContext<MultiStepFormContextType | undefined>(undefined);
