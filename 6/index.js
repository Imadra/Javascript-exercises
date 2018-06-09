/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
	dd = date.split(' ');
	year = Number(dd[0].slice(0, 4));
	month = Number(dd[0].slice(5, 7))-1;
	day = Number(dd[0].slice(8, 10));
	h = Number(dd[1].slice(0, 2));
	m = Number(dd[1].slice(3, 5));
	k = Date.UTC(year, month, day, h, m);
	//console.log('--> ' + new Date(k));

	function createObject() {
	    return {
	       add: function (n, type) {
	       		if((type != 'years' && type != 'months' && type != 'days' && type !='hours' && type !='minutes') || (n < 0)) {
	       			throw new TypeError();
	       		}
				if(type == 'years')
				{
					year += n;
					//console.log("1: "+new Date(year, month, day, h, m));
				}
				if(type == 'months') {
					//month = (month + n) % 11;
					//year = (year + Math.floor((month + n) / 11));
					month += n;
					//console.log("2: "+new Date(year, month, day, h, m));
				}
				if(type == 'days') {
					day += n;
					//console.log("3: "+new Date(year, month, day, h, m));
				}
				if(type == 'hours') {
					h += n;
					//console.log("4: "+new Date(year, month, day, h, m));
				}
				if(type == 'minutes') {
					m += n;
					//console.log("5: "+new Date(year, month, day, h, m));
				}
				l = new Date(year, month, day, h, m);
				ny = l.getFullYear();
				nm = l.getMonth()+1;
				if(nm <= 9)
					nm = '0'+nm;
				nd = l.getDate();
				if(nd <= 9)
					nd = '0'+nd;
				nh = l.getHours();
				if(nh <= 9)
					nh = '0'+nh;
				nmi = l.getMinutes();
				if(nmi <= 9)
					nmi = '0'+nmi;
				this.value = ny+'-'+nm+'-'+nd+' '+nh+':'+nmi;
				return this;
	       },
	       subtract: function (n, type) {
	       		if((type != 'years' && type != 'months' && type != 'days' && type !='hours' && type !='minutes') || (n < 0)) {
	       			throw new TypeError();
	       		}
	       		if(type == 'years')
				{
					year -= n;
					//console.log("1: "+new Date(year, month, day, h, m));
				}
				if(type == 'months') {
					//month = (month + n) % 11;
					//year = (year + Math.floor((month + n) / 11));
					month -= n;
					//console.log("2: "+new Date(year, month, day, h, m));
				}
				if(type == 'days') {
					day -= n;
					//console.log("3: "+new Date(year, month, day, h, m));
				}
				if(type == 'hours') {
					h -= n;
					//console.log("4: "+new Date(year, month, day, h, m));
				}
				if(type == 'minutes') {
					m -= n;
					//console.log("5: "+new Date(year, month, day, h, m));
				}
	            l = new Date(year, month, day, h, m);
				ny = l.getFullYear();
				nm = l.getMonth()+1;
				if(nm <= 9)
					nm = '0'+nm;
				nd = l.getDate();
				if(nd <= 9)
					nd = '0'+nd;
				nh = l.getHours();
				if(nh <= 9)
					nh = '0'+nh;
				nmi = l.getMinutes();
				if(nmi <= 9)
					nmi = '0'+nmi;
				this.value = ny+'-'+nm+'-'+nd+' '+nh+':'+nmi;
				return this;
	       }
	   }
	}

	return createObject();
};
