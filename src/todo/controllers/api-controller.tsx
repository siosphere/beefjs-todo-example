
import http = require('http')
import {ApiResponse} from "../../russet/core/web/api-response"

class ApiController
{
    listTodos(request : http.ServerRequest)
    {
        return new ApiResponse([
            'test TODO!'
        ])
    }


    saveTodo(request : http.ServerRequest)
    {
        return new ApiResponse({
            success: true
        })
    }
}

export const TodoApiController = new ApiController()