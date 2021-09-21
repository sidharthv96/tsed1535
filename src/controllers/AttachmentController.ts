import { Get, PathParams, Req } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";

export abstract class AttachmentController {
  abstract permission: string;

  private checkPermission(given?: string) {
    if (given !== this.permission) {
      throw new Unauthorized("Not enough permission");
    }
  }

  @Get("/:parentID/attachments")
  getAll(@Req() req: Req, @PathParams("parentID") parentID: string) {
    this.checkPermission(req.query.permission?.toString());
    return `All attachments of ${parentID}`;
  }
}
