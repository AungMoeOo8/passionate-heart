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
    >
      <div
        data-reverse={reverse ? true : false}
        className="basis-6/12 flex justify-start data-[reverse=true]:justify-end  relative"
      >
        {/* <div className="relative max-w-[450px] w-[450px] h-[300px] overflow-hidden">
          <Image
            alt="services"
            // width="450px"
            // height="300px"
            layout="fill"
            objectFit="cover"
            src={image}
            className="rounded-lg"
            priority
          />
        </div> */}

        <div className="max-w-[450px] h-[300px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt="services"
            className="w-auto h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="basis-6/12 rounded-lg">{text}</div>
    </div>
  );
};

export default ServiceComponent;
