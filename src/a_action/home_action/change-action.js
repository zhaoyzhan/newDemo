export default class AdviserActions {
	static onValChange(num) {
		console.log(num, '2222');
		return {
			type: 'TEST::change',
			payload: num + 10,
		};
	}
}