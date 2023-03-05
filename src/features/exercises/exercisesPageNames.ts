import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";
import { ExerciseModel } from "../../db/models/exercise";

export class ExercisesStackPages {
  public static exercisesView: PageInfo = {
    name: 'exercisesView',
    title: 'Exercises',
  };

  public static exercisesForm: PageInfo = {
    name: 'exercisesForm',
    title: 'exercisesForm',
  };

  public static exercisesDetails: PageInfo = {
    name: 'exercisesDetails',
    title: 'exercisesDetails',
  };
}

export interface ExerciseStackParamList extends ParamListBase {
  exercisesView: undefined;
  exercisesForm: ExerciseModel | undefined;
  exerciseDetails: { id: string };
}