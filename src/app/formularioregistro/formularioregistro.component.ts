import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'
import { MercanciasService } from '../services/mercancias.service';
import { ZonasService } from '../services/zonas.service';

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  controlDeZona:boolean=true;

  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    public servicioMercancias:MercanciasService,
    public servicioZonas:ZonasService
    ) { }

  ngOnInit(): void {
    

    this.formulario=this.inicializarFormulario()

    this.servicioZonas.consultarZonas()
    .subscribe(respuesta=>{
          this.datosZonas=respuesta.map((zona:any)=>{
            return {nombre:zona.nombre}
          })
    })
    console.log(this.datosZonas)
  }

  public   analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
   return this.fabricaDiccionario.group({
    iup:['',[Validators.required]],
    tiporemitente:['',[Validators.required]],
    idremitente:['',[Validators.required]],
    nombreremitente:['',[Validators.required]],
    departamentoremitente:['',[Validators.required]],
    municipioremitente:['',[Validators.required]],
    direccionremitente:['',[Validators.required]],
    tipodestinatario:['',[Validators.required]],
    iddestinatario:['',[Validators.required]],
    nombredestinatario:['',[Validators.required]],
    departamentodestinatario:['',[Validators.required]],
    municipiodestinatario:['',[Validators.required]],
    direcciondestinatario:['',[Validators.required]],





  })
   
            
  }

  public buscarMercancia(){

    let iup=this.formulario.value.iup
    this.servicioMercancias.buscarMercanciaPorID(iup)
    .subscribe(
      respuesta=>{
      this.formulario.patchValue({
        tiporemitente:respuesta.tipoRemitente,
        idremitente:respuesta.idRemitente,
        nombreremitente:respuesta.nombreRemitente,
        departamentoremitente:respuesta.departamentoRemitente,
        municipioremitente:respuesta.municipioRemitente,
        direccionremitente:respuesta.direccionRemitente,

        tipodestinatario:respuesta.tipoDestinatario,
        iddestinatario:respuesta.idDestinatario,
        nombredestinatario:respuesta.nombreDestinatario,
        departamentodestinatario:respuesta.departamentoDestinatario,
        municipiodestinatario:respuesta.municipioDestinatario,
        direcciondestinatario:respuesta.direccionDestinatario
      })
      this.formulario.disable()
      this.formulario.controls['iup'].enable()
      this.controlDeZona=false
    },
      

      error=>{console.log(error.error)
      this.formulario.enable()
      this.formulario=this.inicializarFormulario()
      this.controlDeZona=true

      }
    )
  }

}
