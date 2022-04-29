describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://automationpractice.com/index.php')

    cy.get('#block_top_menu > ul > li:nth-child(3)').click()

    cy.url().should('include', 'id_category=5')

    // Botón de agregar al carrito (Add to cart)
    cy.get('')
      .click()

    // Complete con continuar procedimiento (Proceed to checkout)
    cy.get('')
      .click()

    cy.get('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')
      .click()
      
    cy.get('#email')
      .type('icesiinteractiva@yopmail.com')
      
    cy.get('#passwd')
      .type('icesi123')

    // Iniciar sesión botón (Login)
    cy.get('')
      .click()

    
    cy.get('#center_column > form > p > button')
      .click()
    
    //Aceptar terminos y condiciones (terms of service)  
    cy.get('')
      .click()

    cy.get('#form > p > button > span')
      .click()
    
    cy.get('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')
      .click()
    
    // Completar pedido (Complete my order)
    cy.get('')
      .click()

    // Corregir la verificación con el texto correcto
    cy.get('#center_column > div > p > strong')
      .should('have.text', 'Your order is complete.')
  })
})
