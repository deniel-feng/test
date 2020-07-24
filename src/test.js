/*
  * @Created by 冯赛 on 2020/7/24 0024 18:08
*/
const s = 'time=Fri Jul 24 18:06:49 2020 +0800,commit_message=6,author=Sai Feng';
const obj = {};
s.split(',').forEach(item => {
	const data = item.split('=');
	obj[data[0]] = data[1];
});
console.log(obj);
