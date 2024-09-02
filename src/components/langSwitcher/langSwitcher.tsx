import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export default function LangSwitcher() {
  const locale = usePathname();

  return (
    <div>
      {locale === "/pt" ? (
        <Link href={"./en"}>🇧🇷</Link>
      ) : (
        <Link href={"./pt"}>🇺🇸</Link>
      )}
    </div>
  );
}
