import { Component } from '@angular/core';
import {LoadmemoriesService} from "./memories/loadmemories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadmemoriesService]
})
export class AppComponent {
  title = 'memoriesfrontend2';
  constructor(private memoryService: LoadmemoriesService){
  }
}
