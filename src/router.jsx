import { createBrowserRouter } from 'react-router-dom';


import JoinTheFunLayout from './assets/components/pages/JoinTheFun/JoinTheFunLayout';

export const router = createBrowserRouter([
    /*{
        path: "/feel-the-music",
        element: <FeelTheMusicLayout />
    },
    {
        path: "/discover-new-music",
        element: <DiscoverNewMusicLayout/>
    },*/
    {
        path: "/join-the-fun",  
        element: <JoinTheFunLayout/>
    }
]);
