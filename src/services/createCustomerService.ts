import { error } from "console";
import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerServices {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !email) {
      throw new Error("Preencha todos os campos");
    }

    // Cria o cliente no banco de dados usando Prisma
    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    // Retorna o cliente criado
    return customer;
  }
}

export { CreateCustomerServices };
