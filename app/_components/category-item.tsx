import { Category } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <section className="flex">
      <Button className="gap-2" variant="secondary">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={16}
          height={16}
        />
        <span className="font-semibold text-sm">{category.name}</span>
      </Button>
    </section>
  );
};

export default CategoryItem;
