import CustomLink from "@/components/CustomLink";
import { Locale } from "root/i18n.config";

export default function Home({ lang }: { lang: Locale }) {
  console.log(lang, "lang");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello next</h1>
      <CustomLink lang={"ru"} href={"/about"}>
        About us
      </CustomLink>
    </main>
  );
}
