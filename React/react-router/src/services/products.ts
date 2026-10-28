import { productApi } from "../constants/api";

export const getProducts = async (limit: number, skip: number) => {
    try {
        const response = await fetch(`${productApi}?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        return { ok: true, data };
    } catch (err) {
        return { ok: false, message: "Unable to fetch products" };
    }
}

export const getSingleProduct = async (id: number) => {
    try {
        const response = await fetch(`${productApi}/${id}`);
        const data = await response.json();
        return { ok: true, data };
    } catch (err) {
        return { ok: false, message: "Unable to fetch products" };
    }
}