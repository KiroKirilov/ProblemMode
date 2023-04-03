import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";

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
}

export interface WorkoutStackParamList extends ParamListBase {
  workoutsHome: undefined;
  exercisePicker: { selectMode: boolean } | undefined;
  templateForm: undefined;
}