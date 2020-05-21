document.addEventListener('DOMContentLoaded', function() {
    let class1 = document.createElement('div');
    class1.className = 'header-container';
    let btnCounter = 1;

    let h1 = document.createElement('h1');
    let text = document.createTextNode("This is an h1");
    h1.appendChild(text);
    class1.appendChild(h1);
    document.body.appendChild(class1)
    let text2 = document.createTextNode('This is an h2 and append it to the same div the h1 one is');

    let h2 = document.createElement('h2')
    h2.appendChild(text2)
    class1.appendChild(h2)


    let h3 = document.createElement('h3');
    let text3 = document.createTextNode('This is an h3 and append it to the same div the h2 one is')
    h3.appendChild(text3)
    class1.appendChild(h3)

    let h4 = document.createElement('h4');
    let text4 = document.createTextNode('This is an h4 and append it to the same div the h3 one is')
    h4.appendChild(text4)
    class1.appendChild(h4)

    let h5 = document.createElement('h5')
    class1.appendChild(h5)
    let text5 = document.createTextNode('This is an h5 and append it to the same div the h4 one is')
    h5.appendChild(text5)
    let h6 = document.createElement('h6')
    class1.appendChild(h6)
    let text6 = document.createTextNode('This is an h6 and append it to the same div the h5 one is')
    h6.appendChild(text6)

    h1.className = 'h1'
    h2.className = 'h2'
    h3.className = 'h3'
    h4.className = 'h4'
    h5.className = 'h5'
    h6.className = 'h6'


    let colors = ["blue", "green", "yellow", "red", "orange", "purple", "pink", "brown"];

    function colorsToggle() {

        let randomColors = colors[Math.floor(Math.random() * colors.length)]
        return randomColors
    }

    h1.addEventListener("click", function() {
        let myColor = colorsToggle()
        h1.style.color = myColor
    })
    h2.addEventListener("click", function() {
        let myColor = colorsToggle()
        h2.style.color = myColor
    })
    h3.addEventListener("click", function() {
        let myColor = colorsToggle()
        h3.style.color = myColor
    })
    h4.addEventListener("click", function() {
        let myColor = colorsToggle()
        h4.style.color = myColor
    })
    h5.addEventListener("click", function() {
        let myColor = colorsToggle()
        h5.style.color = myColor
    })
    h6.addEventListener("click", function() {
        let myColor = colorsToggle()
        h6.style.color = myColor
    })

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click to add new list item');
    button.className = 'btnClass'
    class1.appendChild(button);
    button.appendChild(btnText);
    document.body.appendChild(button)


    let listItem = document.createElement('ul');
    class1.appendChild(listItem)

    function addItem() {
        let li = document.createElement('li');
        listItem.appendChild(li);
        let btntext2 = document.createTextNode(`This is list item ${(btnCounter)}`);
        li.appendChild(btntext2);
        btnCounter++;

        li.addEventListener("dblclick", function() {
            li.remove();
        })


        button.addEventListener("click", function() {
            let myColor = colorsToggle();
            button.style.color = myColor;
        })
    }
    button.addEventListener('click', addItem)




})