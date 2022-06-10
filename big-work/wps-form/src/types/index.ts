export interface IFormItemData {
    id: string,
    type: string,
    title: string,
    setting?: {
        options: Array<{title: string, status: number}>
    }
}
