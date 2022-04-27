describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://automationpractice.com/index.php')

    cy.get('#block_top_menu > ul > li:nth-child(3)').click()

    cy.url().should('include', 'id_category=5')

    cy.get('#center_column > ul > li > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default')
      .click()
  })
})
