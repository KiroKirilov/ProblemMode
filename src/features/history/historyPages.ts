import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";
import { Workout } from "../../db/models/workout";

export class HistoryStackPages {
  public static historyHome: PageInfo = {
    name: 'historyHome',
    title: 'History',
  };
}

export interface HistoryStackParamList extends ParamListBase {
  historyHome: undefined;
}