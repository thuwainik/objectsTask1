/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/

let person = {
  name: "Khaled",
  age: 28,
  city: "Mishref",
};
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.email = "thuwainik@gmail.com";
/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
function hasKey(obj, ke) {
  if (obj[ke]) {
    return true;
  } else {
    return false;
  }
}
console.log(hasKey(person, "city"));
console.log(hasKey(person, "khaled"));

// 	Q4) Create a function that checks if all properties in an object have values
//  (i.e., no properties are undefined or null).
//running the function on this object should return false
const myObject1 = {
  name: "John",
  age: 30,
  city: null,
};
//running the function on this object should return true
const myObject2 = {
  name: "John",
  age: 30,
  city: "Kuwait",
};

function isEmpty(obj) {
  let arr = Object.values(obj);
  if (arr.includes(null) || arr.includes(undefined)) {
    return false;
  } else {
    return true;
  }
}
console.log(isEmpty(myObject1));
console.log(isEmpty(myObject2));
// ==================================================
const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];
/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
function printTitle(arr) {
  arr.forEach((e) => {
    console.log(e.title);
  });
}
printTitle(movies);
/******************************
      Q6) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
// function checkRel(arr) {
//   let count = 0;
//   arr.forEach((e) => {
//     if (e.year == "1994") {
//       count++;
//     }
//   });
//   return count;
// }
function checkRel(arr) {
  const newArray = arr.filter((e) => {
    return e.year == "1994";
  });
  return newArray.length;
}
console.log(checkRel(movies));
/******************************
      Q7) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
// function fixGen(arr) {
//   const newArray = arr;
//   newArray.forEach((e) => {
//     if (e.title == "The Dark Knight") {
//       e.genre = "Action/Drama";
//     }
//   });
//   return newArray;
// }
function fixGen(arr) {
  const newArray = arr.map((e) => {
    if (e.title == "The Dark Knight") {
      e.genre = "Action/Drama";
    }
    return e;
  });
  return newArray;
}
console.log(fixGen(movies));
