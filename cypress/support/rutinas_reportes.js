import 'cypress-file-upload';

//Rutina Carga de citas
Cypress.Commands.add("rutinaCargaArchivosTXT", (url_cargaCitas, fileName, numCitas ) => {
    
    //Preparado para interceptar FeatureConfig de pantalla
    cy.intercept('POST', '**/FeatureConfig').as('clientConfig')
    
    //Ingresar a modulo
    cy.get('.has_sub a[href*="feature_key='+url_cargaCitas+'"]').click({ force: true })
    cy.wait(2000)

    cy.wait('@clientConfig').should(({request,response}) => {
        //expect(request.body).to.include('arg00=140')
    })
    