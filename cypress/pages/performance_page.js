class PerformancePage{
    verify_performance_page(){
        cy.get('h1').should('contain', 'Contact Center software built to work smarter, not harder.')
    }
}
export default PerformancePage