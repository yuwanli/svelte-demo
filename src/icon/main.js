import mainfest from '@ant-design/icons/lib/manifest';
import Icon from './App.svelte';
console.log(mainfest)

const fillArr = mainfest.fill
for (let i = 0;i < fillArr.length; i++){
	let elem = document.createElement('span')
	new Icon({
		target: elem,
		props: {
			type: fillArr[i],
			theme: 'fill',
			width: '20px',
			height: '20px'
		}
	});
	document.getElementById('fill').appendChild(elem)
}

const outlineArr = mainfest.outline
for (let i = 0;i < outlineArr.length; i++){
	let elem = document.createElement('span')
	new Icon({
		target: elem,
		props: {
			type: outlineArr[i],
			theme: 'outline',
			width: '20px',
			height: '20px'
		}
	});
	document.getElementById('outline').appendChild(elem)
}

const twotoneArr = mainfest.twotone
for (let i = 0;i < twotoneArr.length; i++){
	let elem = document.createElement('span')
	new Icon({
		target: elem,
		props: {
			type: twotoneArr[i],
			theme: 'twotone',
			width: '20px',
			height: '20px',
			twoToneColor: '#eb2f96',
		}
	});
	document.getElementById('twotone').appendChild(elem)
}
