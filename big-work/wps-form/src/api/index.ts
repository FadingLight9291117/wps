import {
  IBackendFormData,
  IBackendFormProblem,
  IFormData,
  EFormStatus,
  IFormProblemData,
} from "@/types";

// 前后端通讯数据格式转换
function problem2BackendProblem(problem: IFormProblemData): IBackendFormProblem {
  const backendProblem: IBackendFormProblem = {
    type: problem.type,
    title: problem.title,
    setting: {
      options: problem.options?.map((opt, i) => {
        return {
          id: i.toString(),
          title: opt,
          status: "2",
        }
      }),
    },
  };
  return backendProblem;
}

function backendProblem2problem(backendProblem: { id?: string, status: number, problem: IBackendFormProblem }): IFormProblemData {
  const problem = {
    id: backendProblem.id,
    type: backendProblem.problem.type,
    title: backendProblem.problem.title,
    options: backendProblem.problem.setting?.options?.map(item => item.title),
  }
  return problem
}

function FormData2BackendFormData(formData: IFormData) {
  const backendFormData: IBackendFormData = {
    id: formData.id,
    title: formData.title,
    status: EFormStatus.normal,
    subTitle: formData.subTitle,
    problems: formData.problems.map(problem2BackendProblem),
  }
  return backendFormData;
}


// 提前表单
export async function submitNewForm(newForm: IFormData, state?: EFormStatus) {
  const body = FormData2BackendFormData(newForm);
  if (state) body.status = state;
  const resp = await fetch("/api/form/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  return await resp.json();
}

// star problem
export async function starProblem(problemData: IFormProblemData) {
  const backendProblemData = problem2BackendProblem(problemData)
  const resp = await fetch("/api/problem/star", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ problem: backendProblemData }),
  })
  return await resp.json()
}
// 获取后端收藏题目列表
export async function getStarProblemList(): Promise<IFormProblemData[]> {
  const resp = await fetch("/api/problem/listStar", {
    method: "POST",
  })
  const backendStarProblemsList: Array<{ id?: string, status: number, problem: IBackendFormProblem }> = (await resp.json()).data.items
  const problems = backendStarProblemsList.map(backendProblem2problem)
  return problems
}
// 取消收藏
export async function cancleStar(id: string) {
  const resp = await fetch("/api/problem/cancelStar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id })
  })
  return await resp.json()
}