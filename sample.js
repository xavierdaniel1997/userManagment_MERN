const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

//   const result = Object.keys(person1)
//   console.log(result)

for(const keys in person1){
    console.log(person1[keys])
}