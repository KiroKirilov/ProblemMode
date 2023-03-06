import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";

export class WorkoutStackPages {
  public static workoutsHome: PageInfo = {
    name: 'workoutsHome',
    title: 'Workout',
  };

  public static activeWorkout: PageInfo = {
    name: 'activeWorkout',
    title: 'activeWorkout',
  };

  public static exercisePicker: PageInfo = {
    name: 'exercisePicker',
    title: 'exercisePicker',
  };
}

export interface WorkoutStackParamList extends ParamListBase {
  workoutsHome: undefined;
  activeWorkout: undefined;
  exercisePicker: { selectMode: boolean } | undefined;
}