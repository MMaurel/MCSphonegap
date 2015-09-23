var USERNAME = 'qg@mmaurel.com';
var PASSWORD = 'Abc123';
var baseUrl = 'https://app.cloudonchip.com/';

var auth = baseUrl + 'v1/user/token.json';
var currentUser = baseUrl + 'v1/users/me.json';
var token = '3a798f10-30dd-40e5-a637-a8ff6d02b54e';

var user = {
		notifemail: "qg@mmaurel.com",
		secphone: "+33652339756",
		language: "fr_FR",
		passwordhash: "1000:17abe4f54aa8746635f9181fb10de3d9bf860df66c3afa77:ff9467a78c9d7a728fad8c670ec6d81657ea19c39c94d619",
		firstname: "Z",
		lastname: "42",
		picture: "https://sdis-root.s3.amazonaws.com/Produits%20V2%20-%20Tests%20internes/3777889/drinking-bacchus.jpg",
		email: "qg@mmaurel.com",
		mobile: "+33652339756",
		businesskey: "5078453c-6e49-40b0-ac77-edd0681fd717",
		id: 45827
	};

var timelineFetch = baseUrl + 'v1/users/' + user.id + '/timeline.json';

function _ajax_request(url, data, callback, type, method) {
	auth = make_base_auth(USERNAME, PASSWORD);

    if (jQuery.isFunction(data)) {
        callback = data;
        data = {};
    }

    return jQuery.ajax({
        type: method,
        url: url,
        xhrFields: {
			withCredentials: true
		},
        headers: {
        	'Authorization': auth
        },
        data: data,
        success: callback,
        dataType: type
    });
}

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);

    return 'Basic ' + hash;
}

jQuery.extend({
    get_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'GET');
    },
    put_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT');
    },
    post_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'POST');
    },
    delete_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE');
    }
});

$.get(currentUser, function(data) {
	alert(data);
}, 'application/json');