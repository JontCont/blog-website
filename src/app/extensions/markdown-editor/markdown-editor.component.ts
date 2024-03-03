import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import '@github/markdown-toolbar-element';

@Component({
  selector: 'markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss'],
})
export class MarkdownEditorComponent {
  @Input() data!: string;
  @Output() dataChange = new EventEmitter<string>();
  controlId!: string;
  constructor() {}

  ngOnInit(): void {
    this.controlId = `MarkdownEditor-${Math.floor(100000 * Math.random())}`;
  }
}
