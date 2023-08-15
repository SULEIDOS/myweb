const menuItems = document.querySelectorAll(".menuitem");
menuItems.forEach(function(item){
    item.addEventListener("click", function(e){
        const activeItem = document.querySelector(".active")
        activeItem.classList.remove("active");
        e.target.classList.add("active");

    });
});

const cambioboton = document.querySelector("#cambiar");
cambioboton.addEventListener("click", function(e){
    document.body.classList.toggle("cambioclaroscuro");    
});