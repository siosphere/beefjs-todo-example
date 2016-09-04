import * as React from "react"
import http = require('http')

import {Index} from "../template/landing/index"
import {Template} from "../../russet/core/templating/template"

class LandingController
{
    @Template()
    indexAction()
    {
        return <Index />
    }
}

export const TodoLandingController = new LandingController()