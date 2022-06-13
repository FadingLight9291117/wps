import {
  IBackendFormData,
  IBackendFormProblem,
  IFormData,
  IFormProblemData,
} from "@/types";
import { EFormStatus } from "@/types";

// 前后端通讯数据格式转换
function problem2BackendProblem(problem: IFormProblemData) {
  const backendProblem: IBackendFormProblem = {
    type: problem.type,
    title: problem.title,
    setting: {
      options: problem.options?.map((opt, i) => {
        return {
          id: i.toString(),
          title: opt,
          status: "2",
        };
      }),
    },
  };
  return backendProblem;
}

function FormData2BackendFormData(formData: IFormData) {
  const backendFormData: IBackendFormData = {
    id: formData.id,
    title: formData.title,
    status: EFormStatus.normal,
    subTitle: formData.subTitle,
    problems: formData.problems.map(problem2BackendProblem),
  };
  return backendFormData;
}

export async function submitNewForm(newForm: IFormData, state?: EFormStatus) {
  const body = FormData2BackendFormData(newForm);
  if (state) body.status = state;
  const resp = await fetch("/api/form/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await resp.json();
}

// todo: 获取后端收藏题目列表
