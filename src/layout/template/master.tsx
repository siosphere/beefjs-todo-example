import * as React from "react";
import {Head} from "./common/head"
import {Header} from "./common/header"
import {Middle} from "./common/middle"

interface MasterProps
{
    title? : string
}

export class Master extends React.Component<MasterProps, {}>
{
    static defaultProps = {
        title: "My awesome title"
    }

    render()
    {
        return <html>
            <Head title={this.props.title} />
            <body>
                <Header />
                <Middle>{() => this['block:body']()}</Middle>
            </body>
        </html>
    }

    protected renderHeaderBlock()
    {
        return null
    }

    protected ['block:body']()
    {
        return null
    }
}