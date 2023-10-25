let unsortList = document.getElementById('items');
let listItem = document.getElementsByClassName('item');
// let listItem = document.getElementByName('button');
let buttonAdd = document.querySelector('button');
// console.log('buttonAdd');

// jak zrobic dla querySelektor jakie roznice /css i []/

let newItem = document.createElement('li');
let countItem = listItem.length;
console.log("countItem", countItem)
// newItem.
//przeniesiona powyzej funkcja
let i = countItem;

const addItemHtml = () => {
    i ++;
    let newItem = document.createElement('li');
    // console.log('newItem', newItem);
    newItem.setAttribute('class', 'item');
    // jaka roznica miedzy tekstami?
    // jak sie nazywa apostrof back...?
    // newItem.setAttribute('innerText', `item ${i}`);
    //czemu nie dziala newItem.setAttribute('textContent', `item ${i}`);
    // newItem.setAttribute('textContent', `item ${i}`);
    newItem.textContent = `Item ${i}`
    // czemu nie dziala setAttribute na buttona jako textContent?!
    // buttonAdd.setAttribute('textContent', 'item 4');
    // buttonAdd.textContent = 'item 4'
  
    // console.log('obiekt button', buttonAdd);
    unsortList.appendChild(newItem);
    // console.log("unsortListlastElementChild", unsortList.lastElementChild);
    // console.log("unsortList", unsortList);
    // console.log("unsortList.children", unsortList.children);
}

// ten przypadek funkcja ponize addEventListenera powoduje befor init..
// blad ze buttonAdd.addEventListener nie jes function
buttonAdd.addEventListener("click", addItemHtml);
// gdzie szukac listy wlasciwosci metody setAttribute ?


// newItem.setAttribute('class', 'item');
// jaka roznica miedzy tekstami?
// newItem.setAttribute('innerText', 'item 4');
// newItem.setAttribute('textContent', 'item 4');

// buttonAdd.setAttribute('textContent', 'item 4');

// console.log(newItem);



// unsortList.appendChild('li');

// console.log(unsortList);
// console.log(listItem);