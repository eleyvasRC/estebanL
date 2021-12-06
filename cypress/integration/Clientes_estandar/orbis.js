/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos estandar Orbis', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
         //Cargar parametros de parametros.json 
        cy.fixture('parametros').then(function(param){
            this.param = param

            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_orbis.user, this.param.credenciales.credenciales_orbis.password)
        })

         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })

    })

//1 Evento Llegada
it('Evento Lelgada Orbis', function(){
    //Llamar rutina evento 
    cy.rutinaEventosListado
    (this.param.modulos.eventos.Generico1, this.inputs.inputs_orbis, this.param.credenciales.credenciales_orbis.mensaje)
})  

//1 Evento Entrada
    it('Evento Entrada Orbis', function(){
        //Llamar rutina evento 
        cy.rutinaEventosListado
        (this.param.modulos.eventos.entrada, this.inputs.inputs_orbis, this.param.credenciales.credenciales_orbis.mensaje)
    })  
//2 Evento Inicio de carga
    it('Evento Salida Orbis', function(){
        //Llamar rutina evento 
        cy.rutinaEventosListado
        (this.param.modulos.eventos.salida, this.inputs.inputs_orbis, this.param.credenciales.credenciales_orbis.mensaje)

    })  
}) 