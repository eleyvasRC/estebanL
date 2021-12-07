/// <reference types="Cypress"/>

//Suite de primeros CP
describe('Detonación de eventos estandar AUTOZONE', function()
{

    beforeEach(() => { 
        
        //Llamar rutina carga de configuración cliente
<<<<<<< HEAD
         //Cargar parametros de parametros.json 
=======
    
        //Cargar parametros de parametros.json 
>>>>>>> e404bd213ca5964197cdd7d43cd85e4c21b5c006
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
<<<<<<< HEAD

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

=======
       
    })


    //CP Carga de pedidos
    it('Carga de pedidos', function(){

        //Llamar rutina rutinaCargaCitastxt
        cy.rutinaCargaArchivosTXT
        (this.param.modulos.planeacion.carga_pedidos, this.param.archivos.carga_pedidos_txt_autozone,this.param.archivos.nume_citas)
        
    })   
    //Fin CP


    //CP evento Entrada
    it('Evento Entrada', function(){
        
        //Llamar rutina rutinaEventosFormulario
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.entrada, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)

    }) 
    //Fin CP evento Entrada


    //CP evento Inicio de carga
     it('Evento Inicio de Carga', function(){
       
        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListado
        (this.param.modulos.eventos.inic_carga, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)

    })
    //Fin CP


    //CP evento Fin de carga
      it('Evento Fin de Carga Ayvi', function(){

        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListado
        (this.param.modulos.eventos.fin_carga, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)
        
    })   
    //Fin CP


    //CP evento Documentos
    it('Evento Documentos Ayvi', function(){

        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.docs, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)
        
    }) 
    //Fin CP

    //CP evento Salida
    it('Evento Salida Autozone', function(){

        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosFormulario
        (this.param.modulos.eventos.salida, this.inputs.inputs_autozone, this.param.credenciales.credenciales_autozone.mensaje)
        
    }) 
    //Fin CP

>>>>>>> e404bd213ca5964197cdd7d43cd85e4c21b5c006
})