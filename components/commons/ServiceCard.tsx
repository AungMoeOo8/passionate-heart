import { ServiceProps } from "../../types";
import { cn } from "../../util";

export default function ServiceCard({
  title,
  description,
  fees,
  ending,
  className,
  ...props
}: ServiceProps & React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full rounded-lg custom-shadow relative bg-cyan-800",
        className
      )}
      {...props}
    >
      <h1 className="text-sm font-normal rounded-lg py-2 px-4 inline absolute top-[-20px] left-[16px] bg-cyan-800 text-white">
        {title}
      </h1>
      <div className="flex flex-col md:flex-row gap-x-3">
        <div className="flex-[65%] px-4 py-8 bg-white rounded-[18px]">
          <p className=" whitespace-pre-wrap text-sm sm:text-[15px] leading-6">
            {description}
          </p>
          <p className="text-sm leading-6 mt-8">{ending}</p>
        </div>

        <div className="flex-[35%] text-white px-4 py-8">
          {fees.map((fee, index) => (
            <p key={index} className="leading-6 even:py-2">
              <span className="text-sm font-semibold">{fee.type}</span> -{" "}
              <span className="text-sm">
                {Intl.NumberFormat().format(fee.amount)} MMK
              </span>
              {fee.description && (
                <span className="text-sm block font-light py-1">
                  {fee.description}
                </span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export type { ServiceProps };
