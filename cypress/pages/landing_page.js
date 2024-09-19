import FreeTrialPage from "../pages/free_trial_page"
import FeaturesPage from "../pages/features_page"
import SalesDialerPage from "../pages/sales_dialer_page"
import BusinessTextingPage from "../pages/business_texting_page"
import IntegrationsPage from "../pages/integrations_page"
import PerformancePage from "../pages/performance_page"

const freeTrial = new FreeTrialPage()
const features = new FeaturesPage()
const salesDialer = new SalesDialerPage()
const businessTexting = new BusinessTextingPage()
const integrations = new IntegrationsPage()
const performance = new PerformancePage()

class LandingPage{

    open_web_application(){
        cy.visit('https://aloware.com/')
    }

    accept_cookies(){
        cy.get('#header-menu').click({force: true})
        cy.get('#hs-eu-confirmation-button').click({force: true})
    }

    verify_top_bar_main_items() {

        const topBarItems = [
          { text: 'Solutions', href: 'https://aloware.com/solution/' },
          { text: 'Features', href: 'https://aloware.com/features/' },
          { text: 'Integrations', href: 'https://aloware.com/integrations/' },
          { text: 'Pricing', href: 'https://aloware.com/pricing/' },
          { text: 'AI SMS Bot', href: 'https://aloware.com/ai-bot/' }
        ];
      
        topBarItems.forEach((item) => {
          cy.get(`a[href='${item.href}']`).first().should('be.visible').and('contain.text', item.text);
        });
      }

    verify_start_free_trial_buttons() {
        
        cy.get('.call-btn > .btn-hover-colored').click()
        freeTrial.verify_free_trial_page()
        cy.go('back')
        cy.get('.al-cta > .btn-hover-colored').click()
        freeTrial.verify_free_trial_page()
        cy.go('back')
        cy.get('.title-with-btn > h2').scrollIntoView()
        cy.get('picture > .entered').click()
        freeTrial.verify_free_trial_page()
    }

    verify_explore_more_button() {
        cy.get('.f-itembox-desc-1 > .f-itembox-desc-in > .feature-popup-content > .fullsize').scrollIntoView()
        cy.get("[href='/features/sales-power-dialer/']").click({force:true})
        cy.url().should('include', 'features/sales-power-dialer/')
        features.verify_features_page()
    }

    verify_sales_dialer_page(){
        cy.get('.sc-box-1 > .cta-box-hyper > .hyper-hover-darkblue').click()
        cy.url().should('include', 'solutions/sales-dialer')
        salesDialer.verify_sales_dialer_page()
       
    }

    verify_business_texting_page(){
        cy.get('.sc-box-2 > .cta-box-hyper > .hyper-hover-darkblue').click()
        cy.url().should('include', 'solutions/business-texting')
        businessTexting.verify_business_texting_page()
        
    }

    verify_integrations_page(){
        cy.get('.sc-box-3 > .cta-box-hyper > .hyper-hover-darkblue').click()
        cy.url().should('include', 'integrations')
        integrations.verify_integrations_page()
    }

    verify_performance_page(){
        cy.get('.sc-box-4 > .cta-box-hyper > .hyper-hover-darkblue').click()
        cy.url().should('include', 'solutions/contact-center')
        performance.verify_performance_page()
    }  
}
export default LandingPage