import { useState } from "react";

import axios from "axios";

import { News } from "./types";

import Card from "./components/card";

import "./App.css";
import ImgModal from "./components/imgModal";
import Header from "./components/header";
import Bottom from "./components/bottom";

export default function App() {
	const [loading, setLoading] = useState<boolean>(false);
	const [selectedNewsImage, setSelectedNewsImage] = useState<News | null>(null);
	const [query, setQuery] = useState<string>("");
	const [newsList, setNewsList] = useState<Array<News>>([]);
	const [page, setPage] = useState<number>(1);
	const [totalCount, setTotalCount] = useState<number>(0);

	const lastIndex = page * 10;

	const searchNews = (query: string, page: number) => {
		if (query === "") return;
		setLoading(true);
		setPage(page);
		setQuery(query);
		axios
			.get("/search/NewsSearchAPI", {
				params: {
					q: query,
					withThumbnails: true,
					pageNumber: page,
					pageSize: 10,
				},
			})
			.then((res) => {
				setTotalCount(res.data.totalCount as number);
				setNewsList(res.data.value as Array<News>);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	};

	const changePage = (page: number) => {
		searchNews(query, page);
	};

	return (
		<div className="container-fluid">
			<Header query={query} searchNews={searchNews} />
			{loading ? (
				<div className="loader-container">
					<div className="spinner"></div>
				</div>
			) : newsList.length === 0 ? (
				<div className="empty-list">
					<h2>No news to show</h2>
				</div>
			) : (
				<div className="card-list">
					{newsList.map((news: News, index: number) => (
						<Card
							news={news}
							key={index}
							selectNews={(news: News) => setSelectedNewsImage(news)}
						/>
					))}
				</div>
			)}
			<Bottom
				page={page}
				changePage={changePage}
				disabled={newsList.length === 0}
				lastPage={totalCount < lastIndex}
			/>
			{selectedNewsImage != null && (
				<ImgModal
					onClose={() => setSelectedNewsImage(null)}
					src={selectedNewsImage.image.url}
				/>
			)}
		</div>
	);
}
