import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export default function LangSwitcher() {
  const locale = usePathname();

  return (
    <div>
      {locale === "/pt" ? (
        <Link href={"./en"}>pt</Link>
      ) : (
        <Link href={"./pt"}>br</Link>
      )}
    </div>
  );
}
