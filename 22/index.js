/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
	var tmp = [];
	var recursive = function(operations, k, callback) {
		f = operations[k](function(err, data) {
			if(err == null) {
				if(tmp.length == operations.length-1){
					tmp.push(data);
					callback(null, tmp);
				}
				else {
					tmp.push(data);
					recursive(operations, k+1, callback);
				}
			}
			else
				return callback(err);
		})
	}
	if(operations.length > 0)
		recursive(operations, 0, callback);
	else
		return callback(null, operations);
};