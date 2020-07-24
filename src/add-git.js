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
exec(`git log -1 --pretty=format: "time:%cd"`, (error, stdout) => {
	console.log('-----',stdout);
	if (error) throw error;
	writeFile('commit.txt', stdout, err => {
		if (err) throw err;
	})
});
