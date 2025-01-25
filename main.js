const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F1abf391e-4993-11e6-8014-8056cb7c3ac5.jpg?crop=5209%2C2930%2C720%2C21&resize=1500",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4c7c8e28-74d4-45ff-b6ff-7e4f042fea43/2dda3c70-92b7-40b6-ad91-40217150a4d0.png"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/stegosaurus-dinosaur-cartoon-character-sticker_1308-76900.jpg?t=st=1737390566~exp=1737394166~hmac=21d5a991e4f4c8e5f2cbc4ab209aa5eaacad1b1ac2d2cf96b5b9ba5cb888ee24&w=1480"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://www.caninejournal.com/wp-content/uploads/Red-Dog-With-Curled-Tail-on-Grass.jpeg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c274eb31-192a-41f5-84ba-23a0da4a9343/081c95d3-5476-43c3-96a3-16ee90544f63.png"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/cute-spotted-dinosaur-illustration_1308-172477.jpg?t=st=1737390751~exp=1737394351~hmac=3b9a458a5b131fd742ec10762fc8b57f9b4fd040af5fa276d39fed9c01361b13&w=1480"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/facd4054-0af4-486e-80e8-811e842f2f1a/a30c6cc5-9b76-4547-b38f-90265231246e.png"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-vector/hand-painted-adorable-baby-dinosaur-illustrated_23-2148950486.jpg?t=st=1737390800~exp=1737394400~hmac=968cfcf2f98cf6d59c4800d98d37cd43260695854641f5e6b41db41b1353c5e9&w=1380"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6254ce0c-2fce-4fa1-86c1-da90850ca0e3/ef6bfeef-ceb3-4d97-9881-6fc8092fb533.png"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/ff5752ee-fbc3-4d39-bfda-f9d8c4c2e06b/57c94c65-792d-45a7-8ab9-b9cd88cc00c0.png"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f44d2b1d-47e7-468b-a101-30311ef1529c/67a11a36-0704-4622-8192-0e8313564a35.png"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/893a0a85-2cab-4d8b-b711-5fc8a1db90da/23aafe6f-878d-4131-b0af-34c43140d64a.png"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/3ce76588-d4d0-43a7-84c3-369e46310716/2e09d18c-9415-4cd3-b4f6-19361480124c.webp"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/bbd26abb-3296-47bf-b33e-ede826e585f7/413daf47-be32-4298-a6ef-e817b5f4c95b.png"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/7150b423-2d9e-48fe-b7d3-2f2168b13d0c/c61998b5-5ad1-4864-b8b2-ed80f07541be.png"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/2c689927-bd8d-484f-b23a-3dbf68439a95/22e2e836-b6f4-4b91-b1be-6355079973e6.png"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://api.easy-peasy.ai/storage/v1/object/public/images/ea533e9c-3b58-4596-b783-6804b0834875/2024-09-24T18:17:49.701Z.png"
    }
  ];


const app = document.querySelector("#app");

 const toDom = (divId, toRender) => {
  const selDiv = document.querySelector(divId)
  selDiv.innerHTML = toRender
}

const petsDom = (pets) => {
  let domString =""
  for (const pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="text-cotainer"> 
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text1">${pet.color}</p>
      <p class="card-text2">${pet.type}</p>
      <div id= "delete-btn">
      <button class="btn btn-danger mt-auto text-center" id= "delete--${pet.id}">Delete</button>
      </div>
        </div>
      </div>
    </div>   
`}
 toDom("#app", domString)
}
const filter = (pets, typeString) => {
  const typeArray = []

  for (const pet of pets) {
    if (pet.type === typeString) {
      typeArray.push(pet)
    }
  }
  return typeArray
}

const allCatButton = document.querySelector("#cat-btn")
const allDogButton = document.querySelector("#dog-btn")
const allDinoButton = document.querySelector("#dino-btn")
const allTypesButton = document.querySelector("#all-pets-btn")

allCatButton.addEventListener("click", () => {
  const catTypes = filter(pets, "cat")
  petsDom(catTypes)
})

allDogButton.addEventListener("click", () => {
  const dogTypes = filter(pets, "dog")
  petsDom(dogTypes)
})

allDinoButton.addEventListener("click", () => {
  const dinoTypes = filter(pets, "dino")
  petsDom(dinoTypes)
})

allTypesButton.addEventListener("click", () => {
  petsDom(pets)
})
  
// FORM 
const form = document.querySelector("form")

const createPet = (e) => {
  e.preventDefault();

  const newPet = { 
    id: pets.length + 1, 
    name: document.querySelector("#name").value, 
    color: document.querySelector("#favoriteColor").value, 
    specialSkill: document.querySelector("#skill").value, 
    type: document.querySelector("#type").value, 
    imageUrl: document.querySelector("#image").value, };
    
  pets.push(newPet);
  petsDom(pets);
  form.reset();
}

form.addEventListener("submit", createPet);

// DELETE


app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex((e) => e.id === Number(id));
    pets.splice(index, 1);
    petsDom(pets);
  }
});

const startApp = () => {
  petsDom(pets);
}
startApp();
