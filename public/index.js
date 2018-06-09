// Телефонная книга
var phoneBook = {};



var addContact = function(name, phones) {
	if(phoneBook.hasOwnProperty(name) === false)
		phoneBook[name] = [];
	phoneBook[name] = phoneBook[name].concat(phones);
}

var remove = function(phone) {
	keys = Object.keys(phoneBook);
	for(var i=0;i<keys.length;i++) {
		var phones = phoneBook[keys[i]];
		for(var j=0;j<phones.length;j++) {
			if(phones[j] === phone) {
				cur = phones.splice(j, 1);
				if(phones.length == 0)
					delete phoneBook[keys[i]];
				return true;
			}
		}
	}
	return false;
}

var show = function() {
	keys = Object.keys(phoneBook);
	res = [];
	for(var i=0;i<keys.length;i++) {
		newC = keys[i]+': ';
		var phones = phoneBook[keys[i]];
		ph = phones.join(", ");
		newC = newC + ph;
		res.push(newC);
	}
	//console.log(res.sort());
	return res.sort();
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	words = command.split(' ');
	commandName = words[0];
	if (commandName === 'ADD') {
        name = words[1];
        phones = words[2].split(',');
        return addContact(name, phones);
    }

    if (commandName === 'REMOVE_PHONE') {
    	phone = words[1];
    	return remove(phone);
    }

    if(commandName === "SHOW") {
    	return show();
    }
};
