import { Component, OnInit } from '@angular/core';

interface Team {
  name: string;
  logo: string;
  abbreviation: string;
  id: number;
  home: boolean;
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
     abbreviation: 'CHI',
     logo: '../assets/img/bears.jpg', 
     id:1,
     home: true
   },
   {
    name: 'bengals',
    abbreviation: 'CIN',
    logo: '../assets/img/bengals.jpg', 
    id: 2,
    home: false
  },
  {
    name: 'bills',
    abbreviation: 'BUF',
    logo: '../assets/img/bills.jpg', 
    id: 3,
    home: true
  },
  {
    name: 'broncos',
    abbreviation: 'DEN',
    logo: '../assets/img/broncos.jpg', 
    id: 4,
    home: false
  },
  {
    name: 'browns',
    abbreviation: 'CLE',
    logo: '../assets/img/browns.jpg', 
    id: 5,
    home: true
  },
  {
    name: 'buccaneers',
    abbreviation: 'TB',
    logo: '../assets/img/buccaneers.jpg', 
    id: 6,
    home: false
  },
  {
    name: 'cardinals',
    abbreviation: 'ARI',
    logo: '../assets/img/cardinals.jpg', 
    id: 7,
    home: true
  },
  {
    name: 'chargers',
    abbreviation: 'LAC',
    logo: '../assets/img/chargers.jpg', 
    id: 8,
    home: false
  },
  {
    name: 'chiefs',
    abbreviation: 'KC',
    logo: '../assets/img/chiefs.jpg', 
    id: 9,
    home: true
  },
  {
    name: 'colts',
    abbreviation: 'IND',
    logo: '../assets/img/colts.jpg', 
    id: 10,
    home: false
  },
  {
    name: 'cowboys',
    abbreviation: 'DAL',
    logo: '../assets/img/cowboys.jpg', 
    id: 11,
    home: true
  },
  {
    name: 'dolphins',
    abbreviation: 'Mia',
    logo: '../assets/img/dolphins.jpg', 
    id: 12,
    home: false
  },
  {
    name: 'eagles',
    abbreviation: 'PHI',
    logo: '../assets/img/eagles.jpg', 
    id: 13,
    home: true
  },
  {
    name: 'falcons',
    abbreviation: 'ATL',
    logo: '../assets/img/falcons.jpg', 
    id: 14,
    home: false
  },
  {
    name: 'giants',
    abbreviation: 'NYG',
    logo: '../assets/img/giants.jpg', 
    id: 15,
    home: true
  },
  {
    name: 'jaguars',
    abbreviation: 'JAX',
    logo: '../assets/img/jaguars.jpg', 
    id: 16,
    home: false
  },
  {
    name: 'jets',
    abbreviation: 'NYJ',
    logo: '../assets/img/jets.jpg', 
    id: 17,
    home: true
  },
  {
    name: 'lions',
    abbreviation: 'DET',
    logo: '../assets/img/lions.jpg', 
    id: 18
    ,
     home: false
  },
  {
    name: 'packers',
    abbreviation: 'GB',
    logo: '../assets/img/packers.jpg', 
    id: 19,
    home: true
  },
  {
    name: 'panthers',
    abbreviation: 'CAR',
    logo: '../assets/img/panthers.jpg', 
    id: 20,
    home: false
  },
  {
    name: 'patriots',
    abbreviation: 'NE',
    logo: '../assets/img/patriots.jpg', 
    id: 21,
    home: true
  },
  {
    name: 'raiders',
    abbreviation: 'OAK',
    logo: '../assets/img/raiders.jpg', 
    id: 22,
    home: false
  },
  {
    name: 'rams',
    abbreviation: 'LAR',
    logo: '../assets/img/rams.jpg', 
    id: 23,
    home: true
  },
  {
    name: 'ravens',
    abbreviation: 'BAL',
    logo: '../assets/img/ravens.jpg', 
    id: 24,
    home: false
  },
  {
    name: 'redskins',
    abbreviation: 'WAS',
    logo: '../assets/img/redskins.jpg', 
    id: 25,
    home: true
  },
  {
    name: 'saints',
    abbreviation: 'NO',
    logo: '../assets/img/saints.jpg', 
    id: 26,
    home: false
  },
  {
    name: 'sanfrancisco',
    abbreviation: 'SF',
    logo: '../assets/img/sanfrancisco.jpg', 
    id: 27,
    home: true
  },
  {
    name: 'seahawks',
    abbreviation: 'SEA',
    logo: '../assets/img/seahawks.jpg', 
    id: 28,
    home: false
  },
  {
    name: 'steelers',
    abbreviation: 'PIT',
    logo: '../assets/img/steelers.jpg', 
    id: 29,
    home: true
  },
  {
    name: 'texans',
    abbreviation: 'HOU',
    logo: '../assets/img/texans.jpg', 
    id: 30,
    home: false
  },
  {
    name: 'titans',
    abbreviation: 'TEN',
    logo: '../assets/img/titans.jpg', 
    id: 31,
    home: true
  },
  {
    name: 'vikings',
    abbreviation: 'MIN',
    logo: '../assets/img/vikings.jpg', 
    id: 32,
    home: false
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
