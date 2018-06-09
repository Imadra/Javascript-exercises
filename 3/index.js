/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	var nminutes = (minutes + interval) % 60;
	var nhours = (hours + Math.floor((minutes + interval) / 60)) % 24;
	var m, h, ans;
	if(nminutes >= 9)
		m = nminutes;
	else
		m = '0'+nminutes;
	if(nhours >= 9)
		h = nhours;
	else
		h = '0'+nhours;
	ans = h+':'+m;
	return ans;
};
