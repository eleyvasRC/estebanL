/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos estandar AYVI', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
         //Cargar parametros de parametros.json 
        cy.fixture('parametros').then(function(param){
            this.param = param

            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_ayvi.user, this.param.credenciales.credenciales_ayvi.password)
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
        (this.param.modulos.eventos.entrada, this.inputs.inputs_ayvi, this.param.credenciales.credenciales_ayvi.mensaje)
    })  
//2 Evento Inicio de carga
    it('Evento Inicio de carga AYVI', function(){
        //Llamar rutina evento 
        cy.rutinaEventosListado
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_ayvi, this.param.credenciales.credenciales_ayvi.mensaje)

    })  
//3 Evento Fin de carga
    it('Evento Fin de carga AYVI', function(){
        //Llamar rutina evento 
        cy.rutinaEventosListado
        (this.param.modulos.eventos.fin_carga, this.inputs.inputs_ayvi, this.param.credenciales.credenciales_ayvi.mensaje)

    })  
//3 Evento Documentos
    it('Evento Docuemntos AYVI', function(){
        //Llamar rutina evento 
        cy.rutinaEventosListado
        (this.param.modulos.eventos.docs, this.inputs.inputs_ayvi, this.param.credenciales.credenciales_ayvi.mensaje)

    }) 
//4 Evento Salida
    it('Evento Salida AYVI', function(){
    //Llamar rutina evento 
    cy.rutinaEventosListado
    (this.param.modulos.eventos.salida, this.inputs.inputs_ayvi, this.param.credenciales.credenciales_ayvi.mensaje)

    })
})