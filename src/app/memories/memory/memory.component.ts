import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MemoriesComponent}  from "../memories/memories.component";
import { LoadmemoriesService} from "../loadmemories.service";

export interface IMemory {
  id: number;
  title: string;
  description: string;
}
export class Memory implements IMemory{
  constructor(public id: number, public title: string, public description: string) {
  }
}
@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
  providers: []
})
export class MemoryComponent implements OnInit{
  public memory: IMemory = {id:0, title:"", description:""};
  constructor(private route: ActivatedRoute, private router: Router, private memoryService: LoadmemoriesService){
  }

  ngOnInit(): void {
    console.log("MemoryComponent ngOnInit called with id: " + this.route.snapshot.params['id']);
    console.log("Memory object :" + this.memoryService.getMemories().at(this.route.snapshot.params['id']));
      this.memory = this.memoryService.getMemories().at(this.route.snapshot.params['id']);
      this.route.params.subscribe(params => {
        this.memory = this.memoryService.getMemories().at(params['id']);
      });
  }
}
