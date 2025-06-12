// Importa os tipos de requisição e resposta do Fastify
import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerServices } from "../services/createCustomerService";

class CreateCustomerController {
  // Método que lida com a requisição POST /customer
  async handle(request: FastifyRequest, reply: FastifyReply) {
    // Extrai os dados do corpo da requisição e tipa como objeto com name e email
    const { name, email } = request.body as { name: string; email: string };

    // Instancia o serviço que contém a lógica de criação
    const CustomerService = new CreateCustomerServices();

    // Executa o serviço passando os dados e aguarda o resultado
    const customer = await CustomerService.execute({ name, email });

    // Retorna o cliente criado como resposta
    reply.send(customer);
  }
}

export { CreateCustomerController };
