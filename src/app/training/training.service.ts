import { Exercise } from "./exercise.module";
import { Subject } from "rxjs";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercises: Exercise[] = [
        {id: 'crunches', name: 'crunches', duration:30, calories: 8},
        {id: 'touch-toes', name: 'Touch Toes', duration:180, calories: 15},
        {id: 'side-lunges', name: 'Side Lunges', duration:120, calories: 18},
        {id: 'burpees', name: 'Burpees', duration:60, calories: 8},
    ];
    private runningExercise: Exercise = {id: '', name: '', duration:0, calories: 0};
    private exercises: Exercise[] = [];

    getAvailableExercises(){
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string){
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId) || {id: 'crunches', name: 'crunches', duration:30, calories: 8};
        this.exerciseChanged.next({... this.runningExercise});
        console.log(this.runningExercise)
    }

    completeExercise(){
        this.exercises.push({... this.runningExercise, date: new Date(),state:"completed"});
        this.runningExercise = {id: '', name: '', duration:0, calories: 0};
        this.exerciseChanged.next({id: '', name: '', duration:0, calories: 0});
        console.log(this.exercises)
    }

    cancelExercise(progress: number){
        this.exercises.push({... this.runningExercise,duration: this.runningExercise.duration *(progress/100),
        calories: this.runningExercise.calories * (progress/100),
        date: new Date(),state:"cancelled"});
        this.runningExercise = {id: '', name: '', duration:0, calories: 0};
        this.exerciseChanged.next({id: '', name: '', duration:0, calories: 0});
        console.log(this.exercises)
    }

    getRunningExercise(){
        return {... this.runningExercise}
    }
}