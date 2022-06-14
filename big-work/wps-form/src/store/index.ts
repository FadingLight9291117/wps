import { createStore } from "vuex";
import { IFormProblemData } from "@/types";
import { getStarProblemList } from "@/api";

export default createStore({
  state: {
    newForm: {
      title: "",
      subTitle: "",
      problems: [{ id: Date.now().toString(), type: "input", title: "" }],
    },
    addBtnList: [
      { id: 1, name: "填空题", type: "input" },
      { id: 2, name: "单选题", type: "singleSelect" },
      { id: 3, name: "多选题", type: "multiSelect" },
      { id: 4, name: "下拉选择", type: "pullSelect" },
      { id: 5, name: "日期题", type: "date" },
      { id: 6, name: "时间题", type: "time" },
      { id: 7, name: "分数题", type: "score" },
    ],
    // todo: 收藏的题目
    tmplBtnList: [
      { id: 1, type: "input", title: "姓名" },
      { id: 2, type: "input", title: "年龄" },
    ],
  },
  getters: {
    getNewForm: (state) => state.newForm,
    getAddBtnList: (state) => state.addBtnList,
    getTmplBtnList: (state) => state.tmplBtnList,
  },
  mutations: {
    setNewForm: (state, form) => (state.newForm = form),
    setTitle: (state, title: { title?: string; subTitle?: string }) => {
      if (title.title) state.newForm.title = title.title;
      if (title.subTitle) state.newForm.subTitle = title.subTitle;
    },
    addProblem: (state, problem) => state.newForm.problems.push(problem),
    updateProblem: (state, problem) => {
      const problemIdx = state.newForm.problems.findIndex(
        (item: IFormProblemData) => item.id === problem.id
      );
      state.newForm.problems[problemIdx] = problem;
    },
    deleteProblem: (state, problem) => {
      const problemIdx = state.newForm.problems.findIndex(
        (item: IFormProblemData) => item.id === problem.id
      );
      state.newForm.problems.splice(problemIdx, 1);
    },
    // 收藏题目
    addStarProblemList: (state, problems) => {
      state.tmplBtnList.push(...problems)
    },
  },
  actions: {
    // 收藏的题目
    setStarProblemList: async (context) => context.commit("addStarProblemList", await getStarProblemList())
  },
  modules: {},
});
