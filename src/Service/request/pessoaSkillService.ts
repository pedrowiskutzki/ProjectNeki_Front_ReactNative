import { AxiosResponse } from "axios";
import { api } from "../api/api";

interface DataPessoaSkill {
  id: number;
  user_id: number;
  skill_id: number;
  knowledge_level: number;
}

export interface PostPessoaSkill {
  pessoa: { id: number };
  skill: { id: number };
  knowledge_level: number;
}

interface LevelPessoaSkill {
  knowledge_level: number;
}

interface PessoaSkill {
  getAll(): Promise<AxiosResponse<DataPessoaSkill[]>>;
  get(id: number): Promise<AxiosResponse<DataPessoaSkill>>;
  create(data: PostPessoaSkill): Promise<AxiosResponse<PostPessoaSkill>>;
  update(
    id: number,
    data: LevelPessoaSkill
  ): Promise<AxiosResponse<DataPessoaSkill>>;
  remove(id: number): Promise<AxiosResponse<void>>;
}

const getAll = (): Promise<AxiosResponse<DataPessoaSkill[]>> => {
  return api.get("pessoa_skill");
};

const get = (id: number): Promise<AxiosResponse<DataPessoaSkill>> => {
  return api.get(`pessoa_skill/${id}`);
};

const create = (
  data: PostPessoaSkill
): Promise<AxiosResponse<PostPessoaSkill>> => {
  return api.post("pessoa_skill", data);
};

const update = (
  id: number,
  data: DataPessoaSkill
): Promise<AxiosResponse<DataPessoaSkill>> => {
  return api.put(`pessoa_skill/update_level/${id}`, data);
};

const remove = (id: number): Promise<AxiosResponse<void>> => {
  return api.delete(`pessoa_skill/${id}`);
};

const pessoaSkillService: PessoaSkill = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default pessoaSkillService;
