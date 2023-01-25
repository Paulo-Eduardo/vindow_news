import { News } from "../types";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface CardProps {
	news: News;
	selectNews: (news: News) => void;
}

export default function Card({ news, selectNews }: CardProps) {
	return (
		<div
			className="card"
			style={{ width: "18rem", margin: 10, minHeight: "450px" }}
		>
			<LazyLoadImage
				src={news.image.thumbnail}
				height={150}
				className="card-img-top"
				alt="..."
				style={{ objectFit: "contain" }}
				onClick={() => selectNews(news)}
			/>
			<div className="card-body">
				<h5 className="card-title">{news.title}</h5>
				<p className="card-text">
					{news.body.split(" ").slice(0, 20).join(" ")}...
				</p>
				<a href={news.url} target="_blank" rel="noopener noreferrer">
					Read More
				</a>
			</div>
		</div>
	);
}
