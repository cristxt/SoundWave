import { createBrowserRouter } from 'react-router-dom';

import DiscoverNewMusicLayout from "../src/assets/components/pages/DiscoverNewMusic/DiscoverNewMusicLayout";


export const router = createBrowserRouter([
    /*{
        path: "/feel-the-music",
        element: <FeelTheMusicLayout />
    },*/
    {
        path: "/discover-new-music",
        element: <DiscoverNewMusicLayout/>
    },
    /*{
        path: "/join-the-fun",  
        element: <JoinTheFunLayoutLayout/>
    }*/
]);