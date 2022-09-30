import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

  formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
  }

  public   analizarFormulario():void{
    console.log(this.formulario.value)
  }

  public inicializarFormulario():FormGroup{
   return this.fabricaDiccionario.group({
    iup:['david',[Validators.required,Validators.minLength(6)]],
    tiporemitente:['empresa',[Validators.required]],
    idremitente:['12345',[Validators.required]],
    nombreremitente:['camila',[Validators.required]],
    departamentoremitente:['antioquia',[Validators.required]],
    municipioremitente:['guarne',[Validators.required]],
    direccionremitente:['cr50#52-51',[Validators.required]],
    tipodestinatario:['persona',[Validators.required]],
    iddestinatario:['145789',[Validators.required]],
    nombredestinatario:['valentina',[Validators.required]],
    departamentodestinatario:['valle',[Validators.required]],
    municipiodestinatario:['cali',[Validators.required]],
    direcciondestinatario:['calle 40 #50-30',[Validators.required]],





  })
   
            
  }

}
