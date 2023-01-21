import Image from "next/image";

type ServiceComponentProps = {
  image: string;
  text: React.ReactNode;
  reverse?: Boolean;
};

const ServiceComponent: React.FC<ServiceComponentProps> = ({
  image,
  text,
  reverse,
}) => {
  const direction = reverse ? "flex-row-reverse" : "flex-row";
  return (
    <div
      data-reverse={reverse ? true : false}
      className={`flex flex-col sm:data-[reverse=true]:flex-row-reverse sm:data-[reverse=false]:flex-row justify-center items-center gap-y-5`}
      // data-aos="fade-up"
      // data-aos-delay="100"
      // data-aos-duration="1000"
      // data-aos-offset="50"
    >
      <div className="basis-6/12 flex justify-center relative">
        <Image
          alt="services"
          width="450px"
          height="300px"
          src={image}
          className="rounded-lg"
          priority
        />
      </div>
      <div className="basis-6/12 rounded-lg">{text}</div>
    </div>
  );
};

export default ServiceComponent;
