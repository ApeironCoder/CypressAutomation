
import fixturesData from "../../fixtures/login.json";
import regLoc from "../../pages/regLocators.json";
import { checkBoxCheck, clickAction, forceClick, generateRandomEmail, typeText, verifyAccountCreated } from "../../commonUtils/genericUtils.cy";

const { firstName, secondName } = fixturesData.name;
const { password } = fixturesData.password;
const { email, telephone, accountCreated } = fixturesData;
const { myAccount, register, checkBox, accountCreatedLoc, continueBtn } = regLoc;
const { firstNameLoc, lastNameLoc, emailId, telephoneNumber, newPassword, confirmPass } = regLoc.registrationPage;

describe('resgistration test case', () => { 
    beforeEach(() => {
        const baseUrl = Cypress.config().baseUrl;
        cy.visit(baseUrl);
    });
    it('registration', () => {
        const baseUrl = Cypress.config().baseUrl;
        cy.visit(baseUrl);
        clickAction(myAccount);
        clickAction(register);
        typeText({ loacatorName: firstNameLoc , text: firstName });
        typeText({ loacatorName: lastNameLoc , text: secondName });
        typeText({ loacatorName: emailId , text: generateRandomEmail() });
        typeText({ loacatorName: telephoneNumber , text: telephone });
        typeText({ loacatorName: newPassword , text: password });
        typeText({ loacatorName: confirmPass , text: password });
        checkBoxCheck({ locator : checkBox });
        forceClick({ element: continueBtn });
        verifyAccountCreated({ element : accountCreatedLoc, value: accountCreated })
    })
})