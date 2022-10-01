import { useMediaQuery } from "@mantine/hooks";

export default function useResponsive() {
  const tablet = useMediaQuery("(min-width: 576px)", true, {
    getInitialValueInEffect: false,
  });
  const laptop = useMediaQuery("(min-width: 768px)", true, {
    getInitialValueInEffect: false,
  });
  const desktop = useMediaQuery("(min-width: 1200px)", true, {
    getInitialValueInEffect: false,
  });

  return { tablet, laptop, desktop };
}
