
//import { ContaBancaria } from "./models/ContaBancaria";

import { App } from "./models/app";
import { Bike } from "./models/bike";
import { Rent } from "./models/rent";
import { User } from "./models/user";

const bike = new Bike('mountain bike', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
const user = new User('Maria', 'maria@mail.com', '1234')
const today = new Date()
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2)
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const sevenDaysFromToday = new Date()
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7)
const rent1 = Rent.create([], bike, user, today, twoDaysFromToday)
const user1 = new User('joao', 'joao@mail.com', '4312')
const user3 = new User('maria', 'mariac@mail.com', '3123')
const user4 = new User('carlos', 'carlos@mail.com', '5151')

const app = new App()
app.registerUser(user)
app.registerUser(user1)
app.registerUser(user4)
app.registerUser(user3)


//console.log(app.findUser('maria@mail.com'))
//app.removeUser('maria@mail.com')
//console.log(app.findUser('maria@mail.com'))

const nbike = new Bike('mountain', 'mountain', 
    123, 500, 100.5, 'desc', 5, [])
app.registerBike(nbike)

app.userList()
app.bikesList()
app.rentList()
//console.log(app.returnBike('mountain'))
//console.log(nbike)