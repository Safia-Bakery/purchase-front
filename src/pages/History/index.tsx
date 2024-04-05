import Container from "src/components/Container";
import safiaLogo from "/icons/safia-logo-white.svg";
import { useTranslation } from "react-i18next";
import EmptyList from "src/components/EmptyList";
import useMe from "src/hooks/useMe";
import useOrders from "src/hooks/useOrders";
import dayjs from "dayjs";
import { dateTimeFormat } from "src/utils/helper";
import Loading from "src/components/Loader";
import { useAppDispatch, useAppSelector } from "src/store/rootConfig";
import { logoutHandler, tokenSelector } from "src/store/reducers/auth";
import { Link } from "react-router-dom";
import Pagination from "src/components/Pagination";
import useQueryString from "src/hooks/useQueryString";
import { OrderStatus } from "src/utils/types";
import { useEffect } from "react";

const History = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data: me, isLoading: meLoading, isError } = useMe({});
  const token = useAppSelector(tokenSelector);
  const page = Number(useQueryString("page"));

  const { data: orders, isLoading: ordersLoading } = useOrders({
    ...(!!page && { page }),
    enabled: !!me?.id,
    user_id: me?.id,
  });

  const handleLogout = () => dispatch(logoutHandler());

  useEffect(() => {
    if (isError) handleLogout();
  }, [isError]);

  if (meLoading || ordersLoading) return <Loading />;

  return (
    <Container className="flex flex-[8] lg:gap-24 gap-10 lg:flex-row flex-col h-min">
      <div className="flex flex-[2] flex-col gap-6">
        <div className="px-10 py-8 bg-primary rounded-xl flex flex-col items-center">
          <img src={safiaLogo} alt={"safia-logo"} />

          {!token ? (
            <Link
              className="text-xl text-center mt-6 text-white"
              to={"/auth/login"}
            >
              {t("login")}
            </Link>
          ) : (
            <h3 className="text-xl text-center mt-6 text-white">{me?.name}</h3>
          )}
        </div>

        {!!token && (
          <div className="shadow-blockShadow rounded-xl lg:p-6 p-3 flex items-center flex-col">
            <h3 className="font-bold text-lg">{t("private_info")}</h3>

            <span className="text-primary lg:mt-4 mt-0 mb-3">
              {t("phone")}:
            </span>
            <Link to={`tel:${me?.phone}`}>{me?.phone}</Link>
            <span className="text-primary lg:mt-4 mt-0 mb-3">
              {t("date_registering")}:
            </span>
            <span>{dayjs(me?.created_at).format(dateTimeFormat)}</span>

            <span className="text-primary lg:mt-4 mt-0 mb-3">e-mail</span>
            <Link to={`mailto:${me?.email}`}>{me?.email}</Link>

            <button onClick={handleLogout} className="lg:mt-8 mt-5">
              {t("leave")}
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-[6] flex-col">
        <h1 className="lg:text-3xl text-xl uppercase">{t("order_history")}</h1>

        {!!orders?.items?.length ? (
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
                  {orders?.items.map((order, idx) => (
                    <tr key={idx}>
                      <th>{order.id}</th>
                      <td className="text-center">
                        {dayjs(order.created_at).format(dateTimeFormat)}
                      </td>
                      <td className="text-center text-[#00000078]">
                        {t("open")}
                      </td>
                      <td className="text-center">
                        {t(OrderStatus[order.status])}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="my-6 lg:hidden visible">
              {orders.items.map((order) => (
                <div
                  className="flex flex-col border-b border-[#F1F1F1] first:border-t mb-3"
                  key={order.id}
                >
                  <div className="flex justify-between lg:p-2 p-1">
                    <span className="font-bold">№</span>
                    <span className="font-bold">{order.id}</span>
                  </div>
                  <div className="flex justify-between lg:p-2 p-1">
                    <span className="font-bold">{t("doc")}</span>
                    <span>
                      {dayjs(order.created_at).format(dateTimeFormat)}
                    </span>
                  </div>

                  <div className="flex justify-between lg:p-2 p-1">
                    <span className="font-bold">{t("date")}</span>
                    <span>{t("open")}</span>
                  </div>

                  <div className="flex justify-between lg:p-2 p-1">
                    <span className="font-bold">{t("status")}</span>
                    <span>{t("new")}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:my-4 my-2">
              <Pagination totalPages={orders.pages} />
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
