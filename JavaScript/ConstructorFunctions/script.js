function User(name, age, email, number) {
    this.user_name = name;
    this.age = age;
    this.email = email;
    this.number = number;
    this.get_email = function () {
        return this.email
    }
}

const user1 = new User("Alex", 20, "nKZwM@example.com", 1234567890);
const user2 = new User("Amal", 25, "0Cm0Q@example.com", 9876543210);

user1.age = 100;
user1.dep = "IT";

console.log(user1);
console.log(user2);

const em = user2.get_email();
console.log(em);