import { Context } from "@tsed/platform-params";
import { MiddlewareMethods, Middleware } from "@tsed/platform-middlewares";
import { Forbidden } from "@tsed/exceptions";
import { envs } from "../../../config/envs";

@Middleware()
export class CustomMiddleware implements MiddlewareMethods {
	use(@Context() $ctx: Context) {
		const rapidapiKey = $ctx.request.headers["x-rapidapi-key"];
		const rapidapiHost = $ctx.request.headers["x-rapidapi-host"];
		if (
			rapidapiKey !== envs.RAPIDAPI_KEY ||
			rapidapiHost !== envs.RAPIDAPI_HOST
		)
			throw new Forbidden("Access forbidden - Bad token");
	}
}
