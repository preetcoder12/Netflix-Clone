import { useEffect, useState } from "react";
import { Usercontent } from "../../store/content";
import axios from "axios";

const useGetTrendingContent = () => {
	const [trendingContent, setTrendingContent] = useState(null);
	const { contentType } = Usercontent();

	useEffect(() => {
		const getTrendingContent = async () => {
			const res = await axios.get(`api/v1/${contentType}/trending`);
			setTrendingContent(res.data.content);
		};

		getTrendingContent();
	}, [contentType]);

	return { trendingContent };
};
export default useGetTrendingContent;