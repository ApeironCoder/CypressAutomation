
// This is the function for the clickAction 
export function clickAction (locatorbtn) {
    cy.contains(locatorbtn).click();
}

// This is the function for the typeText 
export const typeText = ({ loacatorName: locator , text: Name }) => {
    cy.get(locator).type(Name);
}

// This is the function for the checkBox to checked 
export const checkBoxCheck = ({ locator : checkbox }) => {
    cy.get(checkbox).check();
}

// This is the function for the account to be verified after been created 
export const verifyAccountCreated = ({ element : locator , value: text }) => {
    cy.get(locator).should('contain.text', text );
}

// This is the function for the click action should be a forceful one
export const forceClick = ({ element : locator }) => {
    cy.get(locator).click({ force: true});
}

// This is the function for the random email generation 
export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `testuser_${randomString}@example.com`;
  }
