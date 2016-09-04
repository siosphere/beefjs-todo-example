
import {TodoApiController} from "../controllers/api-controller"

class ApiRouteDefinitions
{
    ['GET:/api/v1/todos'] = TodoApiController.listTodos;
    
    ['POST:/api/v1/todos'] = TodoApiController.saveTodo;
}

export const ApiRoutes = new ApiRouteDefinitions()