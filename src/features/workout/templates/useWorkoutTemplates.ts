import { WorkoutTemplate, WorkoutTemplateModel } from "../../../db/models/workoutTemplate";
import { useRepository } from "../../../db/useRepository"
import { useIteratableResults } from "../../../db/useIteratableResults";

export const useWorkoutTemplates = () => {  
  const { useDataQuery } = useRepository<WorkoutTemplate, WorkoutTemplateModel>(WorkoutTemplateModel.schema.name);
  
  const templates = useDataQuery().sorted("name");
  const iteratableTemplates = useIteratableResults(templates);

  return {
    templates: iteratableTemplates
  }
}