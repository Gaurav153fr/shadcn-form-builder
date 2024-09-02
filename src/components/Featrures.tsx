/* eslint-disable react/no-unescaped-entities */
// components/GoodSection.js
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function GoodSection() {
  const features = [
    {
      title: "Effortless Form Building",
      description:
        "Design your forms with ease using our intuitive interface. No coding required.",
    },
    {
      title: "Instant Code Generation",
      description:
        "Copy the generated code directly into your project with full compatibility.",
    },
    {
      title: "ShadCN Integration",
      description:
        "Leverage the power of ShadCN components for responsive, accessible forms.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white">
            {/* // eslint-disable-next-line react/no-unescaped-entities */}
            Making Shadcn form is easy 
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Make form without code and just copy the generated code.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <dt>
                  <CheckCircleIcon className="absolute h-6 w-6 text-green-500 dark:text-green-300" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <span className="text-sm flex justify-center">
      <Link href="/form" className={buttonVariants({ variant: "default" })} >
       Create your own {"->"}
      </Link></span>
        </div>
      </div>
    </section>
  );
}
