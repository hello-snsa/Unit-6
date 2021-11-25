// key: 0ee6ea04d6357d42a001acfc4a445d04
// hash: 5f874ac318f04550ba24b33dc4fca7e9
// ts: 1
// http://gateway.marvel.com/v1/public/creators/32?ts=1&apikey=0ee6ea04d6357d42a001acfc4a445d04&hash=5f874ac318f04550ba24b33dc4fca7e9

// http://gateway.marvel.com/v1/public/characters?name=hulk&ts=1&apikey=0ee6ea04d6357d42a001acfc4a445d04&hash=5f874ac318f04550ba24b33dc4fca7e9

var query = "";
var parentDiv = document.getElementById('printHere');

async function getData() {
    parentDiv.innerHTML = null;
    try {
        let belowDiv = document.getElementById('below');
        belowDiv.setAttribute('id', "belowDivs")
    } catch (e) {
        console.log("ok")
    }

    query = document.getElementById("searchIt").value;
    // if(query.length>=1){
    console.log(query);
    var res = await fetch(`http://gateway.marvel.com/v1/public/characters?name=${query}&ts=1&apikey=0ee6ea04d6357d42a001acfc4a445d04&hash=5f874ac318f04550ba24b33dc4fca7e9`);
    // var res= await fetch(`https://swapi.dev/api/people/?search=${query}`);

    var data = await res.json();

    // console.log("data",data);

    return (data);


}
function setData(search) {
    console.log("search data:", search);

    parentDiv.innerHTML = null;
    console.log("name:", search.data.results[0].name);

    // console.log(search.data.results[0].name)
    // console.log(search.data.results[0].description)
    // console.log(search.data.results[0].thumbnail.path)

    for (i in search.data.results) {

        let myDiv = document.createElement('div');
        myDiv.setAttribute("class", "resultDiv");

        let name = document.createElement('p');
        name.innerText = search.data.results[i].name;
        name.setAttribute("class", "name");

        let description = document.createElement('p');
        description.innerText = search.data.results[0].description;
        description.setAttribute("class", "description");

        let imgUrl = document.createElement('img');
        imgUrl.src = search.data.results[0].thumbnail.path + '.jpg';
        imgUrl.setAttribute("class", "imgUrl");


        myDiv.append(name, description, imgUrl)

        parentDiv.append(myDiv);



    }
}

async function main() {

    let search = await getData();
    console.log("query len", query.length);

    if (query.length <= 0) {
        parentDiv.innerHTML = null;
    }
    else {
        console.log(search)
        console.log(search.data.results[0].name)
        console.log(search.data.results[0].description)
        console.log(search.data.results[0].thumbnail.path)


        setData(search);
    }
}

var timer_id;//undefined
function throttleFunction(func, delay) {

    //If setTimeout is already there, no need to do anything.


    if (timer_id) {
        return false;
    }

    timer_id = setTimeout(() => {

        func(); //calling main() function

        timer_id = undefined;

    }, delay);

}