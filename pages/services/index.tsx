import Service, { ServiceProps } from "../../components/commons/Service";
import { motion } from "framer-motion";
import Head from "next/head";

import servicesData from "../../servicesData";

export default function Services() {
  return (
    <>
      <Head>
        <title>Passionate Heart | Services</title>
      </Head>
      <div className="container-sm">
        <p className="text-3xl font-bold mt-8 mb-14">We offer these services</p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {servicesData.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </>
  );
}