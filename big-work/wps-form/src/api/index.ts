import {IFormData} from "@/types"
import {FormData2BackendFormData} from "@/types";

export async function submitNewForm(newForm: IFormData) {
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

