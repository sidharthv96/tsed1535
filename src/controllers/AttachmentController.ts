import { Get, PathParams } from "@tsed/common";

export abstract class AttachmentController {
  @Get("/:parentID/attachments")
  getAll(@PathParams("parentID") parentID: string) {
    return `All attachments of ${parentID}`;
  }
}
