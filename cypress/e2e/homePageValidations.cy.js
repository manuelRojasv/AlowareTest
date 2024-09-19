import LandingPage from "../pages/landing_page"

describe('validate Aloware landing page', () => {
  const landingPage = new LandingPage()

  beforeEach(() => {
    landingPage.open_web_application()
    
  })

  it('Verify the top bar main items are displayed correctly', () => {
    landingPage.verify_top_bar_main_items()
  })

  it('Verify Free Trial buttons functionality', () => {
    
    landingPage.verify_start_free_trial_buttons()
    
  })

  it('Verify Explore More button functionality', () => {

    landingPage.verify_explore_more_button()

  })

  it('Verify Setup for Sales button functionality', () => {

    landingPage.verify_sales_dialer_page()

  })

  it('Verify Start texting button functionality', () => {

    landingPage.verify_business_texting_page()

  })

  it('Verify See Integrations button functionality', () => {

    landingPage.verify_integrations_page()

  })

  it('Verify Drive Performance button functionality', () => {

    landingPage.verify_performance_page()
  })
})