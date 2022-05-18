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
    elem.href = "#";
    elem.className = "tag-item";
    elem.innerHTML = element.name;
    elemList.push(elem);
  });
  return elemList;
}

createTagList().then((elemList: Array<HTMLElement>) => {
  const tagList = document.getElementById("tag-list");
  elemList.forEach((elem) => {
    tagList?.appendChild(elem);
  });
});
