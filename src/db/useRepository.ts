
import { Results, UpdateMode } from 'realm';
import { BaseModel } from './models/baseModel';
import DbContext from './problemModeDb';
import { ObjectId } from 'bson';

const { useRealm, useQuery, useObject } = DbContext;
export const useRepository = <T extends BaseModel, TModel extends Realm.Object<TModel>>(name: string) => {
  const realm = useRealm();

  const insert = (entity: T) => {
    return new Promise<void>(resolve => {
      realm.write(() => {
        realm.create(name, entity, UpdateMode.Modified);
        resolve();
      })
    })
  }

  const insertMany = (entities: T[]) => {
    return new Promise<void>(resolve => {
      realm.write(() => {
        for (const entity of entities) {
          realm.create(name, entity, UpdateMode.Modified);
        }
        resolve();
      })
    })
  }

  const remove = (model: TModel | TModel[] | Results<T> | null) => {
    return new Promise<void>(resolve => {
      realm.write(() => {
        realm.delete(model);
        resolve();
      })
    })
  }

  const useObjectById = (id: string) => {
    const objectId = new ObjectId(id);
    return useObject<TModel>(name, objectId);
  }

  const useDataQuery = () => {
    return useQuery<TModel>(name)
  }

  const update = (entity: T) => {
    return new Promise<void>(resolve => {
      realm.write(() => {
        realm.create(name, entity, UpdateMode.Modified);
        resolve();
      })
    })
  }

  return {
    useObjectById,
    insert,
    insertMany,
    update,
    remove,
    useDataQuery
  }
}
