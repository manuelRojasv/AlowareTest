class BusinessTextingPage{
    verify_business_texting_page(){
        cy.get('h1').should('be.visible').and('contain', 'Text your way to spectacular success with Aloware’s Business Texting')
    }
}
export default BusinessTextingPage