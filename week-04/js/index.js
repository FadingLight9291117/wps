"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createTagList() {
    return __awaiter(this, void 0, void 0, function* () {
        const areas = yield fetch("data/areas.json");
        const data = yield areas.json();
        const elemList = [];
        data.forEach((element) => {
            let elem = document.createElement("a");
            elem.href = "#";
            elem.className = "tag-item";
            elem.innerHTML = element.name;
            elemList.push(elem);
        });
        return elemList;
    });
}
createTagList().then((elemList) => {
    const tagList = document.getElementById("tag-list");
    elemList.forEach((elem) => {
        tagList === null || tagList === void 0 ? void 0 : tagList.appendChild(elem);
    });
});
