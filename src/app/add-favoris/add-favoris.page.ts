import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-favoris',
  templateUrl: './add-favoris.page.html',
  styleUrls: ['./add-favoris.page.scss'],
})
export class AddFavorisPage implements OnInit {

  appareilForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.appareilForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: this.formBuilder.array([])
    });
  }
}