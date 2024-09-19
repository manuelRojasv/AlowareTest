import LandingPage from "../pages/landing_page"

describe('validate Aloware landing page', () => {
  const landingPage = new LandingPage()

  beforeEach(() => {
    landingPage.open_web_application()
    
  })

  it('verify the top bar main items are displayed ', () => {
    landingPage.verify_top_bar_main_items()
  })

  it('Verify Free Trial buttons functionality', () => {
    
    landingPage.verify_start_free_trial_buttons()
    
  })

  it('Verify Explore More button functionality', () => {

    landingPage.verify_explore_more_button()

  })

  it('Verify Sales Dialer Page functionality', () => {

    landingPage.verify_sales_dialer_page()

  })

  it('Verify Business Texting Page functionality', () => {

    landingPage.verify_business_texting_page()

  })

  it('Verify Integrations Page functionality', () => {

    landingPage.verify_integrations_page()
    cy.go('back')
  })

  it('Verify Performance Page functionality', () => {

    landingPage.verify_performance_page()
  })
})