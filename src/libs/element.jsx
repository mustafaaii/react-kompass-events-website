import { useEffect, useState } from "react";
import DateData from "../data/date.json"


const Lang = () => {
    if (window.localStorage.getItem("lang") === null) {
        return "de"
    }
    else {
        return window.localStorage.getItem("lang")
    }
}

export function Root({ type = "" }) {

    switch (type) {
        case "root": return "https://kompass.events/kompass_events/api.php";
        case "image": return "https://kompass.events/kompass_events/upload/";
        case "upload": return "https://kompass.events/kompass_events/class.upload.php";
        default: return "https://kompass.events/kompass_events/api.php"
    }
}
export function Seo(url) {
    return url.toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/&/g, '-and-')
        .replace(/[^a-z0-9\-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-*/, '')
        .replace(/-*$/, '');
}
export function Countdown({ type = "", endDate, placeholder = { days: "Day", hour: "Hour", minute: "Minu", second: "Seco" } }) {

    const [remainingTime, setRemainingTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(endDate).getTime() - now;

            if (distance < 0) {
                clearInterval(intervalId);
                setRemainingTime({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setRemainingTime({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [endDate]);
    if (type === "card") {
        return (
            <div class="countdown-area shadow-sm">
                <div className="d-flex">
                    <div style={{ marginRight: "6px" }}></div>
                    <div>
                        <div className="countdown-title">{placeholder.days}</div>
                        <div className="countdown-value">{parseInt(remainingTime.days) < 10 ? "0" + remainingTime.days : remainingTime.days}</div>
                    </div>
                    <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                    <div>
                        <div className="countdown-title"> {placeholder.hour} </div>
                        <div className="countdown-value">{parseInt(remainingTime.hours) < 10 ? "0" + remainingTime.hours : remainingTime.hours}</div>
                    </div>
                    <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                    <div>
                        <div className="countdown-title"> {placeholder.minute} </div>
                        <div className="countdown-value"> {parseInt(remainingTime.minutes) < 10 ? "0" + remainingTime.minutes : remainingTime.minutes} </div>
                    </div>
                    <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                    <div>
                        <div className="countdown-title"> {placeholder.second} </div>
                        <div className="countdown-value"> {parseInt(remainingTime.seconds) < 10 ? "0" + remainingTime.seconds : remainingTime.seconds}</div>
                    </div>
                    <div style={{ marginLeft: "12px" }}></div>
                </div>
            </div>
        );
    }
    else {

        return (
            <>
                <div class="countdown-banner-area shadow-sm">
                    <div className="d-flex justify-content-start">
                        <div>
                            <div className="countdown-banner-title">{placeholder.days}</div>
                            <div className="countdown-banner-value">{parseInt(remainingTime.days) < 10 ? "0" + remainingTime.days : remainingTime.days}</div>
                        </div>
                        <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                        <div>
                            <div className="countdown-banner-title"> {placeholder.hour} </div>
                            <div className="countdown-banner-value">{parseInt(remainingTime.hours) < 10 ? "0" + remainingTime.hours : remainingTime.hours}</div>
                        </div>
                        <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                        <div>
                            <div className="countdown-banner-title"> {placeholder.minute} </div>
                            <div className="countdown-banner-value"> {parseInt(remainingTime.minutes) < 10 ? "0" + remainingTime.minutes : remainingTime.minutes} </div>
                        </div>
                        <div style={{ borderRight: "dashed 1px #29317e", marginLeft: "12px", marginRight: "12px" }}></div>
                        <div>
                            <div className="countdown-banner-title"> {placeholder.second} </div>
                            <div className="countdown-banner-value"> {parseInt(remainingTime.seconds) < 10 ? "0" + remainingTime.seconds : remainingTime.seconds}</div>
                        </div>
                        <div style={{ marginLeft: "12px" }}></div>
                    </div>
                </div>

            </>
        )
    }

}
export function ConvertDate({ date = 0, type = "" }) {
    const mounth = DateData.filter((f) => { return (f["lang"] === Lang()) })[0]["date"]
    const days = DateData.filter((f) => { return (f["lang"] === Lang()) })[0]["days"]
    const d = new Date(date);


    if (type === "mount") {
        return {
            year: date.split("-")[0],
            mount: mounth[parseInt(date.split("-")[1]) - 1],
            day: date.split("-")[2]
        }
    }
    else {
        d.setDate(d.getDate() - 1)
        return days[parseInt(d.getDay())];
    }
}