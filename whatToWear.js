var inputWeather = document.querySelector("#inputWeather");
var displayClothes = document.querySelector(".clothesToWearDiv");

var wardrobe = [
  {
      image: 't-shirt.jpg',
      itemName: 'T-shirt',
      key: 'sunny'
  },

  {
      image: 'shortpants.jpg',
      itemName: 'Shorts',
      key:  'sunny'
  },
  {   image: 'cap.jpg',
      itemName: 'Cap',
      key: 'sunny'
  },
  {
      image: 't-shirt2.jpg',
      itemName: 'T-Shirt',
      key: 'windy'
  },
  {
      image: 'track-bottom.jpg',
      itemName: 'Track-bottom',
      key: 'windy'
  },

  {
      image: 'kwaysoftshell.jpg',
      itemName: 'Sott shell',
      key: 'windy'
  },
  {
      image:'Beany.jpg',
      itemName: 'Beannie',
      key:  'windy'
  },


  {
      image: 'longsleeve.jpg',
      itemName: 'Long sleeve t-shirt',
      key: 'cold'
  },
  {
      image: 'chino.jpg',
      itemName: 'Chino',
      key: 'cold'
  },
  {
      image: 'coat.jpg',
      itemName: 'Coat',
      key: 'cold'
  },

  {
      image: 'beany2.jpg',
      itemName: 'Beannie',
      key: 'cold'
  },
  {
      image: 'sweater.jpg',
      itemName: 'Jersey',
      key:  'rainy'
  },
  {
      image: 'jeans.jpg',
      itemName: 'Jean',
      key: 'rainy'
  },
  {
      image: 'kwayJacket.jpg',
      itemName: 'Jacket',
      key:  'rainy'
  },

  {
      image: 'winterbennie.jpg',
      itemName: 'Beannie',
      key:  'rainy'
  },
];

var wardrobeTemplate = document.querySelector("#wardrobeTemplate").innerHTML;

var whatToWear = function() {
    var itemsForDay = [];


    for (var i = 0; i < wardrobe.length; i++) {

    if(inputWeather.value > 20 && inputWeather.value <= 30)
    {
      if(wardrobe[i].key === 'sunny')
      {
        itemsForDay.push(wardrobe[i]);
      }
    }

    if(inputWeather.value > 15 && inputWeather.value <= 20)
    {
      if(wardrobe[i].key === 'cold')
      {
        itemsForDay.push(wardrobe[i]);
      }
    }

    }

    return itemsForDay;
}

whatToWear()


var wardrobeTemplateInstance = Handlebars.compile(wardrobeTemplate);
var iziphumo = wardrobeTemplateInstance({
    item: whatToWear()
});
displayClothes.innerHTML += iziphumo;

console.log(whatToWear());

inputWeather.addEventListener('change', whatToWear)
