import {Bundle} from "../russet/core/bundle"

import {ApiRoutes as TodoApiRoutes} from "./routes/api"
import {Routes as TodoRoutes} from "./routes/todos"

class TodoBundleClass extends Bundle
{
    routes() : any[]
    {
        return [
            TodoApiRoutes, 
            TodoRoutes
        ]
    }
}

export let TodoBundle = new TodoBundleClass()