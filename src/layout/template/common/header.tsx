import * as React from "react";

export class Header extends React.Component<{}, {}>
{
    render()
    {
        return <div className="header">
            <div className="container">
                <a href="http://www.beefjs.com/" className="pull-left logo">beefJS</a>
            </div>
        </div>
    }

}