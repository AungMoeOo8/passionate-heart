import { meeting, phoneCall } from "../../assets";
import ServiceComponent from "../commons/ServiceComponent";

const services = [
  { image: "/images/photo1.JPG", title: "Meet in person" },
  { image: phoneCall, title: "Call via phone" },
  { image: meeting, title: "Meet in person" },
];

export default function ServiceSection() {
  return (
    <div id="services" className="container-sm mt-[0] z-50 py-[100px]">
      <div className="flex flex-col gap-[50px]">
        {services.map((service, index) => (
          <ServiceComponent
            key={index}
            reverse={index % 2 != 0 ? true : false}
            image={service.image}
            text={
              <div>
                <span className="inline-block mb-[10px] text-[20px]">
                  {service.title}
                </span>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  quae, blanditiis facilis fugiat maiores reiciendis saepe
                  voluptatem numquam laboriosam, rerum quos ex quasi est aut
                  similique ea sed? Labore, facere!
                </p>
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}
