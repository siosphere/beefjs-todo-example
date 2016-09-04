/// <reference path="../../typings/index.d.ts" />
/// <reference path="../../node_modules/beef/dist/typings/index.d.ts" />

import {Bundle} from "./core/bundle"
import {TodoBundle} from "../todo/bundle"

import {CoreApp} from "./core/app"

class RussetAppClass extends CoreApp
{
    bundles() : Bundle[]
    {
        return [
            TodoBundle
        ]
    }
}

export const RussetApp = new RussetAppClass()
