import { useEffect } from "react";
import { useExercisesSeed } from "./useExercisesSeed";
import { useNomenclatureSeed } from "./useNomenclatureSeed"

export const useSeed = () => {
  const { seedBodyParts, seedCategories } = useNomenclatureSeed();
  const { seedExercises } = useExercisesSeed();

  const seedData = async () => {
    await seedCategories();
    await seedBodyParts();
    await seedExercises();
  }

  useEffect(() => {
    seedData();
  }, [])
}