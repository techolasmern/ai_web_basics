import { api } from "../constants/api";
import type { DummyJsonResponse, Product } from "../types/dymmyjson";

export const getProducts = async (limit: number, skip: number) => {
    try {
        const response = await fetch(`${api}/products?limit=${limit}&skip=${skip}`);
        const data = await response.json() as DummyJsonResponse;
        return { ok: true, data };
    } catch (error) {
        return { ok: false, message: "Unable to fetch products." };
    }
}
export const getProduct = async (id: number) => {
    try {
        const response = await fetch(`${api}/products/${id}`);
        const data = await response.json() as Product;
        return { ok: true, data };
    } catch (error) {
        return { ok: false, message: "Unable to fetch products." };
    }
}