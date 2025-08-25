export type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  status: string;
  actions?: string;
};
