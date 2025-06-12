import { FastifyRequest, FastifyReply } from "fastify";
import { ListaCustomersServices } from "../services/ListCustomerServices";

class ListCustomerController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const listCustomerService = new ListaCustomersServices();

    const customer = await listCustomerService.execute();
    replay.send(customer);
  }
}

export { ListCustomerController };
