type ServiceProps = {
  title: string;
  description: string;
};

export default function Service({ title, description }: ServiceProps) {
  return (
    <div className="w-full rounded-lg p-4 my-10 custom-shadow relative">
      <h1 className="text-[15px] font-medium rounded-md py-2 px-2 inline absolute top-[-20px] custom-shadow">
        {title}
      </h1>
      <p className=" pt-3 whitespace-pre-wrap text-[15px] leading-6">
        {description}
      </p>
    </div>
  );
}

export type { ServiceProps };
