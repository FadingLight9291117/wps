// 主页面
export interface IFormData {
    id?: string
    title: string
    subTitle: string
    problems: Array<IFormProblemData>,
}

export interface IFormProblemData {
    id?: string
    type: string
    title: string
    options?: Array<string>
}


// 后端
interface IBackendFormData {
    id?: string
    title: string
    subTitle: string
    problems: Array<IBackendFormProblem>
}

interface IBackendFormProblem {
    type: string
    title: string
    setting?: { options?: Array<IBackendOption> }
}

interface IBackendOption {
    id: string
    title: string
    status: string
}

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
                }
            })
        }
    }
    return backendProblem
}

export function FormData2BackendFormData(formData: IFormData) {
    const backendFormData: IBackendFormData = {
        id: formData.id,
        title: formData.title,
        subTitle: formData.subTitle,
        problems: formData.problems.map(problem2BackendProblem),
    }
    return backendFormData
}

