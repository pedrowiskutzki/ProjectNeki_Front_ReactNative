import { api } from "./api/api";

const getSkill = () => {
  return api.get(`skill`);
};

const skillService = {
  getSkill,
};
export default skillService;
