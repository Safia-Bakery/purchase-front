import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/helper.ts";
import "./index.scss";
import { Provider } from "react-redux";
import { persistor, store } from "./store/rootConfig.ts";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loader/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
