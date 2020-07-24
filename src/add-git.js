/*
  * @Created by 冯赛 on 2020/7/24 0024 14:21
*/
const { exec } = require('child_process');
const { writeFile } = require('fs');
const { join } = require('path');

exec(`git log -1 --pretty=format:"web_commit_time=%cd,web_commit_message=%s,web_commit_author=%cn"`, (error, stdout) => {
	console.log(33);
	if (error) throw error;
	const obj = {};
	stdout.split(',').forEach(item => {
		const data = item.split('=');
		if (data[0] === 'web_commit_time') {
			obj[data[0]] = new Date(data[1]).toLocaleString();
		} else {
			obj[data[0]] = data[1];
		}
	});
	const value = `export default ${JSON.stringify(obj)}`;
	writeFile(join(__dirname, './commit.js'), value, err => {
		if (err) throw err;
	})
});
