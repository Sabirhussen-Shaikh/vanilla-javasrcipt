// data
const reviews = [{
    id:1,
    name:'sabir',
    post:'boss',
    Comment: "sabirhussen shaikh dolor sit amet consectetur adipisicing elit.  modi cum impedit est obcaecati quam pariatur repellat quas mollitia aperiam magni beatae consectetur eaque."
},{
    id:2,
    name:'safin',
    post:'manager',
    Comment: "manager safin Repellendus architecto nesciunt libero soluta perferendis, ipsam mollitia! Nisi, quisquam! Modi quam inventore laudantium amet quo, aut ut unde impedit rem quidem?"
},{
    id:3,
    name:'tabrez',
    post:'funder',
    Comment: " Ut, sunt? Obcaecati nemo ut quidem error consequuntur eligendi, consequatur dignissimos. Iure deserunt minima saepe."
}];

// querySelector
const namea = document.querySelector(".author");
const post = document.querySelector(".post");
const comment = document.querySelector(".comment");

const pre = document.querySelector('.previous_btn');
const next = document.querySelector('.next_btn');

// initialization
let currentReview = 0;

document.addEventListener('DOMContentLoaded',function () {
    showPerson(currentReview)
})

function showPerson(person) {
    let item = reviews[person];

    namea.textContent = item.name;
    post.textContent = item.post;
    comment.textContent = item.Comment;
}

next.addEventListener('click',function(){
    currentReview++;
    if(currentReview > reviews.length-1)
    {
        currentReview = 0;
    }
    showPerson(currentReview);
})

pre.addEventListener('click',function(){
    currentReview--;
    if(currentReview < 0)
    {
        currentReview = reviews.length-1;
    }
    showPerson(currentReview);
})