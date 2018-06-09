/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	var res = "", arr = [];
	for(var i=0;i<hashtags.length;i++) {
		var hashtag = hashtags[i].toLowerCase();
		var p = 0;
		for(var j=0;j<arr.length;j++) {
			if(arr[j] == hashtag)
			{
				p = 1;
				break;
			}
		}
		if(p == 0)
			arr.push(hashtag);
	}
	res = arr.join(", ");
	return res;
};
