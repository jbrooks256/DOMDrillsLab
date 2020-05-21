document.addEventListener("DOMContentLoaded", function(){
    let div = document.createElement("div");
    div.className = "header-container";
 
    let colors = ["Blue", "Green", "Red", "Yellow", "Pink", "Purple", "Gray", "Orange"];
    
    let h1 = document.createElement("h1");
    let text = document.createTextNode("This is an h1");
    h1.className = "h1";

    let h2 = document.createElement("h2");
    h2.innerText = "This is an h2";
    h2.className = "h2";

    let h3 = document.createElement("h3");
    h3.innerText = "This is an h3";
    h3.className = "h3";

    let h4 = document.createElement("h4");
    h4.innerText = "This is an h4";
    h4.className = "h4";

    let h5 = document.createElement("h5");
    h5.innerText = "This is an h5";
    h5.className = "h5";

    let h6 = document.createElement("h6");
    h6.innerText = "This is an h6";
    h6.className = "h6";
 
    h1.appendChild(text);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    document.body.appendChild(div);
    
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click to add new list item");
    button.appendChild(buttonText);
    button.className = "button";
    document.body.appendChild(button);

    let x = 1
    let randomColor = Math.floor(Math.random() * 9);

    h1.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h1.style.color = colors[randomColor];
    })
    h2.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h2.style.color = colors[randomColor];
    })
    h3.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h3.style.color = colors[randomColor];
    })
    h4.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h4.style.color = colors[randomColor];
    })
    h5.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h5.style.color = colors[randomColor];
    })
    h6.addEventListener("dblclick", function(){
        let randomColor = Math.floor(Math.random() * 9);
        h6.style.color = colors[randomColor];
    })
    
    button.addEventListener("click", function(){
            let li = document.createElement("li");
            let liText = document.createTextNode("This is list item " + x++ );
            li.appendChild(liText);
            document.body.appendChild(li);

            li.addEventListener("click", function(){
                let randomColor = Math.floor(Math.random() * 9);
                li.style.color = colors[randomColor];
            })

            li.addEventListener("dblclick", function(){
                li.remove();
            })
    })
})