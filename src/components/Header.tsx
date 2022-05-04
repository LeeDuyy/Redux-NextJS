import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';

const Header = () => {
    const [clock, setClock] = useState<Date>(new Date());
    const [currentTime, setCurrentTime] = useState<string>("");
    const route = useRouter();
    const className = "menu_item";
    const classNameSelect = "menu_item menu_selected";

    useEffect(() => {
        document.querySelector("#HOME")?.setAttribute("class", classNameSelect);
    }, []);

    useEffect(() => {
        const timeId = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timeId);
        };
    })

    function tick() {
        let h = clock.getHours();
        let m = clock.getMinutes();
        m = checkTime(m);
        setClock(new Date());
        setCurrentTime(`${h}:${m}`);
    }

    function checkTime(i: any) {
        if (i < 10) { i = "0" + i };
        return i;
    }

    const handelChangeMenu = (idMenu: string) => {
        const listMenu = document.querySelectorAll(".menu_item");
        listMenu.forEach((row) => {
            row?.setAttribute("class", className);
        })
        document.querySelector(`#${idMenu}`)?.setAttribute("class", classNameSelect);
    }

    const onLogout = () => {
        route.push("/login");
    }

    return (
        <div className="header_wrapper">
            <div className={className}
                id="HOME"
                onClick={() => handelChangeMenu("HOME")}
            >
                <span className="menu_title">HOME</span>
            </div>
            <div className={className}
                id="TODO"
                onClick={() => handelChangeMenu("TODO")}
            >
                <span className="menu_title">TODO</span>
            </div>
            <div className="menu_item_clock">
                <span className="menu_title menu_title_clock">
                    {currentTime}
                </span>
            </div>
            <div className={className}
                id="SCHEDULE"
                onClick={() => handelChangeMenu("SCHEDULE")}
            >
                <span className="menu_title">SCHEDULE</span>
            </div>
            <div className={className}
                id="LOGOUT"
                onClick={() => onLogout()}
            >
                <span className="menu_title">LOGOUT</span>
            </div>
        </div>
    );
};

export default Header;