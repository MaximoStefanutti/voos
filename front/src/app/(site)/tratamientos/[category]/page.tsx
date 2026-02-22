import CategoryContent from "@/app/components/ui/category/CategoryContent";
import { categoryContent } from "@/app/lib/services/categoryContent";
import { CategoryKey } from "@/app/lib/services/types";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: CategoryKey;
  }>;
};

export default async function CatagoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryContent[category];

  if (!data) notFound();

  return <CategoryContent data={data} category={category} />;
}
