import { Controller, Get, UseAuth } from "@tsed/common";
import { UserAuthMiddleware } from "src/middlewares/UserCheckMiddleware";
import { AttachmentController } from "./AttachmentController";

@Controller({
  path: "/incidents",
  middlewares: {
    use: [UserAuthMiddleware],
  },
})
export abstract class IncidentsController extends AttachmentController {
  permission = "INCIDENT_UPDATE";
  @Get("/")
  get() {
    return "hello Incidents";
  }
}

/*
Working paths without auth
http://localhost:8083/rest/findings/
http://localhost:8083/rest/findings/sts/attachments


Working paths with auth
http://localhost:8083/rest/findings/?user=admin
*/
