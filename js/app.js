'use strict';
let container = document.getElementById('container')
let timeOpening = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ']
let tableEl = document.createElement('table');
container.appendChild(tableEl);

 let  salmonShops = [];
 

function SalmonCookiesShop (location, minHourlyCustomers, maxHourlyCustomers, averageCookies){
this.location = location;
this.minHourlyCustomers = minHourlyCustomers;
this.maxHourlyCustomers = maxHourlyCustomers;
this.averageCookies = averageCookies;
this.total = 0;
this.randomCustomre = [];
this.cookiesHour = [];
salmonShops.push(this);
}
let shop1 = new SalmonCookiesShop ('seatlle', 23, 65,6.3)
let shop2 = new SalmonCookiesShop ('Tokyo', 3, 24,1.2)
let shop3 = new SalmonCookiesShop ('Dubai', 11, 38,3.7)
let shop4 = new SalmonCookiesShop ('Paris', 20, 38,2.3)
let shop5 = new SalmonCookiesShop ('Lima', 2, 16,4.6)

SalmonCookiesShop.prototype.customersPerHour = function() {
      let min;
      let max;
      for(let i = 0; i < timeOpening.length; i++){
        min = Math.ceil(this.minHourlyCustomers);
        max = Math.floor(this.maxHourlyCustomers);
          
      let randCustomre = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomre.push(randCustomre)



}
}
SalmonCookiesShop.prototype.cookiesPerHour = function(){

  for (let i = 0; i < timeOpening.length; i++) {
        this.cookiesHour[i] = Math.ceil(this.randomCustomre[i] * this.averageCookies);
        this.total += this.cookiesHour[i];
        
    }

}

SalmonCookiesShop.prototype.render = function () {
  let trEl= document.createElement('tr');
         tableEl.appendChild(trEl)
         let tdEl1 = document.createElement('td');
         trEl.appendChild(tdEl1);
         tdEl1.textContent = `${this.location}`;
    for (let i=0; i < timeOpening.length; i++)
    {  let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `${this.cookiesHour[i]}`;
     }
    let tdEl5 = document.createElement('td');
     trEl.appendChild(tdEl5);
     tdEl5.textContent = this.total; 

      }

      function createTableHeader() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
     
        let thEl1 = document.createElement('th');
        trEl.appendChild(thEl1);
        thEl1.textContent = '';
     

        for (let i = 0; i < timeOpening.length; i++) {
            let thEl1 = document.createElement('th');
            trEl.appendChild(thEl1);
            thEl1.textContent = `${timeOpening[i]}`;
     
        }
        let thEl10 = document.createElement('th');
        trEl.appendChild(thEl10);
        thEl10.textContent = 'Daily Total';
      }


  let myform = document.getElementById('form');
    myform.addEventListener('submit', addStore);
    function addStore(event) {
    
        event.preventDefault();
        let location = event.target.location.value;
        let minHourlyCustomers = event.target.minHourlyCustomers.value;
        let maxHourlyCustomers = event.target.maxHourlyCustomers.value;
        let averageCookies = event.target.averageCookies.value;
        let newStore = new SalmonCookiesShop (location, minHourlyCustomers, maxHourlyCustomers, averageCookies);
        

        let table = tableEl.rows.length-1;
            tableEl.deleteRow(table);

        newStore.customersPerHour();
        newStore.cookiesPerHour();
        newStore.render();

        createTableFooter();

        }




    createTableHeader();
     
    function createTableFooter(){
      let trEl = document.createElement('tr');
        tableEl.appendChild(trEl)
        let thEl20 = document.createElement('td');
        trEl.appendChild(thEl20);
        thEl20.textContent = 'total';
     
        let newTotal = 0;
        
        for(let i = 0 ; i < timeOpening.length; i++){
            let total = 0;
             
            for(let j = 0 ; j < salmonShops.length; j++){
                total =  total + salmonShops[j].cookiesHour[i];
                newTotal = newTotal + salmonShops[j].cookiesHour[i];
     
        }
         
    let thEl10 = document.createElement('td');
        trEl.appendChild(thEl10);
        thEl10.textContent = total;
      }
        let thEl70 = document.createElement('td');
        trEl.appendChild(thEl70);
        thEl70.textContent = newTotal;
    };

 
    
    

    
    shop1.customersPerHour();
    shop1.cookiesPerHour();
    shop1.render()

    shop2.customersPerHour();
    shop2.cookiesPerHour();
    shop2.render()

    shop3.customersPerHour();
    shop3.cookiesPerHour();
    shop3.render()

    shop4.customersPerHour();
    shop4.cookiesPerHour();
    shop4.render()

    shop5.customersPerHour();
    shop5.cookiesPerHour();
    shop5.render()
    createTableFooter();


  
