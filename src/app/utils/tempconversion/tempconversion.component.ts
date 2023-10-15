import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tempconversion',
  templateUrl: './tempconversion.component.html',
  styleUrls: ['./tempconversion.component.css']
})
export class TempconversionComponent implements OnInit{
  fahrenheit: number;
  celsius: number;

  constructor(private route: ActivatedRoute){
/*    this.fahrenheit;
    this.celsius;*/
  }


  ngOnInit(): void {
    this.celsius = this.fahrenheit;
    this.route.snapshot.params['celsius'] = this.fahrenheit + 10;
  }
  handleChange(val: string | null, type: "celsius" | "fahrenheit") {
    if (val === null) {
      this.celsius = 0;
      this.fahrenheit = 32;
      return;
    }
    const temp = Number(val);
    if (type === "celsius") {
      this.fahrenheit = +((temp * 9) / 5 + 32).toFixed(2);
    } else {
      this.celsius = +(((temp - 32) * 5) / 9).toFixed(2);
    }
  }
}
