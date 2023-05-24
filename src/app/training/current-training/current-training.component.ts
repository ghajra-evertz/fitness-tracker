import { Component ,EventEmitter, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

import { StopTrainingComponent } from './stop-training.component';
import { every } from 'rxjs';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent {

  @Output() trainingExit = new EventEmitter();

  progress = 0;
  timer:any = 0;

  constructor(private dialog: MatDialog){};

  ngOnInit(){
    this.startOrResumeTimer();
  }

  startOrResumeTimer(){
    this.timer = setInterval(()=>{
      this.progress = this.progress + 1;
      if(this.progress >= 100){
        clearInterval(this.timer);
      }
    }, 200);
  }

  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {data:{
      progress: this.progress
    }});

  dialogRef.afterClosed().subscribe(result =>{
    if (result){
      this.trainingExit.emit();
    }else{
      this.startOrResumeTimer();
    }
  });
}

}
