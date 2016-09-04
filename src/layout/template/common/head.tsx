/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";

interface HeadProps
{
    title: string
}

export class Head extends React.Component<HeadProps, {}>
{
    render()
    {
        return <head>
            <title>{this.props.title}</title>
            <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:400,700|Roboto+Condensed:400,700|Roboto+Slab:400,700|Quicksand:300,400' rel='stylesheet' type='text/css' />
            <link type="text/css" href="css/style.css" rel="stylesheet" />
        </head>
    }

}