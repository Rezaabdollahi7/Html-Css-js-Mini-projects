// filter array
let filterArray = [];
let galleryArray=[
    {
        id : 1 , 
        name : "iphone 11 Gold 256Gb ",
        src:"./images/iphone1.webp",
        desc:"Lorem ispun"
    },
    {
        id: 2,
        name: "iphone 12 Silver",
        src: "./images/iphone2.jpg",
        desc: "Lorem ispun"
    },
    {
        id: 3,
        name: "Samsung blue watch ",
        src: "./images/watch1.jpg",
        desc: "Lorem ispun"
    },
    {
        id: 4,
        name: "xiaomi new watch",
        src: "./images/watch2.jpg",
        desc: "Lorem ispun"
    },
    {
        id: 5,
        name: "apple watch",
        src: "./images/watch3.jpg",
        desc: "Lorem ispun"
    },
    {
        id: 6,
        name: "best headphone",
        src: "./images/headphone.jpg",
        desc: "Lorem ispun"
    }

]

showgallery(galleryArray);
console.log(galleryArray);


// create function to show galley
function showgallery(currArray){
    document.getElementById("card").innerText ='';

    for(let i = 0 ; i < currArray.length ; i++){
        document.getElementById('card').innerHTML+=`
            <div class="col-md-4 mt-3">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">${currArray[i].name}</h4>
                    <img src="${currArray[i].src}" width="100%" height="320px">
                    <p>${currArray[i].desc}</p>
                    <button class="btn btn-primary w-100 mx-auto ">More</button>
                </div>
            </div>    
        `
    }
}
// live searching using keyup
document.getElementById("myinput").addEventListener("keyup" ,function(){
    let text = document.getElementById('myinput').value;
    filterArray = galleryArray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }
    });
    if(this.value==""){
        showgallery(galleryArray);
    }
    else{
        if(filterArray == ""){
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML="";

        }
        else{
            showgallery(filterArray);
            document.getElementById("para").style.display = 'none';
        }
    }
})