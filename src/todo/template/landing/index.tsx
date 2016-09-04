import * as React from "react"

import {Master} from "../../../layout/template/master"

export class Index extends Master
{
    ['block:body'](){
        return <div>This is my test body</div>
    }
}