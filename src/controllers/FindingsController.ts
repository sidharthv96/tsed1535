import { Controller, Get, UseAuth } from "@tsed/common";
import { UserAuthMiddleware } from "src/middlewares/UserCheckMiddleware";
import { AttachmentController } from "./AttachmentController";

@Controller("/findings")
// Attachment paths will not appear if uncommented
// @UseAuth(UserAuthMiddleware)
export abstract class FindingsController extends AttachmentController {
  @Get("/")
  get() {
    return "hello Finding";
  }
}

/*
Working paths without auth
http://localhost:8083/rest/findings/
http://localhost:8083/rest/findings/sts/attachments


Working paths with auth
http://localhost:8083/rest/findings/?user=admin
*/
