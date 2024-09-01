import prisma from "@/app/lib/db";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.id,
    },
  });
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default Page;
