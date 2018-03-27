const initState = {
	homevalue: 11111,
};

//reducer必须是纯函数   不能修改state和action里面的数据   所以  方法都是浅拷贝   不改变原来的数据

const valDefault = (state) => state;

const valAdd = (state, action) => {
	const {
		payload
	} = action;
	return Object.assign({}, state, {
		homevalue: payload,
	});
};

const reducerFn = (state = initState, action) => {
	switch (action.type) {
		case 'TEST::change':
			return valAdd(state, action);
			break;
		default:
			return valDefault(state, action);
			break;
	}
};

export default reducerFn;