// import CustomLink from "../CustomLink";

// export default function LocaleSwitcher() {
//   const pathName = usePathname();

//   const redirectedPathName = (locale: string) => {
//     if (!pathName) return "/";

//     const pathnameIsMissingLocale = i18n.locales.every(
//       (locale) =>
//         !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
//     );

//     if (pathnameIsMissingLocale) {
//       if (locale === i18n.defaultLocale) return pathName;
//       return `/${locale}${pathName}`;
//     } else {
//       if (locale === i18n.defaultLocale) {
//         const segments = pathName.split("/");
//         const isHome = segments.length === 2;
//         if (isHome) return "/";

//         segments.splice(1, 1);
//         return segments.join("/");
//       }

//       const segments = pathName.split("/");
//       segments[1] = locale;
//       return segments.join("/");
//     }
//   };

//   return (
//     <ul className="flex gap-x-3">
//       {i18n.locales.map((locale) => {
//         return (
//           <li key={locale}>
//             <CustomLink
//               href={redirectedPathName(locale)}
//               className="rounded-md border bg-black px-3 py-2 text-white"
//             >
//               {locale}
//             </CustomLink>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

import React, { ChangeEvent } from "react";
import { changeLanguage, langSelector } from "src/store/reducers/language";
import { useAppDispatch, useAppSelector } from "src/store/rootConfig";
import { Language } from "src/utils/types";

const ChangeLang = () => {
  const lang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();

  const handleLang = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeLanguage(e.target.value as Language));

  return (
    <div className="flex md:gap-4 gap-2">
      <select onChange={handleLang} value={lang} className="!bg-transparent">
        {Object.keys(Language).map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ChangeLang;
