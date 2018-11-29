import * as React from "react";
import { Dispatch } from 'redux';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';


// props from parent
export interface ComponentProps { 
    label: number;
}

// props from redux store
interface ReduxProps {
	filledAlbum: Array<number>;
}

interface DispatchProps {
}

type Props = ReduxProps & DispatchProps & ComponentProps;

class PaniniCardComponent extends React.Component<Props, {}> {

	private getBackgroundColor(): string {
		if (this.props.filledAlbum[this.props.label] > 0 ) {
			return 'lightgreen'
		} else {
			return 'lightgoldenrodyellow'
		}
	}

	private getBorder(): string {
		if (this.props.filledAlbum[this.props.label] > 0 ) {
			return '1px solid green'
		} else {
			return '1px solid orange'
		}
	}

    render() {
        const { label, filledAlbum } = this.props;

		return  <div className={"panini-card-component panini-card-component-" + label }
					style={{
						background: this.getBackgroundColor(),
						padding: 10,
						border: this.getBorder(),
						textAlign: 'center'
					}}>
					<div>{filledAlbum[label]} h</div>
				</div>;
    }
}

const mapStateToProps = (state: ApplicationState): ReduxProps => ({
	filledAlbum: state.panini.shop.filledAlbum,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
});

export default connect<ReduxProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(PaniniCardComponent);
