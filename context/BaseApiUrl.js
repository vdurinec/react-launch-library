import { createContext } from 'react';

export const API_URL = 'https://ll.thespacedevs.com/2.2.0';
export const API_DEV_URL = 'https://lldev.thespacedevs.com/2.2.0';

export const BaseApiUrlContext = createContext(API_URL);
