import api from "@/services/instance/api";
import type { GithubUser } from "./interfaces/interfaces";

export const getUser = async (username: string): Promise<GithubUser> => {
    const res = await api.get<GithubUser>(`/users/${username}`);
    return res.data;
};
