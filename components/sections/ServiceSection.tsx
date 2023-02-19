import ServiceComponent from "../commons/ServiceComponent";

const services = [
  { image: "/images/photo1.JPG", title: "Meet in person" },
  { image: "/images/photo1.JPG", title: "Call via phone" },
  { image: "/images/photo1.JPG", title: "Meet in person" },
];

export default function ServiceSection() {
  return (
    <div className="bg-white">
      <div id="services" className="container-sm mt-[0] z-50 py-[100px]">
        <div className="flex flex-col gap-[50px]">
          {services.map((service, index) => (
            <ServiceComponent
              key={index}
              reverse={index % 2 != 0 ? true : false}
              image={service.image}
              text={
                <div className="p-5 sm:p-6">
                  <span className="inline-block mb-[10px] text-[20px] font-medium">
                    {service.title}
                  </span>
                  <p className="text-[14px] opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum quae, blanditiis facilis fugiat maiores reiciendis
                    saepe voluptatem numquam laboriosam, rerum quos ex quasi est
                    aut similique ea sed? Labore, facere!
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
