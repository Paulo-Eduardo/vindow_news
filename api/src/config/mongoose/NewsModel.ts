import { Model, ObjectID } from "@tsed/mongoose";

@Model({ connection: "default" })
export class News {
	id: string;
	title: string;
	url: string;
	description: string;
	body: string;
	snippet: string;
	keywords: string;
	language: string;
	isSafe: boolean;
	datePublished: string;
	provider: {
		name: string;
		favIcon: string;
		favIconBase64Encoding: string;
	};
	image: {
		url: string;
		height: number;
		width: number;
		thumbnail: string;
		thumbnailHeight: number;
		thumbnailWidth: number;
		base64Encoding: string | null;
		name: string | null;
		title: string | null;
		provider: {
			name: string;
			favIcon: string;
			favIconBase64Encoding: string;
		};
		imageWebSearchUrl: string | null;
		webpageUrl: string;
	};
}
