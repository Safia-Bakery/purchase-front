import { Helmet, HelmetProvider } from "react-helmet-async";
import logo from "/images/safia-logo.png";
interface Props {
  title?: string;
  description?: string;
  link?: string;
}

const DocumentTitle = ({
  title = "Закуп - Safia",
  description = "Сеть кондитерских Safia Cafe & Bakery ✓ Хотите порадовать себя и своих близких вкусняшками? Команда профессиональных кондитеров создаст произведение искусства для вашего праздника!",
  link,
}: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>

        <meta key="description" name="description" content={description} />

        {link && <link rel="canonical" href={link} />}
        <meta
          name="keywords"
          content="safia, purchase, sotish, sell, supplier, продать, поставщик, yetkazish"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={"https://purchase.safiabakery.uz" + logo}
        />
        <meta property="og:url" content={"https://purchase.safiabakery.uz"} />
        <meta property="og:type" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SafiaBakery" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={"https://purchase.safiabakery.uz/" + logo}
        />
        {/* <meta name="twitter:url" content={url} /> */}

        <link rel="icon" href={logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo} />
        <link rel="icon" type="image/png" sizes="32x32" href={logo} />
        <link rel="icon" type="image/png" sizes="16x16" href={logo} />
      </Helmet>
    </HelmetProvider>
  );
};
export default DocumentTitle;
