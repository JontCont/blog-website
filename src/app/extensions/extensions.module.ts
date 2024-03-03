import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarkdownEditorComponent],
  exports: [MarkdownEditorComponent],
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExtensionsModule {}
