const axios = require('axios');

import { axiosResponseDataUnpacker } from 'axios-data-unpacker';
axiosResponseDataUnpacker(axios);

const config = {
	host: 'https://favicongrabber.com',
	path: '/api',
	route: {
		grab: '/grab'
	}
};

const leftExtract = (str, of) => {
	const inx = str.lastIndexOf(of);
	return inx > -1 ? str.slice(inx + of.length) : str;
};

const rightExtract = (str, of) => {
	const inx = str.indexOf(of);
	return inx > -1 ? str.slice(0, inx) : str;
};

const extractDomain = url => {
	if (url == null) {
		throw new Error('The url parameter is required.');
	}

	let next = url;

	// https://user:pass@theanubhav.com:8080/p/a/t/h?query=string#has
	next = leftExtract(next, '://');
	// user:pass@theanubhav.com:8080/p/a/t/h?query=string#has
	next = rightExtract(next, '/');
	// user:pass@theanubhav.com:8080
	next = leftExtract(next, '@');
	// theanubhav.com:8080
	next = rightExtract(next, ':');

	return next;
};

const getGrabAPIUrl = site => {
	const { host, path, route } = config;
	return `${host}${path}${route.grab}/${extractDomain(site)}`;
};

const grabFavicon = site => {
	return axios.get(getGrabAPIUrl(site));
};

export default grabFavicon;
export { grabFavicon };
