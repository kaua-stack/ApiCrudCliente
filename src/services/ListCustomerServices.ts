import prismaClient from "../prisma";

class ListaCustomersServices {
  async execute() {
    const customers = await prismaClient.customer.findMany();
    return customers;
  }
}

export { ListaCustomersServices };
