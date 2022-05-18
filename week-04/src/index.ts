interface IArea {
  id: number;
  name: string;
}

async function createTagList() {
  const areas = await fetch("data/areas.json");
  const data = await areas.json();
  const elemList: Array<HTMLElement> = [];
  data.forEach((element: IArea) => {
    let elem = document.createElement("a");
    elem.id = "tag" + element.id;
    elem.href = "#";
    elem.className = "tag-item tag-active";
    elem.innerHTML = element.name;
    elemList.push(elem);
  });
  return elemList;
}

function activeTag(id: string) {
  const tagListElem = document.getElementById("tag-list");
  const tagElems = tagListElem?.children;
  if (tagElems) {
    for (let i = 0; i < tagElems?.length; i++) {}
  }
}

createTagList().then((elemList: Array<HTMLElement>) => {
  const tagList = document.getElementById("tag-list");
  elemList.forEach((elem) => {
    tagList?.appendChild(elem);
  });
});
