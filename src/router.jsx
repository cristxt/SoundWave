import FeelTheMusicLayout from "../../SoundWave/src/assets/components/pages/FeelTheMusic/FeelTheMusicLayout";
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
    {
        path: "/feel-the-music",
        element: <FeelTheMusicLayout />
    },
    /*
    paths para incluir en mis siguients commits
    {
        path: "/"",
        element: </>
    },
    {
        path: "/",  
        element: </>
    }*/
]);

