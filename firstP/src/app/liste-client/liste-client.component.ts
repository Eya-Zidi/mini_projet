import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste-client',
  imports: [NgFor],
  templateUrl: './liste-client.component.html',
  styleUrl: './liste-client.component.css'
})
export class ListeClientComponent implements OnInit {
  
  l?:Client[];
  ngOnInit(): void {
    this.l=[
      {id:1,name:"souhe",age:20,compte:{id:1,type:'epargne',solde:1500}},{id:2,name:"asma",age:23,compte:{id:2,type:'courant',solde:-1500}}];
  }


}
