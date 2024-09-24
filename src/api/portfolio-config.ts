import { ConfigType, ResponseApi } from "@/lib/types";
import { axiosClient } from "./config-axios";

export const getConfigs = async () => {
  const response = await axiosClient.get<ResponseApi<ConfigType[]>>(
    "/portfolio-configs"
  );
  return response.data;
};
