describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://automationpractice.com/index.php')

    cy.get('#block_top_menu > ul > li:nth-child(3)').click()

    cy.url().should('include', 'id_category=5')

    cy.get('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
      .click()

    cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')
      .click()

    cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')
      .click()
      
    cy.get('#email')
      .type('icesiinteractiva@yopmail.com')
      
    cy.get('#passwd')
      .type('icesi123')

    cy.get('#SubmitLogin')
      .click()

    cy.get('#center_column > form > p > button')
      .click()
      
    cy.get('#cgv')
      .click()

    cy.get('#form > p > button > span')
      .click()

    cy.get('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')
      .click()

    cy.get('#cart_navigation > button')
      .click()

    cy.get('#center_column > div > p > strong')
      .should('have.text', 'Your order on My Store is complete.')
  })
})
