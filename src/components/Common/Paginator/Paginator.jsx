import React, {useEffect, useState} from "react";
import s from "./Paginator.module.css";
import forward from "./../../../assets/images/forward.svg"
import backward from "./../../../assets/images/backward.svg"

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    let [firstPage, setFirstPage] = useState(1)
    useEffect(() => {
        if (currentPage.index >= 5) {
            let moveNumber = currentPage.index - 4
            setFirstPage(firstPage + moveNumber)
            onPageChanged(currentPage.number, 4)
        }
    }, [currentPage.index])

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];


    for (let i = firstPage; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        } else if (i === pagesCount) {
            pages.push("...")
            pages.push(i)
        }

    }

    let pageForward = () => {
        onPageChanged(currentPage.number + 1, currentPage.index + 1)
    }
    let pageBackward = () => {
        onPageChanged(currentPage.number - 1, currentPage.index - 1)
    }


    return (
        <div className={s.pagesCounter}>
            {currentPage.number > 1 && <img src={backward} alt="" onClick={pageBackward}/>}
            {pages.map((p, index) => {

                return <span className={(currentPage.number === p)
                    ? s.selectedPage
                    : s.page} key={p}
                             onClick={() => {
                                 onPageChanged(p, index)
                             }}>
                        {p}</span>
            })}
            {currentPage.number < pagesCount && <img src={forward} alt="" onClick={pageForward}/>}
        </div>
    )

}
export default Paginator