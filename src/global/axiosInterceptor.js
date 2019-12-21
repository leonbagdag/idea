import axios from 'axios';
import { URL } from './URL';

export const start = () => {
	axios.interceptors.request.use(
		config => {
			config.baseURL = URL;
			return config;
		},
		error => {
			Promise.reject(error);
		}
	);
	axios.interceptors.response.use(response => {
		return response;
	});
};
