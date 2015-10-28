import * as React from "react";

export interface IAppProps {
	children:any
}

export default class App extends React.Component<IAppProps, any> {

	render() {
		return (
      <div>{this.props.children}</div>
    )
  }
}
