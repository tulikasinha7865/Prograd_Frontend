function changeText() {
    document.getElementById("text").innerHTML = "JavaScript and Java are completely different languages, both in concept and design.";
}
function light(sw) {
    if (sw == 0) {
        document.getElementById("content1").setAttribute("class", "content");
        document.getElementById("img").setAttribute("class", "content");
    } else {
        document.getElementById("content1").setAttribute("class", "dark");
        document.getElementById("img").setAttribute("class", "dark");
    }
}

var index = 0;

const img = ["https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
"https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
"https://images.unsplash.com/photo-1433048980017-63f162f662b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
];

function changeImage() {
    for(var i=0;i<img.length;i++)
    {
        document.getElementById("myImg").src = img[i];
    }
    
}