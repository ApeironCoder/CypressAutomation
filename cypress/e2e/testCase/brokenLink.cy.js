
describe('This is for the broken link', () => {
    cy.visit('url')
    let brokenLink = 0;
    let activeLink = 0;
    it('Broken Link', () => {
        cy.get('a').each(($link,index) => {          //Finds all the anchor tag
          const href = $link.attr('href');     //Finds all the href link for the attribute 
          if(href){
            cy.request({ url: href , failOnStatusCode:false }).then((response) => {
                if(response.status >= 400){
                    cy.log(`*** link ${index +1} is the broken link *** $href`)
                    brokenLink++
                }
                else {
                    cy.log(`*** link ${index +1} is the active link *** $href`)
                    activeLink++ 
                }
            })
          }

        }).then(($link) => {
            const totalLinks = $link.lenght;
            cy.log(`*** total links *** ${totalLinks}`);
            cy.log(`*** broken links *** ${brokenLink}`);
            cy.log(`*** active links *** ${activeLink}`);
        })
    })

})