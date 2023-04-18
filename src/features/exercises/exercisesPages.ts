import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";
import { ExerciseModel } from "../../db/models/exercise";
import { SelectionType } from "./selectionType";

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
  exercisesView: { selectMode: boolean, selectionType: SelectionType } | undefined;
  exercisesForm: ExerciseModel | undefined;
  exerciseDetails: { id: string };
}