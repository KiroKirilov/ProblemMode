import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";

export class ExercisesStackPages {
  public static exercisesView: PageInfo = {
    name: 'exercisesView',
    title: 'Exercises',
  };

  public static exercisesForm: PageInfo = {
    name: 'exercisesForm',
    title: 'exercisesForm',
  };
}


export interface ExerciseStackParamList extends ParamListBase {
  exercisesView: undefined,
  exercisesForm: undefined,
}