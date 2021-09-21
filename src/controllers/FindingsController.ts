import { Controller, Get, UseAuth } from "@tsed/common";
import { UserAuthMiddleware } from "src/middlewares/UserCheckMiddleware";
import { AttachmentController } from "./AttachmentController";

@Controller({
  path: "/findings",
  middlewares: {
    use: [UserAuthMiddleware],
  },
})
export abstract class FindingsController extends AttachmentController {
  permission = "FINDINGS_UPDATE";
  @Get("/")
  get() {
    return "hello Finding";
  }
}

/*
Working paths 
http://localhost:8083/rest/findings/sts/attachments?user=admin&permission=FINDINGS_UPDATE
http://localhost:8083/rest/incidents/sts/attachments?user=admin&permission=INCIDENT_UPDATE

Working paths - 401
http://localhost:8083/rest/findings/sts/attachments?user=admin
http://localhost:8083/rest/incidents/sts/attachments?user=admin&permission=INCIDENT_READ
*/
