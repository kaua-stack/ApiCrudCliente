import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerServices } from "../services/DeleteCustomersService";

class DeleteCustomerController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.query as { id: String };

    const customerService = new DeleteCustomerServices();

    const customer = await customerService.execute({ id });

    replay.send(customer);
  }
}

export { DeleteCustomerController };
