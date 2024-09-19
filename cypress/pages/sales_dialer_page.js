class SalesDialerPage{
    verify_sales_dialer_page(){
        cy.get('h1').should('be.visible').and('contain', 'Boost answer rates with the ultimate CRM-compatible power dialer')
    }
}
export default SalesDialerPage;