// 所需的各种插件
import React, {
	PropTypes as P
} from 'react';
import {
	connect
} from 'react-redux';
import $ from 'jquery';
// 本页面所需action
import changeAction from '../../a_action/home_action/change-action';
//样式
import style from '../../css/home.css';

//头部
import HomeContent from '../../a_compont/home-content/hone-title';


// 最终要交给redux管理的所有变量
const mapStoreStateToProps = (state) => ({
	dispatch: state.dispatch,
	homevalue: state.home.homevalue,
});

// 最终要交给redux管理的所有action
// 即定义哪些方法将成为action
const mapDispatches = (dispatch) => ({
	fn: {
		onValChange: (v) => {
			dispatch(changeAction.onValChange(v));
		},
	}
});

class HomeCon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			home: 'hello !!!',
			homeTitle: 'hello hi hi hello',
			num: 0,
		};
		this.goRoot = this.goRoot.bind(this);
		this.addTitle = this.addTitle.bind(this);
	}

	getInitialState() {
		// console.log(this.state.home, 'state');
	}

	componentWillMount() {
		// console.log(this.state.homeTitle, 'wm');
		this.setState({
			homeTitle: 'nnnn222nn',
		}, () => {
			// console.log(this.state, '1');
		});
		// console.log(this.state, '2');
		// $.get('http://localhost:8880/introduce', function(data) {
		// 	console.log(data);
		// });
	}

	componentDidMount() {
		// console.log($("div"));

		let itemData = {
			name: '11',
			age: 12
		};
		let newData = ({...itemData,
			tel: 11111
		});

		let oldData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let noldData = oldData.filter((age) => {
			return age != 6;
		});
		// console.log(newData);
		// console.log(itemData);
		// console.log(oldData);
		// console.log(noldData);

		for (var i = 0; i < 5; i++) {
			setTimeout(() => {
				// console.log(i, '11');
			}, 100);
		}
	}

	goRoot() {
		// console.log('跳转页面');
		// console.log($('div'));
		// this.setCookie('zhangsan', '123');
		$.get('http://localhost:8880/introduce', (res) => {
			console.log(res, 'qqqq');
		});
		localStorage.setItem('name', 'zhangsan');
	}

	setCookie(name, id) {
		let d = new Date();
		d.setTime(d.getTime());
		let expires = 'expires=' + d.toUTCString();
		document.cookie.setPath('/');
		document.cookie = name + '_-' + id + '_-' + expires;
		// console.log(d);
		window.location.href = 'http://localhost:8880';
	}

	addTitle() {}

	changeNum(num) {
		this.setState({
			num: num + 1,
		}, () => {
			console.log(this.state.num);
		});
		this.setState({
			homeTitle: '张三',
		});
	}

	render() {
		return (
			<div>
			  <HomeContent title={this.state.homeTitle} num={this.state.num} />
			  <div className={style.title}>{this.props.homevalue}</div>
			  <button onClick={this.goRoot}>跳转</button>
			  <button onClick={()=>this.props.fn.onValChange(this.props.homevalue)}>+10</button>
			  <div>{this.state.home}</div>
			  <button onClick={this.addTitle, ()=>this.changeNum(this.state.num)}>改变头部</button>
			</div>
		);
	}
}

HomeCon.propTypes = {
	dispatch: P.func,
	homevalue: P.number,
	location: P.any,
	fn: P.object,
};

export default connect(mapStoreStateToProps, mapDispatches)(HomeCon);