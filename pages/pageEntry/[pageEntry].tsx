import { useRouter } from "next/router";
import { ReactNode } from "react";
import LogIn from "../../containters/AuthContainers/LogIn";
import Register from "../../containters/AuthContainers/Register";

enum PageEntryEnums {
  LogIn = "logIn",
  Register = "register",
}

function PageEntry() {
  const router = useRouter();
  const pageEntry = router.query?.pageEntry;

  const pageRenderer: Record<PageEntryEnums, ReactNode> = {
    [PageEntryEnums.LogIn]: <LogIn />,
    [PageEntryEnums.Register]: <Register />,
  };

  return pageRenderer[pageEntry! as keyof typeof pageRenderer];
}

export default PageEntry;
