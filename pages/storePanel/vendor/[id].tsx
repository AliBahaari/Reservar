import { useRouter } from "next/router";
import Vendor from "../../../containters/VendorContainers/Vendor";

function VendorPage() {
  const router = useRouter();
  const vendorId = router.query?.id;

  return <Vendor vendorId={vendorId! as string} />;
}

export default VendorPage;
