import { Component} from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent {
  exercises: Exercise[] = [];

  constructor( private trainingService: TrainingService){}

  ngOnInit(){
    this.exercises = this.trainingService.getAvailableExercises();
  }

  onStartTraining (form: NgForm){
    this.trainingService.startExercise(form.value.exercise.id);
  }

}
