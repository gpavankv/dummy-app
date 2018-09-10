import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../shared/services/http-service';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    @ViewChild('appForm') appForm: NgForm;
    formData: FormData;
    constructor(private httpService: HttpService) {
        this.formData = new FormData();
    }
    onSubmit() {
        this.httpService.testConnection().subscribe(data => {
            console.log(data);
        });
    }
}
