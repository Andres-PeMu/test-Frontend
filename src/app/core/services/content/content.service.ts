import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { content } from 'src/app/models/content.models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentCollection: AngularFirestoreCollection<content>;
  data: Array<any> | undefined = [];
  content : Array<any> | undefined = []

  constructor(
        private readonly afs: AngularFirestore,
    ) {
    this.contentCollection = afs.collection<content>('Contents');
  }

  getContent(){
    return this.contentCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
        const data = a.payload.doc.data() as content;
        return { data };
      }))
    )
  }

  addContent(content:content){
    const id = this.afs.createId();
    const item = { id, ...content };
    return this.contentCollection.add(item);
  }

  updateContent(content:content, id:string){
    return this.afs.doc<content>(`Contents/${id}`).update(content);
  }

  deleteContent(id:string){
    return this.afs.doc<content>(`Contents/${id}`).delete();
  }

}

