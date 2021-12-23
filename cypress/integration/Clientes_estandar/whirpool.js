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
            (this.param.ambiente.url_amb, this.param.credenciales.credenciales_whirlpool.user, this.param.credenciales.credenciales_whirlpool.password)
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
        (this.param.modulos.planeacion.carga_citas, this.param.archivos.carga_citas_txt_whirlpool,this.param.archivos.nume_citas)
        
    })  
    //Fin CP

    //CP evento Entrada
     it('Evento Entrada', function(){
       
        //Llamar rutina rutinaEventosListado
        cy.rutinaEventosListadoMasFormulario
        (this.param.modulos.eventos.entrada, this.inputs.inputs_whirlpool, this.param.credenciales.credenciales_whirlpool.mensaje)
    })

 })  
    //Fin CP