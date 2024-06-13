import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-muted rounded-full">
      <div className="w-[30px] h-[30px] relative">
        <Image
          src={category.imageUrl}
          alt={category.name}
          width={30}
          height={30}
          layout="fixed"
          className="rounded-full"
        />
      </div>
      <span className="font-semibold text-sm overflow-hidden whitespace-nowrap">
        {category.name}
      </span>
    </div>
  );
};

export default CategoryItem;
