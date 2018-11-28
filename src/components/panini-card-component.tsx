import * as React from "react";

// props from parent
export interface ComponentProps { 
    label: number;
    hits: number;
}

class PaniniCardComponent extends React.Component<ComponentProps, {}> {

	private getBackgroundColor(): string {
		if (this.props.hits > 0 ) {
			return 'lightgreen'
		} else {
			return 'lightgoldenrodyellow'
		}
	}

	private getBorder(): string {
		if (this.props.hits > 0 ) {
			return '1px solid green'
		} else {
			return '1px solid orange'
		}
	}

    render() {
        const { label, hits } = this.props;

		return  <div className={"panini-card-component panini-card-component-" + label }
					style={{
						background: this.getBackgroundColor(),
						padding: 10,
						border: this.getBorder(),
						textAlign: 'center'
					}}>
					<div>{hits} h</div>
				</div>;
    }
}

export default PaniniCardComponent;
