import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  ongoingTraining = false;
  exerciseSubscription: Subscription | undefined;

  constructor(private trainingService: TrainingService){ }

  ngOnInit(){
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(
      exercise => {
        if (exercise.name != ""){
          this.ongoingTraining=true;
        }else{
          this.ongoingTraining=false;
        }
      }
    );
  }

}
