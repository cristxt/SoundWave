import { createBrowserRouter } from 'react-router-dom';
import FeelTheMusicLayout from "../../SoundWave/src/assets/components/pages/FeelTheMusic/FeelTheMusicLayout";
import DiscoverNewMusicLayout from "../src/assets/components/pages/DiscoverNewMusic/DiscoverNewMusicLayout";
import JoinTheFunLayoutLayout from "./assets/components/pages/JoinTheFun/JoinTheFunLayout";

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
        element: <JoinTheFunLayoutLayout/>
    }
]);

