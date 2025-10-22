
it('should change currencies', () => {
    cy.prompt([
        "visit http://store.angulartraining.com",
        "click on the USD button and then change the currency to EUR",
        "all license plate prices must display the euro symbol now ",
        "The New Jersey plate price section shows a price of €12.54"
    ]);
});
