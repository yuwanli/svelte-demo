import Alert from './App.svelte';

new Alert({
	target: document.getElementById('test1'),
	props: {
		title: 'this is success alert(can close)',
		message: 'Success Text',
		type: 'success',
		closable: true,
		showIcon: true
	}
});

new Alert({
	target: document.getElementById('test2'),
	props: {
		title: 'this is error alert(can close)',
		message: 'error Text',
		type: 'error',
		closable: true,
		showIcon: true
	}
});

new Alert({
	target: document.getElementById('test3'),
	props: {
		title: 'this is warning alert(can close)',
		message: 'warning Text',
		type: 'warning',
		closable: true,
		showIcon: true
	}
});

new Alert({
	target: document.getElementById('test4'),
	props: {
		title: 'this is info alert(can close)',
		message: 'info Text',
		type: 'info',
		closable: true,
		showIcon: true
	}
});

new Alert({
	target: document.getElementById('test5'),
	props: {
		title: 'this is success alert(cannot close no icon)',
		message: 'Success Text',
		type: 'success',
		closable: false,
		showIcon: false
	}
});