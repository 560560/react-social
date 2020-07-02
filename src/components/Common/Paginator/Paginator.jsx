import React, {useState} from "react";
import s from "./Paginator.module.css";
import forward from "./../../../assets/images/forward.svg"
import backward from "./../../../assets/images/backward.svg"

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {

    const [firstPage, setFirstPage] = useState(1)


    const clickOnPageNumber = (pageNumber, index) => {

        if (currentPage.number < pageNumber && index > 4) {
            let moveNumber = index - 4
            setFirstPage(firstPage + moveNumber)
            onPageChanged(pageNumber, 4)
        } else if (currentPage.number > pageNumber && index < 4 && firstPage !== 1) {
            let moveNumber = index - 4
            setFirstPage(firstPage + moveNumber)
            onPageChanged(pageNumber, 4)
        } else if (currentPage.number === pageNumber) {
        } else {
            onPageChanged(pageNumber, index)
        }
    }


    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    //обработка ухода первых страниц списка в числа меньше 1
    if (firstPage < 1) { setFirstPage(1)}

    // обработка уменьшения количесства страниц списка на последних страницах
    if (pagesCount !==0 && pagesCount - firstPage < 9) {setFirstPage(pagesCount - 9)}

    // обработка выставления выбранной страницы в индекс 4, при перемонтировании компоненты
    if (firstPage === 1 && firstPage !== currentPage.number && currentPage.number > 5) {
        setFirstPage(currentPage.number - 4)
    }

    for (let i = firstPage; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i)
        }

    }

    let pageForward = () => {
        clickOnPageNumber(currentPage.number + 1, currentPage.index + 1)
    }
    let pageBackward = () => {
        clickOnPageNumber(currentPage.number - 1, currentPage.index - 1)
    }


    return (
        <div className={s.pagesCounter}>
            {currentPage.number > 1
                ? <img src={backward} alt="" onClick={pageBackward}/>
                : <img src={backward} alt=""/>}
            {pages.map((p, index) => {

                return <div className={(currentPage.number === p)
                    ? s.selectedPage
                    : s.page} key={p}
                            onClick={() => clickOnPageNumber(p, index)}>
                    {p}</div>
            })}
            {currentPage.number < pagesCount
                ? <img src={forward} alt="" onClick={pageForward}/>
                : <img src={forward} alt=""/>}
        </div>
    )

}
export default Paginator