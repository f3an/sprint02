const obj = {words: 'newspapers newspapers  books magazines'};

console.log (obj);

function cleanArray(actual) 
{
    let newArray = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    let unique = [];
    for (let i = 0; i < newArray.length; i++) {
      let current = newArray[i];
      if (!~unique.indexOf(current)) {
        unique.push(current);
      }
    }
    return unique;
}

function addWords(obj,wrds) {
    let arr= Object.values(obj);
    arr = String(arr);
    arr = arr+ " " + wrds;
    arr = arr.split(" ");
    obj["words"] = arr.join(" ");
    return obj;
}

function removeWords(obj, wrds) {
    let remArr = Object.values(obj);
    remArr = String(remArr);
    remArr = remArr.split(" ");
    remArr = cleanArray(remArr);
    let rems = cleanArray(wrds.split(" "));

    for (let i = 0; i < rems.length; i++) {
      let element = rems[i];
      let index = remArr.indexOf(element);
      if (index > -1) {
        remArr.splice(index, 1);
      }
    }
    obj["words"] = remArr.join(" ");
    return obj;
}

function changeWords(obj, oldWrds, newWrds) 
{
  let changeArr = Object.values(obj);
  changeArr = String(changeArr);
  changeArr = changeArr.split(" ");
  changeArr = cleanArray(changeArr);
  let news = cleanArray(newWrds.split(" "));
  let olds = cleanArray(oldWrds.split(" "));

  for (let i = 0; i < olds.length; i++) {
    let element = olds[i];
    let index = changeArr.indexOf(element);
    if (index > -1) {
      changeArr.splice(index, 1);
    }
  }

  for (let i = 0; i < news.length; i++) {
    let element = news[i];
    changeArr.push(element);
  }

  obj["words"] = changeArr.join(" ");
  return obj;
}


console.log(obj); // {words: "newspapers newspapers  books magazines"}

addWords(obj, "radio newspapers");
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, "newspapers   radio");
console.log(obj); // {words: "books magazines"}

changeWords(obj, "books radio  magazines", "tv internet");
console.log(obj); // {words: "tv internet"}