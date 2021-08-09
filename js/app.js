'use strict';
let container = document.getElementById('container')
let timeOpening = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']

let seattle = {
    
    location: 'seattle',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookies: 6.3,
    randomCustomre:[],
    cookiesPerHour:[],
    total: 0,
    

   
    
    customersPerHour: function () {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)
      }
    
    },
      
      cookiesPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.cookiesPerHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
    this.total += this.cookiesPerHour[i];
    
}

     

      },
      render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.location;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < timeOpening.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${timeOpening[i]} ${this.cookiesPerHour[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
    }


      }
      


seattle.customersPerHour();
seattle.cookiesPerHour();
seattle.render();


 let tokyo = {
    location: 'tokyo',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookies: 1.2,
    randomCustomre:[],
    cookiesPerHour: [],
    total: 0,
    

   
    
    customersPerHour: function () {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)
      }
    
    },
      
    cookiesPerHour: function (){
        
      for (let i = 0; i < timeOpening.length; i++) {
  this.cookiesPerHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
  this.total += this.cookiesPerHour[i];
  
}

     

      },
      render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.location;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < timeOpening.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${timeOpening[i]} ${this.cookiesPerHour[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
    }


      }
    


tokyo.customersPerHour();
tokyo.cookiesPerHour();
tokyo.render();



let dubai = {
    location: 'dubai',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookies: 3.7,
    randomCustomre:[],
    cookiesPerHour: [],
    total: 0,
    

   
    
    customersPerHour: function () {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)
      }
    
    },
      
    cookiesPerHour: function (){
        
      for (let i = 0; i < timeOpening.length; i++) {
  this.cookiesPerHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
  this.total += this.cookiesPerHour[i];
  
}
     

      },
      render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.location;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < timeOpening.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${timeOpening[i]} ${this.cookiesPerHour[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
    }


      }
    


dubai.customersPerHour();
dubai.cookiesPerHour();
dubai.render();


let paris = {
    location: 'paris',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookies: 2.3,
    randomCustomre:[],
    cookiesPerHour: [],
    total: 0,
    

   
    
    customersPerHour: function () {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)
      }
    
    },
      
    cookiesPerHour: function (){
        
      for (let i = 0; i < timeOpening.length; i++) {
  this.cookiesPerHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
  this.total += this.cookiesPerHour[i];
  
}

     

      },
      render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.location;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < timeOpening.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${timeOpening[i]} ${this.cookiesPerHour[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
    }
    

}
paris.customersPerHour();
paris.cookiesPerHour();
paris.render();


let lima = {
    location: 'lima',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookies: 4.6,
    randomCustomre:[],
    cookiesPerHour: [],
    total: 0,
    

   
    
    customersPerHour: function () {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)
      }
    
    },
      
    cookiesPerHour: function (){
        
      for (let i = 0; i < timeOpening.length; i++) {
  this.cookiesPerHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
  this.total += this.cookiesPerHour[i];
  
}
     

      },
      render: function () {
        let h2EL = document.createElement('h2');
        h2EL.textContent = this.location;
        container.appendChild(h2EL);
        let ulEl = document.createElement('ul');
        container.appendChild(ulEl);
        for (let i = 0; i < timeOpening.length; i++) {
            let liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${timeOpening[i]} ${this.cookiesPerHour[i]} cookies`;
        }
        let totalEl = document.createElement('li');
        ulEl.appendChild(totalEl);
        totalEl.textContent = `Total ${this.total} cookies`;
    }
    

}
lima.customersPerHour();
lima.cookiesPerHour();
lima.render();


