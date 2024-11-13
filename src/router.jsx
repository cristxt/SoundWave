import FeelTheMusicLayout from "../../SoundWave/src/assets/components/pages/FeelTheMusic/FeelTheMusicLayout";
import { createBrowserRouter } from 'react-router-dom';
import DiscoverNewMusicLayout from "./assets/components/pages/DiscoverNewMusic/DiscoverNewMusicLayout";
export const router = createBrowserRouter([
    {
        path: "/feel-the-music",
        element: <FeelTheMusicLayout />
    },
    {
        path: "/discover-new-music",
        element: <DiscoverNewMusicLayout/>
    },
    /*{
        path: "/unknow",  
        element: </>
    },*/
]);