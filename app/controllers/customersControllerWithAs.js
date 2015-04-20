function CustomersController() {
    this.sortBy = 'name';
    this.reverse = false;

    this.customers = [{joined: '2000-12-02', name: 'Rama', city: 'Orem', orderTotal: 9.9956}, {joined: '2012-07-13', name: 'Pavan', city: 'North Sydney', orderTotal: 8.3444}, {joined: '2005-10-21', name: 'Rajesh', city: 'Wollstonecraft', orderTotal: 11.2322}, {joined: '1995-09-10', name: 'Vijay', city: 'St Leonards', orderTotal: 49.5500}, {joined: '2004-08-29', name: 'Bhavya', city: 'Willoughby', orderTotal: 21.2332}, {joined: '2013-03-31', name: 'Swetha', city: 'Waterloo', orderTotal: 3.5000}, {joined: '2009-12-18', name: 'Prashanth', city: 'Ryde', orderTotal: 21.5600}];
    this.doSort = function (propName) {
        this.sortBy = propName;
        this.reverse = !this.reverse;
    };
}