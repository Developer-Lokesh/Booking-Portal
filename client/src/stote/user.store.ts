import { create } from "zustand";
import type { IUser } from "../types/types";
import { persist } from "zustand/middleware";

interface IUserStore {
    loading: boolean;
    setLoading: (data: boolean) => void;

    user: IUser | null;
    setUser: (data: IUser | null) => void;
}

const useUserStore = create<IUserStore>()(
    persist(
        (set) => ({
            loading : true,
            setLoading : (data) => set({loading : data}),

            user : null,
            setUser : (data) => set({user : data}),
        }),
        {
            name : "user-store"
        },
    )
);
export default useUserStore;