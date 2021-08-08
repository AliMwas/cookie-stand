'use strict';



let seattle = {
    
    location: seattle,
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookiesPerCustomer: 6.3,
    customersForEachHour:[],
    cookiesPerHour: [],
    timeOpening: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],

   
    
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      },
      avgCustomerPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.customersForEachHour.push(customersPerHour(this.minHourlyCustomers,this.maxHourlyCustomers))
    
}

     

      },
      cookiesSold : function (){
    
        for(let i =0 ; i < timeOpening.length; i++){
            
            this.cookiesPerHour.push (Math.floor( (this.customersForEachHour[i]) * (this.averageCookiesPerCustomer)));
            

        }    
        
    },
    

}
seattle.avgCustomerPerHour();
seattle.cookiesSold();



 let tokyo = {
    location: tokyo,
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    customersForEachHour:[],
    cookiesPerHour: [],
    timeOpening: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],

    
    
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      },
      avgCustomerPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.customersForEachHour.push(customersPerHour(this.minHourlyCustomers,this.maxHourlyCustomers))
    
}
},
cookiesSold : function (){
    
    for(let i =0 ; i < timeOpening.length; i++){
        
        this.cookiesPerHour.push (Math.floor( (this.customersForEachHour[i]) * (this.averageCookiesPerCustomer)));
    
}

}

}

tokyo.avgCustomerPerHour();
tokyo.cookiesSold();


let dubai = {
    location: dubai,
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 3.7,
    customersForEachHour:[],
    cookiesPerHour: [],
    timeOpening: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],

    
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      },
      avgCustomerPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.customersForEachHour.push(customersPerHour(this.minHourlyCustomers,this.maxHourlyCustomers))
    
      }
    
    },
cookiesSold : function (){
    
    for(let i =0 ; i < timeOpening.length; i++){
        
        this.cookiesPerHour.push (Math.floor( (this.customersForEachHour[i]) * (this.averageCookiesPerCustomer)));
    
}


}
}
dubai.avgCustomerPerHour();
dubai.cookiesSold();


let paris = {
    location: paris,
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    customersForEachHour:[],
    cookiesPerHour: [],
    timeOpening: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],

    
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      },
      avgCustomerPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.customersForEachHour.push(customersPerHour(this.minHourlyCustomers,this.maxHourlyCustomers))
    
      }
    
    },
    cookiesSold : function (){
    
        for(let i =0 ; i < timeOpening.length; i++){
            
            this.cookiesPerHour.push (Math.floor( (this.customersForEachHour[i]) * (this.averageCookiesPerCustomer)));
        
    }
    
    
    }
    }


    paris.avgCustomerPerHour();
    paris.cookiesSold();

let lima = {
    location: lima,
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookiesPerCustomer: 4.6,
    customersForEachHour:[],
    cookiesPerHour: [],
    timeOpening: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', 'Total: '],

    
    customersPerHour: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
      },
      avgCustomerPerHour: function (){
        
        for (let i = 0; i < timeOpening.length; i++) {
    this.customersForEachHour.push(customersPerHour(this.minHourlyCustomers,this.maxHourlyCustomers))
    
      }
    
    },
    
    cookiesSold : function (){
    
        for(let i =0 ; i < timeOpening.length; i++){
            
            this.cookiesPerHour.push (Math.floor( (this.customersForEachHour[i]) * (this.averageCookiesPerCustomer)));
        
    }
    
    
    }

}
    lima.avgCustomerPerHour();
    lima.cookiesSold();

    

