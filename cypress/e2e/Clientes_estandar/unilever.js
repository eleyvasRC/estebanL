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
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_unilever.user, this.param.credenciales.credenciales_unilever.password)
        })

         //Cargar Inputs de inputs.json
        cy.fixture('inputs').then(function(inputs){
            this.inputs = inputs
        })
       
    })

     //CP Carga de citas
     it('Carga de citas Unilever', function(){

        //Llamar rutina rutinaCargaCitastxt
        cy.rutinaCargaArchivosTXT
        (this.param.modulos.planeacion.carga_citas, this.param.archivos.carga_citas_txt_unilever,this.param.archivos.nume_citas)
        
    })  
    //Fin CP


    //CP evento Entrada
     it('Evento Entrada Unilever', function(){
        
        //Llamar rutina rutinaEventosFormulario
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.entrada, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

    })   
    it('Evento Entrega de cajas Unilever', function(){
        
        //Llamar rutina rutinaEventosFormulario
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

    }) 
     
it('Evento Despacho de cajas Unilever', function(){
    
    //Llamar rutina rutinaEventosFormulario
    cy.rutinaEventosListadoMasFormulario
    (this.param.modulos.eventos.fin_carga, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

})

it('Evento Custodia Unilever', function(){
    
    //Llamar rutina rutinaEventosFormulario
    cy.rutinaEventosListado
    (this.param.modulos.eventos.docs, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

})
it('Evento Liberacion Unilever', function(){
    
    //Llamar rutina rutinaEventosFormulario
    cy.rutinaEventosListadoMasFormulario
    (this.param.modulos.eventos.generico_01, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

})
it('Evento Salida Unilever', function(){
    
    //Llamar rutina rutinaEventosFormulario
    cy.rutinaEventosListadoMasFormulario
    (this.param.modulos.eventos.salida, this.inputs.inputs_unilever, this.param.credenciales.credenciales_unilever.mensaje)

})
})