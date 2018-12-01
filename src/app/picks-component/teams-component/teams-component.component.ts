import { Component, OnInit } from '@angular/core';

interface Team {
  name: string;
  logo: string;
  id: number;
  }

@Component({
  selector: 'app-teams-component',
  templateUrl: './teams-component.component.html',
  styleUrls: ['./teams-component.component.scss']
}) 

export class TeamsComponentComponent implements OnInit {

 public teams: Team[] = [
   {
     name: 'bears',
     logo: '../assets/img/bears.jpg', 
     id:1
   },
   {
    name: 'bengals',
    logo: '../assets/img/bengals.jpg', 
    id: 2
  },
  {
    name: 'bills',
    logo: '../assets/img/bills.jpg', 
    id: 3
  },
  {
    name: 'broncos',
    logo: '../assets/img/broncos.jpg', 
    id: 4
  },
  {
    name: 'browns',
    logo: '../assets/img/browns.jpg', 
    id: 5
  },
  {
    name: 'buccaneers',
    logo: '../assets/img/buccaneers.jpg', 
    id: 6
  },
  {
    name: 'cardinals',
    logo: '../assets/img/cardinals.jpg', 
    id: 7
  },
  {
    name: 'chargers',
    logo: '../assets/img/chargers.jpg', 
    id: 8
  },
  {
    name: 'chiefs',
    logo: '../assets/img/chiefs.jpg', 
    id: 9
  },
  {
    name: 'colts',
    logo: '../assets/img/colts.jpg', 
    id: 10
  },
  {
    name: 'cowboys',
    logo: '../assets/img/cowboys.jpg', 
    id: 11
  },
  {
    name: 'dolphins',
    logo: '../assets/img/dolphins.jpg', 
    id: 12
  },
  {
    name: 'eagles',
    logo: '../assets/img/eagles.jpg', 
    id: 13
  },
  {
    name: 'falcons',
    logo: '../assets/img/falcons.jpg', 
    id: 14
  },
  {
    name: 'giants',
    logo: '../assets/img/giants.jpg', 
    id: 15
  },
  {
    name: 'jaguars',
    logo: '../assets/img/jaguars.jpg', 
    id: 16
  },
  {
    name: 'jets',
    logo: '../assets/img/jets.jpg', 
    id: 17
  },
  {
    name: 'lions',
    logo: '../assets/img/lions.jpg', 
    id: 18
  },
  {
    name: 'packers',
    logo: '../assets/img/packers.jpg', 
    id: 19
  },
  {
    name: 'panthers',
    logo: '../assets/img/panthers.jpg', 
    id: 20
  },
  {
    name: 'patriots',
    logo: '../assets/img/patriots.jpg', 
    id: 21
  },
  {
    name: 'raiders',
    logo: '../assets/img/raiders.jpg', 
    id: 22
  },
  {
    name: 'rams',
    logo: '../assets/img/rams.jpg', 
    id: 23
  },
  {
    name: 'ravens',
    logo: '../assets/img/ravens.jpg', 
    id: 24
  },
  {
    name: 'redskins',
    logo: '../assets/img/redskins.jpg', 
    id: 25
  },
  {
    name: 'saints',
    logo: '../assets/img/saints.jpg', 
    id: 26
  },
  {
    name: 'sanfrancisco',
    logo: '../assets/img/sanfrancisco.jpg', 
    id: 27
  },
  {
    name: 'seahawks',
    logo: '../assets/img/seahawks.jpg', 
    id: 28
  },
  {
    name: 'steelers',
    logo: '../assets/img/steelers.jpg', 
    id: 29
  },
  {
    name: 'texans',
    logo: '../assets/img/texans.jpg', 
    id: 30
  },
  {
    name: 'titans',
    logo: '../assets/img/titans.jpg', 
    id: 31
  },
  {
    name: 'vikings',
    logo: '../assets/img/vikings.jpg', 
    id: 32
  }
]
  constructor() { }

 styleTeams(logo) {
   return {
     backgroundImage: `url('${logo}')`,
     backgroundSize: 'contain',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: '50% 50%'
   }
 }

  ngOnInit() {
  }

}
