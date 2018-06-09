/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
	var res = [];
	var cur = tweet.split(" ");
	for(var i=0;i<cur.length;i++) {
		if(cur[i][0] === '#') {
			res.push(cur[i].slice(1, cur[i].length));
		}
	}
	return res;
};
