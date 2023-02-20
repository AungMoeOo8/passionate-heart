import { motion } from "framer-motion";
import { ServiceProps } from "../../types";

export default function Service({
  title,
  description,
  fees,
  ending,
}: ServiceProps) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      className=" py-1 my-14"
    >
      <div className="w-full rounded-lg p-4 custom-shadow relative">
        <h1 className="text-sm font-normal rounded-lg py-2 px-2 inline absolute top-[-20px] bg-cyan-800 text-white">
          {title}
        </h1>
        <p className=" pt-3 whitespace-pre-wrap text-sm sm:text-[15px] leading-6 bg-white">
          {description}
        </p>
        {fees.map((fee, index) => (
          <p key={index}>
            <span className="text-sm font-semibold">{fee.type}</span> -{" "}
            <span className="text-sm">{fee.amount}</span>
          </p>
        ))}
        <p className="text-sm mt-4">{ending}</p>
      </div>
    </motion.div>
  );
}

export type { ServiceProps };
