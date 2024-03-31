import Container from "src/components/Container";
import safiaLogo from "/icons/safia-logo-white.svg";
import { useTranslation } from "react-i18next";
import EmptyList from "src/components/EmptyList";

const History = () => {
  const { t } = useTranslation();
  return (
    <Container className="flex flex-[8] lg:gap-24 gap-10 lg:flex-row flex-col h-min">
      <div className="flex flex-[2] flex-col gap-6">
        <div className="px-10 py-8 bg-primary rounded-xl flex flex-col items-center">
          <img src={safiaLogo} alt={"safia-logo"} />

          <h3 className="text-xl text-center mt-6 text-white">
            Махмуд Салимов
          </h3>
        </div>

        <div className="shadow-blockShadow rounded-xl lg:p-6 p-3 flex items-center flex-col">
          <h3 className="font-bold text-lg">Личные данные</h3>

          <span className="text-primary lg:mt-4 mt-0 mb-3">
            Номер телефона:
          </span>
          <span>+99893 388 69 69</span>
          <span className="text-primary lg:mt-4 mt-0 mb-3">
            Дата регистрации:
          </span>
          <span>30.04.2022</span>

          <span className="text-primary lg:mt-4 mt-0 mb-3">e-mail</span>
          <span>makhmoodsalimov@safiabakery.uz</span>

          <span className="lg:mt-8 mt-5">{t("leave")}</span>
        </div>
      </div>

      <div className="flex flex-[6] flex-col ">
        <h1 className="lg:text-3xl text-xl uppercase">{t("order_history")}</h1>

        {true ? (
          <>
            <div className="mt-6 lg:w-[70%] lg:block hidden overflow-y-auto max-h-[50vh] h-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>№</th>
                    <th>{t("date")}</th>
                    <th>{t("doc")}</th>
                    <th>{t("status")}</th>
                  </tr>
                </thead>

                <tbody>
                  {[...Array(100)].map((_, idx) => (
                    <tr key={idx}>
                      <th>32312</th>
                      <td className="text-center">12.11.2024</td>
                      <td className="text-center text-[#00000078]">
                        {t("open")}
                      </td>
                      <td className="text-center">{t("new")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="my-6 lg:hidden visible">
              <div className="flex flex-col border-b border-[#F1F1F1] first:border-t">
                <div className="flex justify-between lg:p-2 p-1">
                  <span className="font-bold">№</span>
                  <span className="font-bold">32312</span>
                </div>
                <div className="flex justify-between lg:p-2 p-1">
                  <span className="font-bold">{t("doc")}</span>
                  <span>12.11.2024</span>
                </div>

                <div className="flex justify-between lg:p-2 p-1">
                  <span className="font-bold">{t("date")}</span>
                  <span>{t("open")}</span>
                </div>

                <div className="flex justify-between lg:p-2 p-1">
                  <span>{t("new")}</span>
                  <span className="font-bold">{t("status")}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          // empty list
          <EmptyList className="mt-6" />
        )}
      </div>
    </Container>
  );
};

export default History;
