import Link from "next/link";
import React, { ReactNode } from "react";
import { i18n } from "root/i18n.config";

type Props = {
  href: string;
  lang?: string;
  children: ReactNode;
  [key: string]: any;
};

const CustomLink = ({ href, lang, ...props }: Props) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang + href}`;
  return <Link href={path} {...props} />;
};

export default CustomLink;
