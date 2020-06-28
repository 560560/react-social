import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

let pagesCount = Math.ceil(totalUsersCount / pageSize);
let pages = [];
for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
        pages.push(i)
    } else if (i === pagesCount) {
        pages.push("...")
        pages.push(i)
    }
}

return (
    <div className={s.pagesCounter}>
        {pages.map(p => {
            return <span className={(currentPage === p)
                ? s.selectedPage
                : s.page} key={p}
                         onClick={() => {
                             onPageChanged(p)
                         }}>
                        {p}</span>
        })}
    </div>
)

}
export  default Paginator