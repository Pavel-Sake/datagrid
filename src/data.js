import faker from 'Faker'
import React from "react";

let dataPerson = [];
const status = ['good', 'bad', 'normal'];

let countStatus = 0;
let randomTime = 1234345434343;
let worksRemotelyCounter = 'true';


function CreateData(id, status, time, worksRemotelyCounter, number) {

  return {
    id: id,
    name: faker.Name.firstName(),
    workExperience: faker.random.number(40),
    status: status,
    time: time,
    dataTime: time,
    isWorksRemotely: worksRemotelyCounter,
    pay: {number: number, currency: '$'}
  }
}

for (let i = 0; i < 1000; i++) {

  randomTime -= 10000 * 10000;

  if (i % 2 === 0) {

    worksRemotelyCounter = 'false';
  }
  else {
    worksRemotelyCounter = 'true';
  }

  let rand = 20 + Math.random() * (100 - 20);

  let number = Math.round(rand);

  dataPerson.push(CreateData( i + 1, status[countStatus], randomTime, worksRemotelyCounter, number));


  countStatus++;

  if (countStatus === 3) {
    countStatus = 0
  }

}


export default dataPerson