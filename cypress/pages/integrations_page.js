class IntegrationsPage{
    verify_integrations_page(){
        cy.get('h1').should('contain', 'See phone calls, texts and call recordings to your CRM')
    }  
}
export default IntegrationsPage;