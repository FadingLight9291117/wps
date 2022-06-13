// 主页面
export interface IFormData {
  id?: string;
  title: string;
  subTitle: string;
  problems: Array<IFormProblemData>;
}

export interface IFormProblemData {
  id?: string;
  type: string;
  title: string;
  options?: Array<string>;
}

// 后端
export interface IBackendFormData {
  id?: string;
  status: number;
  title: string;
  subTitle: string;
  problems: Array<IBackendFormProblem>;
}

export interface IBackendFormProblem {
  type: string;
  title: string;
  setting?: { options?: Array<IBackendOption> };
}

interface IBackendOption {
  id: string;
  title: string;
  status: string;
}

// 表单状态
export enum EFormStatus {
  delete = 1,
  normal,
  ing,
  end,
}
