import Image from "next/image";
import { Box } from "@mantine/core";
import { useResponsive } from "../../hooks";

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
  const { tablet } = useResponsive();
  const direction = reverse ? "row-reverse" : "row";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: tablet ? direction : "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flexBasis: "50%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image width="300px" height="400px" src={image} />
      </Box>
      <Box sx={{ flexBasis: "50%", padding: "0px 30px" }}>{text}</Box>
    </Box>
  );
};

export default ServiceComponent;
