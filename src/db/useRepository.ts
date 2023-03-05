
import { BaseModel } from './models/baseModel';
import DbContext from './problemModeDb';

const { useRealm, useQuery, useObject } = DbContext;
export const useRepository = <T extends BaseModel, TModel extends Realm.Object<TModel>>(name: string) => {  
  const realm = useRealm();

  const insert = (entity: T) => {
    return new Promise<void>(resolve => {
      realm.write(() => {
        realm.create(name, entity);
        resolve();
      })
    })
  }

  const remove = (model: TModel) => {
    realm.write(() => {
      realm.delete(model);
    })
  }

  const useObjectById = (id: string) => {
    return useObject(name, id);
  }

  const useDataQuery = () => {
    return useQuery<TModel>(name)
  }

  const update = (actionFunc: Function) => {
    realm.write(() => {
      actionFunc();
    })
  }

  return {
    useObjectById,
    insert,
    update,
    delete: remove,
    useDataQuery
  }
}
