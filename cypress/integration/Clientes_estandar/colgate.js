/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos estandar Colgate', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
         //Cargar parametros de parametros.json 
        cy.fixture('parametros').then(function(param){
            this.param = param

            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_colgate.user, this.param.credenciales.credenciales_colgate.password)
        })

         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })

    })

//1 Evento Entrada
    it('Evento Entrada AYVI', function(){
        //Llamar rutina evento entrada
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.entrada, this.inputs.inputs_colgate, this.param.credenciales.credenciales_colgate.mensaje)
    })  
//2 Evento Inicio de carga
    it('Evento Inicio de carga AYVI', function(){
        //Llamar rutina evento entrada
        cy.rutinaEventosListado
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_colgate, this.param.credenciales.credenciales_colgate.mensaje)

    })  
}) 