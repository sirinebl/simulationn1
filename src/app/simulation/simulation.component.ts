import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  url =""
  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
selectFile(event) {
if (event.target.files){
var reader = new FileReader()
reader.readAsDataURL(event.target.files[0])
reader.onload = (event: any) => {
  this.url = event.target.result
}
}}
}
