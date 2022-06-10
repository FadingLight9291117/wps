import {createStore} from "vuex";
import {IFormItemData} from "@/types";

export default createStore({
    state: {
        newForm: [{id: '0123', type: "input", title: ""}],
        addBtnList: [
            {id: 1, name: "填空题", type: "input"},
            {id: 2, name: "单选题", type: "singleSelect"},
            {id: 3, name: "多选题", type: "multiSelect"},
            {id: 4, name: "下拉选择", type: "pullSelect"},
            {id: 5, name: "日期题", type: "date"},
            {id: 6, name: "时间题", type: "time"},
            {id: 7, name: "分数题", type: "score"},
        ],
        tmplBtnList: [
            {id: 1, name: "姓名"},
            {id: 2, name: "年龄"},
        ],
    },
    getters: {
        getNewForm: (state) => state.newForm,
        getAddBtnList: (state) => state.addBtnList,
        getTmplBtnList: (state) => state.tmplBtnList,
    },
    mutations: {
        setNewForm: (state, form) => state.newForm = form,
        addProblem: (state, problem) => state.newForm.push(problem),
        updateProblem: (state, problem) => {
            const problemIdx = state.newForm.findIndex((item: IFormItemData) => item.id === problem.id)
            state.newForm[problemIdx] = problem
        }
    },
    actions: {},
    modules: {},
});
