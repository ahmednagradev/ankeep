"use client";

import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { Loader2 } from "lucide-react";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (

        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={
                    <div className="flex h-screen w-full justify-center items-center bg-[#202124]">
                        <Loader2 size={28} color="lightblue" className="animate-spin" />
                    </div>
                }
            >
                {children}
            </PersistGate>
        </Provider>
    )
}

export default Providers;