import { useEffect, useState } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			const responseJson = await response.json();
			setData(responseJson[0]);
		};
		fetchData();
	}, [url]);
	return data;
};

export default useFetch;
