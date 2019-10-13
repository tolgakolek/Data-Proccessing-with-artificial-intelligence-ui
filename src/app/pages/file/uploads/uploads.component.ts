import { Component, OnInit } from '@angular/core';
import { Files } from 'src/app/core/models/file.models';
import { FileService } from 'src/app/core/services/file.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})

/**
 * Upload - handling the Form upload with sidebar and content
 */
export class UploadsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  myFiles: FileList;
  dataUrls: any;
  file: Files;
  constructor(private fileServices: FileService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'File Uploads', path: '/', active: true }];

  }
  fileEvent(e) {
   this.readAsDataUrlFile();
  }
  readAsDataUrlFile() {
    var reader = new FileReader();
    reader.readAsDataURL(this.myFiles[0]);
    reader.onload = () => {
      this.file={
        title:this.myFiles[0].name,
        data:reader.result
      }
      this.fileServices.save(this.file).subscribe(res => {
          console.log(res);
      });
    }
  }
}
