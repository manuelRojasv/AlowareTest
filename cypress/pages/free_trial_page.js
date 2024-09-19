class FreeTrialPage{
 verify_free_trial_page(){
    cy.get('.text-center').should('be.visible').and('contain', 'Start your trial, no credit card required.')
 }
}
export default FreeTrialPage;