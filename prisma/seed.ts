const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
      "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
      "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
      "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
      "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
      "https://utfs.io/f/2f9278ba-3975-4026-af46-64af78864494-16u.png",
      "https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png",
      "https://utfs.io/f/60f24f5c-9ed3-40ba-8c92-0cd1dcd043f9-16w.png",
      "https://utfs.io/f/f64f1bd4-59ce-4ee3-972d-2399937eeafc-16x.png",
      "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
      "https://utfs.io/f/3bcf33fc-988a-462b-8b98-b811ee2bbd71-17k.png",
      "https://utfs.io/f/5788be0e-2307-4bb4-b603-d9dd237950a2-17l.png",
      "https://utfs.io/f/6b0888f8-b69f-4be7-a13b-52d1c0c9cab2-17m.png",
      "https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png",
      "https://utfs.io/f/ef45effa-415e-416d-8c4a-3221923cd10f-17n.png",
      "https://utfs.io/f/a55f0f39-31a0-4819-8796-538d68cc2a0f-17o.png",
      "https://utfs.io/f/5c89f046-80cd-4443-89df-211de62b7c2a-17p.png",
      "https://utfs.io/f/23d9c4f7-8bdb-40e1-99a5-f42271b7404a-17q.png",
      "https://utfs.io/f/9f0847c2-d0b8-4738-a673-34ac2b9506ec-17r.png",
      "https://utfs.io/f/07842cfb-7b30-4fdc-accc-719618dfa1f2-17s.png",
      "https://utfs.io/f/0522fdaf-0357-4213-8f52-1d83c3dcb6cd-18e.png",
    ];

    // Nomes criativos para as barbearias
    const creativeNames = [
      "Barbearia Vintage",
      "Corte & Estilo",
      "Barba & Navalha",
      "The Dapper Den",
      "Cabelo & Cia.",
      "Machado & Tesoura",
      "Barbearia Elegance",
      "Aparência Impecável",
      "Estilo Urbano",
      "Estilo Clássico",
    ];

    // Endereços fictícios para as barbearias
    const addresses = [
      "Rua da Barbearia, 123",
      "Avenida dos Cortes, 456",
      "Praça da Barba, 789",
      "Travessa da Navalha, 101",
      "Alameda dos Estilos, 202",
      "Estrada do Machado, 303",
      "Avenida Elegante, 404",
      "Praça da Aparência, 505",
      "Rua Urbana, 606",
      "Avenida Clássica, 707",
    ];

    const descriptions = [
      "Barbearia aconchegante com ambiente vintage.",
      "Corte de cabelo e barba com estilo e elegância.",
      "O melhor lugar para cuidar da sua barba.",
      "Um ambiente descontraído para homens modernos.",
      "Barbearia tradicional com profissionais experientes.",
      "Experimente o luxo de um corte personalizado.",
      "Especialistas em cuidados masculinos desde 1999.",
      "Barbearia premium com serviço de primeira classe.",
      "Atendimento exclusivo para o homem contemporâneo.",
      "Sinta-se revigorado com nossos serviços de qualidade.",
    ];

    const phoneNumbers = [
      "+11 9 1234-5678",
      "+11 9 2345-6789",
      "+11 9 3456-7890",
      "+11 9 4567-8901",
      "+11 9 5678-9012",
      "+11 9 6789-0123",
      "+11 9 7890-1234",
      "+11 9 8901-2345",
      "+11 9 9012-3456",
      "+11 9 0123-4567",
    ];

    const schedules = [
      { day: "Segunda-Feira", startTime: "09:00", endTime: "18:00" },
      { day: "Terça-Feira", startTime: "09:00", endTime: "18:00" },
      { day: "Quarta-Feira", startTime: "09:00", endTime: "18:00" },
      { day: "Quinta-Feira", startTime: "09:00", endTime: "18:00" },
      { day: "Sexta-Feira", startTime: "09:00", endTime: "18:00" },
      { day: "Sábado", startTime: "09:00", endTime: "15:00" },
      { day: "Domingo", startTime: "Fechado", endTime: "Fechado" },
    ];

    const services = [
      {
        name: "Corte de Cabelo",
        description: "Estilo personalizado com as últimas tendências.",
        price: 60.0,
        imageUrl:
          "https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png",
      },
      {
        name: "Barba",
        description: "Modelagem completa para destacar sua masculinidade.",
        price: 40.0,
        imageUrl:
          "https://utfs.io/f/e6bdffb6-24a9-455b-aba3-903c2c2b5bde-1jo6tu.png",
      },
      {
        name: "Pézinho",
        description: "Acabamento perfeito para um visual renovado.",
        price: 35.0,
        imageUrl:
          "https://utfs.io/f/8a457cda-f768-411d-a737-cdb23ca6b9b5-b3pegf.png",
      },
      {
        name: "Sobrancelha",
        description: "Expressão acentuada com modelagem precisa.",
        price: 20.0,
        imageUrl:
          "https://utfs.io/f/2118f76e-89e4-43e6-87c9-8f157500c333-b0ps0b.png",
      },
      {
        name: "Massagem",
        description: "Relaxe com uma massagem revigorante.",
        price: 50.0,
        imageUrl:
          "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
      {
        name: "Hidratação",
        description: "Hidratação profunda para cabelo e barba.",
        price: 25.0,
        imageUrl:
          "https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png",
      },
    ];

    const categories = [
      {
        name: "Corte",
        imageUrl:
          "https://utfs.io/f/16818170-8369-4159-8d67-13d2116cb016-mmip3w.png",
      },
      {
        name: "Barba",
        imageUrl:
          "https://utfs.io/f/8fbb00c8-5a4d-4acd-be79-67d6ff5760d7-1jo6tu.png",
      },
      {
        name: "Pézinho",
        imageUrl:
          "https://utfs.io/f/ebd7268b-9e4e-4eae-83f5-3f160f5fbdb0-b3pegf.png",
      },
      {
        name: "Sobrancelha",
        imageUrl:
          "https://utfs.io/f/ab9e5ac6-a112-4459-b611-3ee478ffbb36-r7o3kl.png",
      },
      {
        name: "Massagem",
        imageUrl:
          "https://utfs.io/f/81fa79bc-abac-4d43-b144-945cb4a2a863-4oen2a.png",
      },
      {
        name: "Hidratação",
        imageUrl:
          "https://utfs.io/f/60a60923-c37d-4e4e-b967-f9760ad46478-9uuelq.png",
      },
    ];

    // Criar categorias
    const createdCategories = [];
    for (const category of categories) {
      const createdCategory = await prisma.category.create({
        data: category,
      });
      createdCategories.push(createdCategory);
    }

    // Criar 10 barbearias com nomes e endereços fictícios
    const barbershops = [];
    for (let i = 0; i < 10; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const description = descriptions[i];
      const numbers = phoneNumbers[i];
      const imageUrl = images[i];

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          description,
          phone: numbers,
          imageUrl: imageUrl,
          schedules: {
            create: schedules.map((schedule) => ({ ...schedule })),
          },
        },
      });

      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
            categories: {
              connect: createdCategories
                .filter((category) => category.name === service.name)
                .map((category) => ({ id: category.id })),
            },
          },
        });
      }

      barbershops.push(barbershop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error);
  }
}

seedDatabase();
