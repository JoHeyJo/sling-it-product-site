const { VITE_APP_URL, VITE_LOCAL_URL } = import.meta.env;
const isDev = import.meta.env.DEV;


export const productSite = isDev ? VITE_LOCAL_URL : VITE_APP_URL
