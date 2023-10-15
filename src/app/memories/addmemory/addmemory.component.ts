import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-addmemory',
  templateUrl: './addmemory.component.html',
  styleUrls: ['./addmemory.component.css']
})
export class AddmemoryComponent {
  @ViewChild('addMemoryForm') form: ElementRef;
  // public onSubmitMemory(form: NgForm) {
  //   console.log(form);
  // }
  public onSubmitMemory() {
    console.log(this.form);
  }
}
