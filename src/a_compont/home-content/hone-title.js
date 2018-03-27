import React, {
	PropTypes as P
} from 'react';
import {
	connect
} from 'react-redux';

class HomeContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			homeTitle: '111',
			num: 1,
		};
	}

	componentWillMount() {
		this.setState({
			homeTitle: this.props.title,
		}, () => {
			console.log(this.state.homeTitle);
		});
		console.log(this.state.homeTitle);
		console.log('在渲染前调用,在客户端也在服务端', '1');
	}

	componentDidMount() {
		console.log('在渲染前调用,在客户端也在服务端', '2');
	}

	componentWillReceiveProps() {
		this.setState({
			homeTitle: this.props.title,
		}, () => {
			console.log(this.state.homeTitle);
		});
		this.setState({
			num: this.props.num,
		});
		console.log('在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用', '3');
	}

	shouldComponentUpdate() {
		console.log('在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用', '4');
		return true;
	}

	componentWillUpdate() {
		console.log('在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用', '5');
	}

	componentDidUpdate() {
		console.log('在组件完成更新后立即调用。在初始化时不会被调用', '6');
	}

	componentWillUnmount() {
		console.log('在组件从 DOM 中移除的时候立刻被调用', '7');
	}

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.state.homeTitle}</h2>
				<h3>{this.props.num}</h3>
				<h3>{this.state.num}</h3>
			</div>
		);
	}
}

HomeContent.propTypes = {
	location: P.any,
	title: P.string,
	homeTitle: P.any,
	num: P.any,
};

export default HomeContent;