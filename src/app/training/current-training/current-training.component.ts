import { Component } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {
  progress = 0;
  timer:any = 0;

  ngOnInit(){
    this.timer = setInterval(()=>{
      this.progress = this.progress + 1;
      if(this.progress >= 100){
        clearInterval(this.timer);
      }
    }, 200);
  }

  onStop(){
    console.log("clicked");
    clearInterval(this.timer);
  }

}
