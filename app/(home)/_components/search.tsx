"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  title: z
    .string({
      required_error: "Campo obrigatório.",
    })
    .trim()
    .min(1, "Campo obrigatório."),
});

interface SearchProps {
  defaultValues?: z.infer<typeof formSchema>;
}

const Search = ({ defaultValues }: SearchProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push(`/barbershops?title=${data.title}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Form {...form}>
        <form
          className="flex w-full gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Busque por uma barbearia..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="default" type="submit">
            <SearchIcon size={20} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Search;
