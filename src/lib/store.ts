import { writable } from "svelte/store";

const persist_storage = (key: string, initValue: any) => {
    const storedValueStr = localStorage.getItem(key);
    const store = writable(
        storedValueStr != null ? JSON.parse(storedValueStr) : initValue
    );
    store.subscribe((val) => {
        localStorage.setItem(key, JSON.stringify(val));
    });
    return store;
};

export const access_token = persist_storage("access_token", "");
export const user_id = persist_storage("user_id", "");
export const is_login = persist_storage("is_login", false);