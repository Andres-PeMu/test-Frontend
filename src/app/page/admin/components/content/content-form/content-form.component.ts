import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ContentService } from './../../../../../core/services/content/content.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.scss']
})
export class ContentFormComponent {

  file: File | undefined;
  image: string | undefined ;



  hasUnitNumber = false;

  states = [
    {name: 'Deporte', abbreviation: 'Dte'},
    {name: 'Musica', abbreviation: 'Mca'},
    {name: 'Tecnologia', abbreviation: 'Tgia'},
    {name: 'Peliculas', abbreviation: 'Plas'},
    {name: 'Noticias', abbreviation: 'Ncias'},
  ];

    constructor(
    private fb: FormBuilder,
    private contentService:ContentService,
    private router: Router,
    ) {
    }

    addressForm = this.fb.group({
      img: [null],
      title: [null, Validators.required],
      description: [null, Validators.required],
      detailedDescription: [null, Validators.required],
      link: [null, Validators.required],
      state: [null, Validators.required],
      creationDate: [null],
      finisDate: [null],
    });

    uploadFile(event: Event){
      const storage = getStorage();
      const target= event.target as HTMLInputElement;
      this.file = (target.files as FileList)[0];
      const mountainImagesRef = ref(storage, `images/${this.file.name}`);
      uploadBytes(mountainImagesRef, this.file)
      .finally(()=>{
        getDownloadURL(mountainImagesRef)
        .then((image) => {
          this.image = image;
        });
      })
      .then(() => {
        console.log('Uploaded a blob or file!');
      });
    }

  onSubmit(event:Event): void {
    event.preventDefault();
    this.addressForm.value.img = this.image;
    this.addressForm.value.creationDate = new Date();
    const content = this.addressForm.value;
    console.log(this.addressForm.value)
    this.contentService.addContent(content)
    .then(() => {
      this.router.navigate(['/admin']);
    }).catch(error =>{
      console.log(error)
    })
  }
}
