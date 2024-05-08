"use client";
import { Provider } from "react-redux";
import { store } from "@/app/app/store";
const ProviderClient = ({
   children,
 }: {
   children: React.ReactNode
 }) => {
   return (
      <Provider store={store}>
         {children}
      </Provider>
   )
}

export default ProviderClient