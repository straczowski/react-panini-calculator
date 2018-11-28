import * as React from "react";

// props from parent
export interface PaniniCardProps { 
    label: number;
    hits: number;
}

class PaniniCardComponent extends React.Component<PaniniCardProps, {}> {

    render() {
        const { label, hits } = this.props;

		return  <div className="panini-card-component" 
					style={{
						background: 'lightgreen',
						padding: 10,
						border: '1px solid green',
						textAlign: 'center'
					}}>
					<div>{label}</div>
					<div>{hits} hits</div>
				</div>;
    }
}

export default PaniniCardComponent;
