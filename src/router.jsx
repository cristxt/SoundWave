import { createBrowserRouter } from 'react-router-dom';
import FeelTheMusicLayout from "../../SoundWave/src/assets/components/pages/FeelTheMusic/FeelTheMusicLayout";
import DiscoverNewMusicLayout from "./assets/components/pages/DiscoverNewMusic/DiscoverNewMusicLayout";
import JoinTheFunLayout from './assets/components/pages/JoinTheFun/JoinTheFunLayout';
export const router = createBrowserRouter([
    {
        path: "/feel-the-music",
        element: <FeelTheMusicLayout />
    },
    {
        path: "/discover-new-music",
        element: <DiscoverNewMusicLayout/>
    },
    {
        path: "/join-the-fun",  
        element: <JoinTheFunLayout/>
    }
]);

