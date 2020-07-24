/*
  * @Created by 冯赛 on 2020/7/24 0024 14:21
*/
const { exec } = require('child_process');

exec(`git log -1 --pretty=format:"{time：%cd, commit-msg: %s, auther: %cn}"`, (error, stdout, stderr) => {
	console.log(stdout);
});
