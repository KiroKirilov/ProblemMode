import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";
import { Workout } from "../../db/models/workout";

export class WorkoutStackPages {
  public static workoutsHome: PageInfo = {
    name: 'workoutsHome',
    title: 'Workout',
  };

  public static exercisePicker: PageInfo = {
    name: 'exercisePicker',
    title: 'exercisePicker',
  };

  public static templateForm: PageInfo = {
    name: 'templateForm',
    title: 'templateForm',
  };

  public static templateDetails: PageInfo = {
    name: 'templateDetails',
    title: 'templateDetails',
  };

  public static workoutFinished: PageInfo = {
    name: 'workoutFinished',
    title: 'workoutFinished',
  };
}

export interface WorkoutStackParamList extends ParamListBase {
  workoutsHome: undefined;
  exercisePicker: { selectMode: boolean } | undefined;
  templateForm: { isEdit: boolean } | undefined;
  templateDetails: { templateId: string };
  workoutFinished: {workout: Workout }
}