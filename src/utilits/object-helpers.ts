import {UsersItemType} from "../types/entities";
import {UsersInitialStateType} from "../Redux/users-reducer";


export const updateObjectInArray = (items:Array<UsersItemType>,actionId:number,objPropName:keyof UsersItemType,
                                    newObjProps:Partial<UsersItemType>) => {

 return items.map(u => u[objPropName] === actionId ? {...u, ...newObjProps} : u)

}