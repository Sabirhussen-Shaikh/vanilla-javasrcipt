
///method 1 :
// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load' , () => {
//     // console.log(xhr.response);
//     const data = xhr.response;
//     console.log(JSON.parse(data));

// });

// xhr.open('GET','https://supersimplebackend.dev/products');
// xhr.send();


//method 2 : 
// fetch('https://supersimplebackend.dev/products')
// .then((response) => {
//     // console.log(response.json());
//     return response.json();
// })
// .then((data)=> {
//     console.log(data)
// })

//method 3 :
async function getData() {
    const response = await fetch('https://supersimplebackend.dev/products');

    const data = await response.json();
    console.log(data);
}

getData();//remember to call the function