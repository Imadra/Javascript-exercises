
/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
	var sel = [], fil = {};
	var cmd = [].slice.call(arguments);
	for(var i=1;i<cmd.length;i++) {
		if(cmd[i][0] == 'select') {
			cm = [];
			kkk = Object.keys(collection[0]);
			for(var j=1;j<cmd[i].length;j++)
				if(kkk.includes(cmd[i][j]))
					cm.push(cmd[i][j]);
			cmd[i] = cm;
			//console.log('--> ' + cmd[i] + ' --> ' + cmd[i][0]);
			if(sel.length == 0) {
				for(var j=0;j<cmd[i].length;j++) {
					cur = cmd[i][j];
					sel.push(cur);
				}
			}
			else {
				//console.log(sel);
				sk = [];
				for(var k=0;k<sel.length;k++) {
					p = 0;
					//console.log(cmd[i][1]);
					for(var j=0;j<cmd[i].length;j++) {
						if(cmd[i][j] == sel[k])
						{
							p = 1;
							break;
						}
					}
					//console.log(p);
					if(p == 1 || cmd[i].length == 0) {
						sk.push(sel[k]);
					}
				}
				sel = sk;
			}
		}
		if(cmd[i][0] == 'filterIn') {
			//console.log('--> ' + cmd[i][1] + ' --> ' + cmd[i][2] + '-->' + Array.isArray(cmd[i][2]));
			if(Array.isArray(cmd[i][2]) == false)
				cmd[i][2] = [cmd[i][2]];
			field = cmd[i][1];
			if(!fil.hasOwnProperty(field)) {
				fil[field] = [];
				for(var j=0;j<cmd[i][2].length;j++) {
					cur = cmd[i][2][j];
					//console.log(cur);
					fil[field].push(cur);
				}
			}
			else {
				for(var k=0;k<fil[field].length;k++) {
					p = 0;
					for(var j=0;j<cmd[i][2].length;j++) {
						if(cmd[i][2][j] == fil[field][k])
						{
							p = 1;
							break;
						}
					}
					if(p == 0)
						qqqq = fil[field].splice(k, 1);
				}
			}
		}
	}
	kk = Object.keys(fil);
	var res = [];
	for(var i=0;i<collection.length;i++){
		res[i] = 0;
	}
	//console.log(fil);
	for(var k=0;k<kk.length;k++) {
		//console.log(kk[k] + ' ' + fil[kk[k]]);
		for(var i=0;i<collection.length;i++) {
			cur = collection[i][kk[k]];
			//console.log(cur + ' ' + fil[kk[k]].includes(cur));
			if(fil[kk[k]].includes(cur) == true && (k==0 || res[i]==1)){
				//console.log(i);
				res[i] = 1;
			}
			else
				res[i] = 0;
		}
	}
	// /console.log(res);
	if(kk.length == 0)
		for(var i=0;i<collection.length;i++){
			res[i] = 1;
		}
	var ans = []
	for(var i=0;i<collection.length;i++) {
		if(res[i] == 0)
			continue;
		var cur = {}, kk = Object.keys(collection[i]);
		//console.log(kk);
		for(var j=0;j<sel.length;j++) {
			if(!collection[i].hasOwnProperty(sel[j]))
				continue;
			cur[sel[j]] = collection[i][sel[j]];
		}
		if(sel.length == 0)
			cur = collection[i];
		ans.push(cur);
	}
	//console.log(ans);
	return ans;
}

/**
 * @params {String[]}
 */
function select() {
	var arg = [].slice.call(arguments), fields = ['select'];
	for(var i=0;i<arg.length;i++)
		fields.push(arg[i]);
    return fields;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	var arg = [].slice.call(arguments), fields = ['filterIn'];
	for(var i=0;i<arg.length;i++)
		fields.push(arg[i]);
    return fields;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
