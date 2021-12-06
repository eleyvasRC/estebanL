/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos estandar AUTOZONE', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
         //Cargar parametros de parametros.json 
        cy.fixture('parametros').then(function(param){
            this.param = param

            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_autozone.user, this.param.credenciales.credenciales_autozone.password)
        })

         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })

    })

//1 Evento Inicio de carga
    it('Evento Inicio de carga AUTOZONE', function(){
        //Llamar rutina evento entrada
        cy.rutinaEventosListado
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)

    })

//2 Evento Fin de carga
it('Evento Inicio de carga AUTOZONE', function(){
    //Llamar rutina evento entrada
    cy.rutinaEventosListado
    (this.param.modulos.eventos.fin_carga, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)

    })

//3 Evento Entrada
it('Evento Entrada AUTOZONE', function(){
    //Llamar rutina evento entrada
    cy.rutinaEventosFormulario
    (this.param.modulos.eventos.entrada, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)
})  

it('Evento Entega Doc. AUTOZONE', function(){
    //Llamar rutina evento entrada
    cy.rutinaEventosFormulario
    (this.param.modulos.eventos.docsA, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)
})  

})