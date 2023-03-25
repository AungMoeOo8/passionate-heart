import ServiceComponent from "../commons/ServiceComponent";

type ServicesProps = {
  image: string;
  title: string;
  description: string;
};

const services: ServicesProps[] = [
  {
    image: "/images/photo1.JPG",
    title: "Trauma Counselling",
    description: `Trauma counseling is designed to help individuals cope with and recover from the effects of traumatic experiences. Trauma can refer to a wide range of events, including physical, emotional, or sexual abuse, natural disasters, accidents, or other life-threatening situations.`,
  },
  {
    image: "/images/photo1.JPG",
    title: "Eye Movement Desensitization and Reprocessing (EMDR Therapy)",
    description: `EMDR therapy is a form of psychotherapy that aims to help individuals recover from the effects of traumatic experiences. It is used to treat a wide range of mental health conditions, including post-traumatic stress disorder (PTSD), anxiety, depression, and phobias.`,
  },
  {
    image: "/images/photo1.JPG",
    title: "Psychiatrist Consultation",
    description: `Psychiatrist consultations are often recommended for individuals experiencing significant mental health symptoms, such as depression, anxiety, bipolar disorder, or schizophrenia. During the consultation, the psychiatrist will typically conduct a comprehensive psychiatric evaluation, which may include a review of the person's medical history, mental health history, and current symptoms. They may also conduct a physical examination and order additional tests or screenings if needed.`,
  },
];

export default function ServiceSection() {
  return (
    <section className="">
      <div id="services" className="container-sm mt-[0] z-50 py-[100px]">
        <div className="flex flex-col gap-[50px]">
          {services.map((service, index) => (
            <ServiceComponent
              key={index}
              reverse={index % 2 != 0 ? true : false}
              image={service.image}
              text={
                <div className="p-5 sm:p-6">
                  <span className="inline-block mb-[10px] text-2xl font-semibold">
                    {service.title}
                  </span>
                  <p className="text-[14px] opacity-70">
                    {service.description}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
