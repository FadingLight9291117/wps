import {IFormData} from "@/types"
import {FormData2BackendFormData} from "@/types";

enum FormState {
    FINISH,
    DELETE,
    CAOGAO,
}

export async function submitNewForm(newForm: IFormData, state?: FormState) {
    const body = FormData2BackendFormData(newForm)
    console.log(body)
    const resp = await fetch("/api/form/create", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await resp.json()
}

// todo: 获取后端收藏题目列表