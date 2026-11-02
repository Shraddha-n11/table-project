import { Component } from '@angular/core';
import{employee, student, product,course, book, customer, order, movie, teacher, vehicle, hotel, dcotor, restaurat, account, flight,project, city, mobile, member, gym, car, college, cricket, appliance, event, company, grocery, hospital, song, bike, place, transaction,task  } from './models/students'
import { empArr, studentArr, productArr,courseArr,bookArr,customerArr, orderArr, movieArr, teacherArr, vehicleArr, hotelArr, doctorArr, restaurantArr, accountArr, flightArr, projectArr, cityArr, mobileArr, memberArr, gymArr, carArr, collegeArr, cricketerArr, applianceArr, eventArr, companyArr, groceryArr, hospitalArr, songArr, bikeArr, placeArr, transactionArr, taskArr   } from './const/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-project';

  empArr:employee[]=empArr;
  studentArr:student[]=studentArr;
  productArr:product[]=productArr;
  courseArr:course[]=courseArr;
  bookArr:book[]=bookArr;
  customerArr:customer[]=customerArr;
  orderArr:order[]=orderArr;
  movieArr:movie[]=movieArr;
  teacherArr:teacher[]=teacherArr;
  vehicleArr:vehicle[]=vehicleArr;
  hotelArr:hotel[]=hotelArr;
  doctorArr:dcotor[]=doctorArr;
  restaurantArr:restaurat[]=restaurantArr;
  accountArr:account[]=accountArr;
  flightArr:flight[]=flightArr;
  projectArr:project[]=projectArr;
  cityArr:city[]=cityArr;
  mobileArr:mobile[]=mobileArr;
  memberArr:member[]=memberArr;
  gymArr:gym[]=gymArr;
  carArr:car[]=carArr;
  collegeArr:college[]=collegeArr;
  cricketerArr:cricket[]=cricketerArr;
  applianceArr:appliance[]=applianceArr;
  eventArr:event[]=eventArr;
  companyArr:company[]=companyArr;
  groceryArr:grocery[]=groceryArr;
  hospitalArr:hospital[]=hospitalArr;
  songArr:song[]=songArr;
  bikeArr:bike[]=bikeArr;
  placeArr:place[]=placeArr;
  transactionArr:transaction[]=transactionArr;
  taskArr:task[]=taskArr;
}
