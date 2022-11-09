const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector(".search")

//Function to Get Data from API
const getData = async() => {
  const data = await fetch(endpoint);
  return data.json();
}

//An array to store data from fetch
let fetchedData = [];

// function to update fetchedData with data from fetch
const storeDataInArray = (item) => {
  item.then((c) => fetchedData = c)
}

// getData to Load Initial data and Update in List
const populateDom = (item) => {
  const listParent = document.querySelector(".suggestions")
  item.then((c) => c.forEach(({city, state}) => {
    const listChild = document.createElement("li")
    listChild.innerText = city+", "+state
    listParent.appendChild(listChild)
  }))
}

// function to Load and update in List
const getDataItems = (item) => {
  const listParent = document.querySelector(".suggestions")
  //clear existing elements
  listParent.innerHTML=""
  //if city or state contains the searched value then append it as child
  item.forEach(({city, state}) => {
    if(city.toLowerCase().includes(searchInput.value.toLowerCase()) || 
      state.toLowerCase().includes(searchInput.value.toLowerCase())) 
    {
      const listChild = document.createElement("li")
      listChild.innerText = city+", "+state
      listParent.appendChild(listChild)
    }
  })
}

//Run the updateData function after Loading Website
document.addEventListener("DOMContentLoaded",async() => {
  //storeData in fetchedData array
  storeDataInArray(getData())
  //populate elements in DOM
  populateDom(getData())
})

//Event Listener to run getDataItems() every time on changing the input value
searchInput.addEventListener("input",() => getDataItems(fetchedData))
