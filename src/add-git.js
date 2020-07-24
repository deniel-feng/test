/*
  * @Created by 冯赛 on 2020/7/24 0024 14:21
*/
const { exec } = require('child_process');
const { writeFile } = require('fs');

// console.log(readFile);
// readFile('./commit.txt', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// })
// "[time:%cd],commit-msg=%s,auther=%cn"
exec(`git log -1 --pretty=format:"time=%cd,commit_message=%s,author=%cn"`, (error, stdout) => {
	console.log('-----',stdout);
	if (error) throw error;
	const obj = {};
	stdout.split(',').forEach(item => {
		const data = item.split('=');
		obj[data[0]] = data[1];
	});
	const value = `export default ${JSON.stringify(obj)}`;
	writeFile('commit.js', value, err => {
		if (err) throw err;
	})
});
