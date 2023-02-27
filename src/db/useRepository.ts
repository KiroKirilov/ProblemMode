
import { BaseModel } from './models/baseModel';
import DbContext from './problemModeDb';

const { useRealm, useQuery, useObject } = DbContext;
export const useRepository = <T extends BaseModel>(name: string) => {  
  const realm = useRealm();

  const insert = (entity: T) => {
    realm.write(() => {
      realm.create(name, entity);
    })
  }

  return {
    insert
  }
}
