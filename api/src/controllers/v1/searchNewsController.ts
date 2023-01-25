import { UseBefore } from "@tsed/platform-middlewares";
import { Controller, Inject } from "@tsed/di";
import { Default, Get, MinLength, Required } from "@tsed/schema";
import { CustomMiddleware } from "./middleware/";
import { MongooseModel } from "@tsed/mongoose";
import { News as NewsModel } from "src/config/mongoose/NewsModel";
import { QueryParams } from "@tsed/common";

class QueryNewsSearchParams {
	@Required()
	@MinLength(1)
	q: string;

	@Default(true)
	withThumbnails: boolean;

	@Required()
	pageNumber: number;

	@Required()
	pageSize: number;
}

@Controller("/search/NewsSearchAPI")
export class HelloWorldController {
	newsModel: MongooseModel<NewsModel>;
	constructor(@Inject(NewsModel) newsModel: MongooseModel<NewsModel>) {
		this.newsModel = newsModel;
	}
	@Get("/")
	@UseBefore(CustomMiddleware)
	async get(
		@QueryParams()
		{ pageSize, pageNumber, q, withThumbnails }: QueryNewsSearchParams
	) {
		const res = await this.newsModel
			.find(
				{ title: { $regex: q, $options: "i" } },
				!withThumbnails ? { image: { thumbnail: 0 } } : null,
				{
					strictQuery: false,
				}
			)
			// .skip((pageNumber - 1) * pageSize)
			// .limit(pageSize)
			.exec();

		console.log("## ", (pageNumber - 1) * pageSize, pageNumber * pageSize);

		return {
			_type: "news",
			didUMean: "",
			totalCount: res.length,
			value: res.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
		};
	}
}
