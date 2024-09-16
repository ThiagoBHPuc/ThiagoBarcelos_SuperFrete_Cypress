describe('Super Frete', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Retornar false para impedir que o Cypress
        return false
    })
  it('Teste Thiago Barcelos_Caminho_Feliz', () => {
    cy .viewport ( 1366 , 768 ) 
      .visit('https://web.superfrete.com')
      .wait(10000) //Após acessar a URL acima aguardar 10 segundos; 
      .get('#originPostcode').type('08090284') // Irá inserir o cep no campo 'CEP de Origem'
      .get('#weight').click() // irá clicar no campo Peso
      .wait(2000) // Após clicar no campo Peso, irá aguardar 2 segundos para que a lista de peso seja exibida
      .get('[data-value="0.3"]').click() //irá selecionar o peso de 300g 
      .get('#packageHeight').click() // irá clicar no campo 'Altura'
      .get('#packageHeight').type(2)// irá inserir o valor 2 no campo Altura
      .get('#packageWidth').click() // irá clicar no campo largura
      .get('#packageWidth').type(11) // irá inserir o valor 11 no campo Largura
      .get('#packageDepth').click() //Irá clicar no campo Comprimento
      .get('#packageDepth').type(16) // Irá inserir o valor 16 no campo Comprimento.
      .get('#destinationPostcode').click() // Irá clicar no campo CEP de Destino
      .get('#destinationPostcode').type('05407002')// Irá inserir o valor 05407002 no campo CEP de DESTINO
      .get('[data-cy="calculator-submit"]').click() // irá clicar no campo CALCULAR FRETE COM DESCONTO
        })

        it.only('Teste Thiago Barcelos_Erros_propositais', () => {
          cy .viewport ( 1366 , 768 )
            .visit('https://web.superfrete.com')
            .wait(10000) //Após acessar a URL acima aguardar 10 segundos; 
            .get('#originPostcode').type('31720-300') // Irá inserir o cep no campo 'CEP de Origem'
            .get('#weight').click() // irá clicar no campo Peso
            .wait(2000) // Após clicar no campo Peso, irá aguardar 2 segundos para que a lista de peso seja exibida
            .get('[data-value="0.3"]').click() //irá selecionar o peso de 300g 
            .get('#packageHeight').click() // irá clicar no campo 'Altura'
            .get('#packageHeight').type(A)// irá inserir a letra A no campo Altura
            .get('#packageWidth').click() // irá clicar no campo largura
            .get('#packageWidth').type(11) // irá inserir o valor 11 no campo Largura
            .get('#packageDepth').click() //Irá clicar no campo Comprimento
            .get('#packageDepth').type(200) // Irá inserir o valor 16 no campo Comprimento.
            .get('#destinationPostcode').click() // Irá clicar no campo CEP de Destino
            .get('#destinationPostcode').type('05407002')// Irá inserir o valor 05407002 no campo CEP de DESTINO
            .get('[data-cy="calculator-submit"]').click() // irá clicar no campo CALCULAR FRETE COM DESCONTO
              })      
      })