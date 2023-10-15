import {Component, OnInit} from '@angular/core';
import {IMemory, Memory, MemoryComponent} from "../memory/memory.component";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadmemoriesService} from "../loadmemories.service";

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css'],
  providers: []
})
export class MemoriesComponent implements OnInit{
  public memories: IMemory[] = [];
  public memoriessvc: IMemory[] = [];
  constructor(private route: ActivatedRoute, private router: Router, private memoryService: LoadmemoriesService) {
  }

  ngOnInit(): void {
    // this.memories = this.memoryService.getMemories();
    this.memories = [new Memory(1, "My first memory", "I was born in a small town in the middle of nowhere.")];
    this.memoriessvc = this.memoryService.getMemories()
  }
}
