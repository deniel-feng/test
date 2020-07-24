/*
  * @Created by 冯赛 on 2020/7/24 0024 14:21
*/
import Vue from "vue/types/vue";
const { exec } = require('child_process');
const { writeFile } = require('fs');

Vue.config.productionTip = false


// console.log(readFile);
// readFile('./commit.txt', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// })

exec(`git log -1 --pretty=format:"{time：%cd, commit-msg: %s, auther: %cn}"`, (error, stdout) => {
	console.log(stdout);
	console.log('window', window);
	if (error) throw error;
	writeFile('commit.txt', stdout, err => {
		if (err) throw err;
	})
});
