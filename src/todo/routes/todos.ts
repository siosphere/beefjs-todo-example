import {TodoLandingController} from "../controllers/landing-controller"

class RouteDefinitions
{
    ['GET:/'] = TodoLandingController.indexAction;
}

export const Routes = new RouteDefinitions()