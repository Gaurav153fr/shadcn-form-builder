"use server";

import prisma from "@/app/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      slug: (formData.get("title") as string).replace(/\s+/g, "-"),
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/");
}
