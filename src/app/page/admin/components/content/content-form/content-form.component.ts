import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { ContentService } from './../../../../../core/services/content/content.service'

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent {

  file: File | undefined;

  addressForm = this.fb.group({
    // company: null,
    title: [null, Validators.required],
    description: [null, Validators.required],
    link: [null, Validators.required],
    // city: [null, Validators.required],
    detailedDescription: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    state: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Deporte', abbreviation: 'Dte'},
    {name: 'Musica', abbreviation: 'Mca'},
    {name: 'Tecnologia', abbreviation: 'Tgia'},
    {name: 'Peliculas', abbreviation: 'Plas'},
    {name: 'Noticias', abbreviation: 'Ncias'},
  ];

  uploadFile(event: Event){
    const storage = getStorage();
    const target= event.target as HTMLInputElement;
    this.file = (target.files as FileList)[0];
    const mountainImagesRef = ref(storage, `images/${this.file.name}`);
    uploadBytes(mountainImagesRef, this.file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }



  constructor(
    private fb: FormBuilder,
    private contentService:ContentService,
    ) {}

  onSubmit(event:Event): void {
    event.preventDefault();
    console.log(this.addressForm.value)
    const content = this.addressForm.value;
    this.contentService.addContent(content)
    .finally()
    .then((newProduct) => {
      console.log(newProduct);
    }).catch(error =>{
      console.log(error)
    })
  }
}
