import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <section className="flex">
      <Button className="gap-2" variant="secondary" asChild>
        <Link href={`/barbershops?category=${category.name}`}>
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={16}
            height={16}
          />
          <span className="font-semibold text-sm">{category.name}</span>
        </Link>
      </Button>
    </section>
  );
};

export default CategoryItem;
