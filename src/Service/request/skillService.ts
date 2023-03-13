import { AxiosResponse } from "axios";
import { api } from "../api/api";

interface SkillData {
  id: number;
  user_id: number;
  skill_id: number;
  knowledge_level: number;
}

interface PessoaSkill {
  getAll(): Promise<AxiosResponse<SkillData[]>>;
}

const getAll = (): Promise<AxiosResponse<SkillData[]>> => {
  return api.get(`skill`);
};

const skillService = {
  getAll,
};
export default skillService;
