/// <reference types="Cypress"/>
//Suite de primeros CP
describe('Detonación de eventos Clientes Estandar', function()
{
    beforeEach(() => {
        //Llamar rutina carga de configuración cliente
        //Cargar parametros de parametros.json
        cy.fixture('parametros').then(function(param){
            this.param = param
            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_kimberly.user, this.param.credenciales.credenciales_kimberly.password)
        })
         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })
    })
     //CP Carga de citas
     it('Carga de citas', function(){
        //Llamar rutina rutinaCargaCitastxt
        cy.rutinaCargaArchivosTXT
        (this.param.modulos.planeacion.carga_citas, this.param.archivos.carga_pedidos_txt_kimberly,this.param.archivos.nume_citas)
    })  
    //Fin CP
     //CP evento Entrada
     it('Evento  Entrada', function(){
        //rutina evento entrada
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.entrada, this.inputs.inputs_kimberly, this.param.credenciales.credenciales_kimberly.mensaje)
        
    }) 
    //fin evento entrada
    //evento de incio de carga
     it('Evento Inicio de Carga', function(){
        //Llamar rutina rutinaEventosFormulario
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_kimberly, this.param.credenciales.credenciales_kimberly.mensaje)
    }) 
    //fin de carga 
     //CP evento documentos
     it('Evento documentos', function(){
        //rutina evento documentos
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.docs, this.inputs.inputs_kimberly, this.param.credenciales.credenciales_kimberly.mensaje)
    }) 
    //fin evento entrada
    //CP evento salida
    it('Evento Fin de Carga kimberly', function(){
        //rutina evento salida
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.salida, this.inputs.inputs_kimberly, this.param.credenciales.credenciales_kimberly.mensaje)
    }) 
    //fin evento salida
})