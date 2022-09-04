//const cypress = require("cypress");

describe( 'Cypress test for app', () => {

    beforeEach( () => {
        cy.intercept("/api/courses", { fixture: "courses.json"}).as("courses");
        cy.visit("/");
    });

    it('should load home page', () => {
        cy.contains(/All Courses/i);

        cy.wait(["@courses"]);

        cy.get("mat-card").should("have.length", 9);
    });

    it("should display advnced courses", () => {
        cy.get(".mat-tab-label").should("have.length", 2);
        cy.get(".mat-tab-label").last().click();

        cy.get(".mat-tab-body-active .mat-card-title").its("length").should("be.gt", 1);
        cy.get(".mat-tab-body-active .mat-card-title").first()
        .should("contain", "Angular Security Course");
    });
});