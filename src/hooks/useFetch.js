import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (method, url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getData = async (method, url) => {
		try {
			setLoading(true);
			const { data } = await axios[method](url);
			setData(data);
		} catch (error) {
			setError(true);
			throw error;
		} finally {
			setLoading(false);
		}
	};

	const resetError = () => {
		setError(false);
		getData(method, url);
	};

	useEffect(() => {
		getData(method, url);
	}, [method, url]);

	return { data, loading, error, resetError };
};

export default useFetch;
