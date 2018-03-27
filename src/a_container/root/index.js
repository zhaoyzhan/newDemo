import React, {
	PropTypes as P
} from 'react';

class RootContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="outroot">
				<h1>11111</h1>
				{this.props.children}
			</div>
		);
	}
}


/*代码类型检查*/
RootContainer.propTypes = {
	children: P.any,
};

export default RootContainer;