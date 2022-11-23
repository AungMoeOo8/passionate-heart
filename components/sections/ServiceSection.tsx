import { Box, Text } from "@mantine/core";
import { meeting, phoneCall } from "../../assets";
import { useResponsive } from "../../hooks";
import ServiceComponent from "../commons/ServiceComponent";

const services = [
  { image: meeting, title: "Meet in person" },
  { image: phoneCall, title: "Call via phone" },
  { image: meeting, title: "Meet in person" },
];

export default function ServiceSection() {
  const { laptop } = useResponsive();

  return (
    // <Box id="services" sx={{ padding: "100px 0" }}>
    //   <Box sx={{ display: "flex", justifyContent: "center" }}>
    //     <Text
    //       align="center"
    //       size={35}
    //       weight={800}
    //       variant={"gradient"}
    //       gradient={{ from: "#346f99", to: "#00e7ff", deg: 45 }}
    //       sx={{ display: "inline" }}
    //     >
    //       Services
    //     </Text>
    //   </Box>

    //   <Box
    //     sx={{
    //       marginTop: "50px",
    //       display: "flex",
    //       flexDirection: laptop ? "row" : "column",
    //       gap: "20px",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     {services.map(({ image, title }, index) => (
    //       <Box
    //         key={index}
    //         sx={{
    //           display: "flex",
    //           flexBasis: "100%",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           padding: "20px",
    //           // borderRadius: "10px",
    //           // backdropFilter: "blur(10px)",
    //           // boxShadow: "0 0 5px 0px #4bc9b3",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             width: "200px",
    //             height: "150px",
    //             marginBottom: "10px",
    //             position: "relative",
    //           }}
    //         >
    //           <Image alt="Service Photo" src={image} layout={"fill"} />
    //         </Box>
    //         <Text weight={700} size={20}>
    //           {title}
    //         </Text>
    //       </Box>
    //     ))}
    //   </Box>
    // </Box>

    <Box
      id="services"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      {services.map((service, index) => (
        <ServiceComponent
          key={index}
          reverse={index % 2 != 0 ? true : false}
          image={service.image}
          text={
            <Box>
              <Text size={"xl"} weight={"bold"} sx={{ marginBottom: "10px" }}>
                {service.title}
              </Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quae, blanditiis facilis fugiat maiores reiciendis saepe
                voluptatem numquam laboriosam, rerum quos ex quasi est aut
                similique ea sed? Labore, facere!
              </Text>
            </Box>
          }
        />
      ))}
    </Box>
  );
}
