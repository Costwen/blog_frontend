import axios from 'axios';

axios.interceptors.request.use(function (config) {
	if (localStorage.getItem('access')) {
		let token = localStorage.getItem('access')
		if (!config.headers) {
			config.headers = {}
		}
		config.headers["Authorization"] = `Bearer ${token}`
	}
	return config;
}, function (error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	console.log(error)
	const {response: {data: {detail: api_detail} = {}} = {}} = error
	error.api_detail = api_detail || ""
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
	return response;
}, function (error) {
	const {response: {status: api_status} = {}} = error
	if(api_status == 401) {
		location.href = '/login'
	}
	return Promise.reject(error);
});

import article from './article.js'
import user from './user.js'

export default {
	article,
    user
}
