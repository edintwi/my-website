"use-client";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LangSwitcher() {
  const [locale, setLocale] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setLocale(pathname);
  }, [pathname]);

  if (!locale) return null;

  return (
    <div className="items-center">
      {locale === "/pt" ? (
        <Link href={"./en"}>🇧🇷</Link>
      ) : (
        <Link href={"./pt"}>🇺🇸</Link>
      )}
    </div>
  );
}
