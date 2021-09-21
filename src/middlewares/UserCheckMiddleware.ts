import { Context, Middleware, MiddlewareMethods, Req, Res } from "@tsed/common";
import { Forbidden } from "@tsed/exceptions";

@Middleware()
export class UserAuthMiddleware implements MiddlewareMethods {
  public async use(
    @Req() request: Req,
    @Res() response: Res,
    @Context() ctx: Context
  ): Promise<void> {
    const user: string | undefined = request.query.user?.toString();

    if (user !== "admin") {
      throw new Forbidden("Forbidden");
    }

    response.locals.user = {
      username: "admin",
    };
  }
}
