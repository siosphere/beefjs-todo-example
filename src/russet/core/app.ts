/// <reference path="../../../typings/index.d.ts" />
/// <reference path="../../../node_modules/beef/dist/typings/index.d.ts" />
import connect = require('connect')
import bodyParser = require('body-parser')
import http = require('http')
import serveStatic = require('serve-static')
import * as React from "react";
import ReactDOMServer = require('react-dom/server')
import {Response} from "./web/response"
import {Bundle} from "./bundle"
import beef = require('beef')
import extend = require('extend')

let RoutingService = beef.RoutingService

export interface RussetConfig
{
    port? : number
}

export class CoreApp
{
    protected registeredRoutes : any

    protected server : any

    constructor()
    {
        this.server = connect()
        this.server.use(bodyParser.urlencoded())
        this.server.use(serveStatic('public'))
        this.server.use(this.serve)

        this.registeredRoutes = {}

        this.registerBundle = this.registerBundle.bind(this)
        this.buildRoutes = this.buildRoutes.bind(this)
    }

    bundles() : Bundle[]
    {
        return []
    }

    serve(request : http.ServerRequest, response : http.ServerResponse, next : (...any) => any)
    {
        let method = request.method
        let url = request.url

        let route = `${method}:${url}`

        let russetResponse : Response = RoutingService.doRouting(route, request)

        if(!russetResponse)
        {
            return next()
        }

        response.statusCode = russetResponse.statusCode
        russetResponse.setupHeaders(response)
        response.end(russetResponse.content)
        next()
    }

    start()
    {
        this.bundles().forEach(this.registerBundle)

        let finalConfig : RussetConfig = extend(true, {}, this.defaultConfig(), this.config())
        http.createServer(this.server).listen(finalConfig.port)
    }

    protected registerBundle(bundle : Bundle)
    {
        bundle.routes().forEach((Routes) => {
            this.buildRoutes(Routes)
        })

        RoutingService.routes(this.registeredRoutes)
    }

    protected buildRoutes(_buildRoutes)
    {
        for(var key in _buildRoutes)
        {
            this.registeredRoutes[key] = _buildRoutes[key]
        }
    }

    protected config() : RussetConfig
    {
        return {}
    }

    private defaultConfig() : RussetConfig
    {
        return {
            port: 3000
        }
    }
}