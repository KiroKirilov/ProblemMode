import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";
import { SelectionType } from "../exercises/selectionType";

export class DashboardStackPages {
  public static dashboardHome: PageInfo = {
    name: 'dashboardHome',
    title: 'Dashboard',
  };

  public static trackedExercisePicker: PageInfo = {
    name: 'trackedExercisePicker',
    title: 'trackedExercisePicker',
  };
}

export interface DashboardStackParamList extends ParamListBase {
  dashboardHome: undefined;
  trackedExercisePicker: { selectMode: boolean, selectionType: SelectionType } | undefined;
}