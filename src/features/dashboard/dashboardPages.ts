import { ParamListBase } from "@react-navigation/native";
import { PageInfo } from "../../common/pageInfo";

export class DashboardStackPages {
  public static dashboardHome: PageInfo = {
    name: 'dashboardHome',
    title: 'Dashboard',
  };
}

export interface DashboardStackParamList extends ParamListBase {
  dashboardHome: undefined;
}