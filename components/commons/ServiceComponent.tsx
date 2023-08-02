import Image from "next/image";
import { ServiceComponentProps } from "../../types";

const ServiceComponent: React.FC<ServiceComponentProps> = ({
  image,
  text,
  reverse,
}) => {
  return (
    <div
      data-reverse={reverse ? true : false}
      className={`flex flex-col sm:data-[reverse=true]:flex-row-reverse sm:data-[reverse=false]:flex-row justify-center items-center gap-y-5`}
    >
      <div
        data-reverse={reverse ? true : false}
        className="basis-6/12 flex justify-center"
      >
        <div>
          <Image
            alt="Services"
            width={450}
            height={250}
            src={image}
            className="rounded-lg outline outline-1 outline-offset-2 outline-blue-100"
            style={{ height: "auto" }}
          />
        </div>
      </div>
      <div className="basis-6/12 rounded-lg">{text}</div>
    </div>
  );
};

export default ServiceComponent;
