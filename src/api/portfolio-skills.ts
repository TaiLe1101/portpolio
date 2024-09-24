import { axiosClient } from "@/api/config-axios";
import { PortfolioSkillType, ResponseApi } from "@/lib/types";

export const getPortfolioSkills = async () => {
  const response = await axiosClient.get<ResponseApi<PortfolioSkillType[]>>(
    "/portfolio-skills"
  );
  return response.data;
};
