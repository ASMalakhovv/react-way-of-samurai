import style from "./Paginator.module.css";
import React from "react";
import {UsersPropsType} from "../../Users/Users";


type PaginatorPropsType = Pick<UsersPropsType, 'totalCount' | 'pageSize' | 'currentPage' | 'changePageHandler'>

const Paginator = ({totalCount, pageSize, currentPage, changePageHandler,...props}: PaginatorPropsType) => {

    let numberPages: number = Math.ceil((totalCount - 16300) / pageSize)
    let arrayPages: number[] = [];
    for (let i = 1; i <= numberPages; i++) {
        arrayPages.push(i)
    }

    let pages = arrayPages.map(n => {
            return (
                <span className={currentPage === n ? style.selectedPage : ""}
                      onClick={() => changePageHandler(n)}>{n}</span>
            )
        }
    )
    return (
        <div>
            {pages}
        </div>
    );
};

export default Paginator;