import style from "./Paginator.module.css";
import React, {useState} from "react";
import {UsersPropsType} from "../../Users/Users";


type PaginatorPropsType = Pick<UsersPropsType, 'totalCount' | 'pageSize' | 'currentPage' | 'changePageHandler'> & {
    portionSize?: number
}

const Paginator = ({
                       totalCount,
                       pageSize,
                       currentPage,
                       changePageHandler,
                       portionSize = 10,
                       ...props
                   }: PaginatorPropsType) => {

    let pagesCount: number = Math.ceil((totalCount - 16300) / pageSize)
    let pagesArray: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }
    const [portionNumber,setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber-1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize


    let pagesDisplay = pagesArray
        .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(n => {
            return (
                <span className={currentPage === n ? style.selectedPage : ""}
                      onClick={() => changePageHandler(n)}> {n} </span>
            )
        }
    )
    return (
        <div>
            {portionNumber > 1 && <button onClick={()=>setPortionNumber(portionNumber -1)}>PREV</button>}
            {pagesDisplay}
            {portionNumber < pagesCount && <button onClick={()=>setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    );
};

export default Paginator;
