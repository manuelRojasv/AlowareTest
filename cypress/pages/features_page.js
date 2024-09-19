class FeaturesPage{
    verify_features_page(){
        cy.get('.all-f').should('be.visible').and('contain', 'All features')
    }
}
export default FeaturesPage;