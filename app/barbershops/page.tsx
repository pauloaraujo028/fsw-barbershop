import { redirect } from "next/navigation";
import BarbershopItem from "../(home)/_components/barbershop-item";
import Search from "../(home)/_components/search";
import { db } from "../_lib/prisma";

interface BarbershopPageProps {
  searchParams: {
    title?: string;
    category?: string;
  };
}

const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  if (!searchParams.title && !searchParams.category) {
    return redirect("/");
  }

  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams.category
          ? {
              services: {
                some: {
                  categories: {
                    some: {
                      name: {
                        contains: searchParams.category,
                        mode: "insensitive",
                      },
                    },
                  },
                },
              },
            }
          : {},
      ],
    },
  });

  return (
    <div className="px-5 py-6 flex flex-col gap-6">
      <Search
        defaultValues={{
          title: searchParams.title ?? "",
        }}
      />

      <h1 className="text-gray-400 text-xs font-bold uppercase">
        Resultados para &quot;
        {searchParams?.title || searchParams?.category}
        &quot;
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {barbershops.map((barbershop) => (
          <div key={barbershop.id} className="w-full">
            <BarbershopItem barbershop={barbershop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarbershopPage;
