import { Component, type OnInit } from '@angular/core';
import { FileService } from 'src/app/services/FileService';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss'],
})
export class EditorsComponent implements OnInit {
  markdown = {
    title: '',
    subtitle: '',
    content: '',
  } as any;
  constructor(private fileService: FileService) {}
  ngOnInit(): void {}
  onSave(): void {

  }
}
