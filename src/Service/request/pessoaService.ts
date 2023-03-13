import { api } from "../api/api";

const get = (id) => {
  return api.get(`pessoa/${id}`);
};

export interface CreateParams {
  login: string;
  password: string;
}

const create = (data: CreateParams): Promise<any> => {
  return api.post("pessoa", data);
};

const createLogin = (data) => {
  return api.post("pessoa/login", data);
};

const pessoaService = {
  get,
  create,
  createLogin,
};
export default pessoaService;
