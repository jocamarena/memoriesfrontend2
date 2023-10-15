import {Injectable, OnChanges, OnInit} from '@angular/core';
import {IMemory, Memory} from "./memory/memory.component";

@Injectable({
  providedIn: 'root'
})
export class LoadmemoriesService implements OnInit, OnChanges{
private memories: IMemory[] = [new Memory(0, "My first memory", "I was born in a small town in the middle of nowhere."),
  new Memory(1, "My second memory", "I first learned to drive while preparing to test for my license."),
  new Memory(2, "My third memory", "I have traveled around the world, my favorite destination was Cairo, Egypt."),
  new Memory(3, "My fourth memory", "I taught myself to swim at 35 years old.")];
  constructor() { }
  ngOnInit(): void {
/*    this.memories = [new Memory(0, "My first memory", "I was born in a small town in the middle of nowhere."),
      new Memory(1, "My second memory", "I first learned to drive while preparing to test for my license."),
      new Memory(2, "My third memory", "I have traveled around the world, my favorite destination was Cairo, Egypt."),
      new Memory(3, "My fourth memory", "I taught myself to swim at 35 years old.")];*/
  }
  ngOnChanges(): void {
  }
  public getMemories(): IMemory[] {
    console.log("getMemories called with length: " + this.memories.length);
    return this.memories;
  }
  public getMemory(id: number): IMemory {
    console.log("getMemory called with id: " + id);
    return this.memories[id + 1];
  }
}
