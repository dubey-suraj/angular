import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  profileForm = new FormGroup({
    name : new FormControl(''),
    age : new FormControl(''),
    gender : new FormControl(''),
    phone : new FormControl(''),
  });

  data : any = []
  dialog = inject(MatDialog)
  
  constructor(){}

  onSubmit(){
    this.data.push(this.profileForm.value)
    console.log(this.data)
  }
  }
