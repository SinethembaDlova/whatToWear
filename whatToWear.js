var inputWeather = document.querySelector("#inputWeather");
var displayClothes = document.querySelector(".clothesToWearDiv");

var wardrobe = [{
        image:'Beany.jpg',
        itemName: 'Beany',
        key:  'cold'
    },

    {
        image: 'cap.jpg',
        itemName: 'Cap',
        key: 'sunny'
    },
    {
        image: 'chino.jpg',
        itemName: 'Chino',
        key: 'Cool'
    },
    {
        image: 'coat.jpg',
        itemName: 'Coat',
        key: 'cold'
    },

    {
        image: 'jeanshorts.jpg',
        itemName: 'Shorts',
        key:  'sunny'
    },

    {
        image: 't-shirt.jpg',
        itemName: 'T-shirt',
        key: 'sunny'
    },

];

var wardrobeTemplate = document.querySelector("#wardrobeTemplate").innerHTML;
var wardrobeTemplateInstance = Handlebars.compile(wardrobeTemplate);
var iziphumo = wardrobeTemplateInstance({
    item: wardrobe
});
displayClothes.innerHTML += iziphumo;

/*var whatToWear = function(weather) {
    var itemsForDay = [];


    for (var i = 0; i < wardrobe.length; i++) {
        if (wardrobe[i].size === selectedSize) {
            itemsForDay.push(wardrobe[i])
        }

    }
    if (weather < 20) {
        return itemsForDay;
    }

    else {
        return return itemsForDay;
    }
}
*/
