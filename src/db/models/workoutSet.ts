import { staticImplements } from "../../common/staticImplementsDecorator";
import { SpecialSetTypes } from "../../features/workout/specialSetTypes";
import { BaseModel, BaseModelStatic } from "./baseModel";


export interface WorkoutSet {
  value?: number;
  reps?: number;
  specialType?: SpecialSetTypes;
  isCompleted: boolean;
}

@staticImplements<BaseModelStatic<WorkoutSetModel, {}>>()
export class WorkoutSetModel extends Realm.Object<WorkoutSetModel> implements WorkoutSet {
  value?: number;
  reps?: number;
  specialType?: SpecialSetTypes;
  isCompleted!: boolean;

  static generate(isCompleted: boolean, value?: number, reps?: number, specialType?: SpecialSetTypes): WorkoutSet {
    return {
      isCompleted,
      value,
      reps,
      specialType
    }
  }

  static schema = {
    name: "WorkoutSet",
    embedded: true, 
    properties: {
      value: "int?",
      reps: "int?",
      specialType: "string?",
      isCompleted: "bool",
    },
  };
}