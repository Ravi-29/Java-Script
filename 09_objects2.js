//const tinderUser = new Object()    // Singleton Object
const tinderUser = {}     // Non Singleton Object

tinderUser.id = "123445asd"
tinderUser.name = "Toni"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const user =  {
    eamil: "asasdf.mail.com",
    Fullname:{
        firstName: "Ravi",
        lastName: "Shankar"
    }
}
//console.log(user.Fullname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}    // spread operator
//console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "Js Hindi",
    price: "555",
    courseInstructor: "Ravi"
}

//course.CourseInstructor

const {courseInstructor:Instructor} = course
//console.log(courseInstructor);
console.log(Instructor);


// {
//     "name": "Ravi Shankar",                            //API
//     "CourseName": "Js in Hindi",
//     "price": "Free"
// }