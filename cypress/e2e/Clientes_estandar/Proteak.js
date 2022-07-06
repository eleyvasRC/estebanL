/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos Clientes Estandar', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
    
        cy.fixture('parametros').then(function(param){
            this.param = param

            //Llamar rutina login
            cy.login
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_proteak.user, this.param.credenciales.credenciales_proteak.password)
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
        (this.param.modulos.planeacion.carga_citas, this.param.archivos.carga_citas_txt_proteak,this.param.archivos.nume_citas)
        
    })  
    //Fin CP


    //CP evento Exit
     it('Evento Salida', function(){
       
        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.salida, this.inputs.inputs_proteak, this.param.credenciales.credenciales_proteak.mensaje)
        
    })
    //Fin CP

        //CP evento Generic_01
     it('Evento Activacion de Embarque', function(){
       
        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.generico_01, this.inputs.inputs_proteak, this.param.credenciales.credenciales_proteak.mensaje)
        
    })
    //Fin CP

            //CP evento Generic_02
     it('Evento Generico 2', function(){
       
        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.generico_02, this.inputs.inputs_proteak, this.param.credenciales.credenciales_proteak.mensaje)
        
    })
    //Fin CP

//comentario para cambios
})