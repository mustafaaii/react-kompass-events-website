
import { ConvertDate, Countdown, Root, Seo } from "./element"
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay, Navigation } from 'swiper/modules';
import "swiper/css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import sectionData from "../data/section.json"
import axios from "axios";
import Menu from "../data/menu.json"
import Button from "../data/button.json"
import FooterData from "../data/footer.json"
import CountDownData from "../data/countdown.json"
import AlertData from "../data/alert.json"




const Lang = () => {
    if (window.localStorage.getItem("lang") === null) {
        return "de"
    }
    else {
        return window.localStorage.getItem("lang")
    }
}

const Header = () => {

    const navigate = useNavigate()
    const [scrollY, setScrollY] = useState(0);
    const [Open, setOpen] = useState({ open: 0, title: "" })
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const SelectLanguage = (e) => {
        window.localStorage.removeItem("lang")
        window.localStorage.setItem("lang", e)
        window.location.href = window.location.pathname;
    }
    const Content = () => {
        return (
            <div className="d-flex">
                <div className="w-100 d-flex justify-content-center" onClick={() => { SelectLanguage("tr") }}>
                    <button className="btn btn-info">TR</button>
                </div>
                <div className="w-100 d-flex justify-content-center" onClick={() => { SelectLanguage("de") }}>
                    <button className="btn btn-info">DE</button>
                </div>
            </div>
        )
    }
    const [Show, setShow] = useState(0)


    return (
        <>

            <header className={`header  ${scrollY < 80 ? "shadow-sm border-bottom" : "is-stciky-header"}`}>
                <div className="container">
                    <div className="d-flex align-items-center h-80px">
                        <div className="w-200px">
                            <Link to={"/"}>
                                <img src="https://kompass.events/static/media/logo.1e7aa7b143207d709603.png" className="header-logo" />
                            </Link>
                        </div>
                        <div className="w-100 d-flex justify-content-end me-2 is-mobile">
                            <div className="header-menu-list">
                                {
                                    (Menu || []).filter((f) => { return (f["lang"] === Lang() && f["section"] === "menu") }).map((d) => {
                                        return (
                                            (d["data"] || []).slice(0, 3).map((s, y) => {
                                                return (
                                                    <Link className="header-menu-item" to={s["url"]}>{s["name"]}</Link>
                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="w-100px me-5 is-mobile">
                            <button className="btn btn-red h-50px w-150px fs-6" onClick={() => { navigate("/event") }}>
                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["button"]}
                            </button>
                        </div>
                        <div className="w-100px ms-1 is-mobile">
                            <button className="btn btn-line h-50px w-80px fs-6 uppercase" onClick={() => {
                                window.localStorage.getItem("lang") === null ?
                                    SelectLanguage("de")
                                    :
                                    window.localStorage.getItem("lang") === "tr" ? SelectLanguage("de") : SelectLanguage("tr")
                            }}>
                                {window.localStorage.getItem("lang") === "tr" ? "DE" : "TR"}
                            </button>
                        </div>
                        <div className="w-100 me-1 d-flex justify-content-end hamburger-menu">
                            <button className="btn btn-line h-50px w-80px fs-6 uppercase" onClick={() => {
                                window.localStorage.getItem("lang") === null ?
                                    SelectLanguage("de")
                                    :
                                    window.localStorage.getItem("lang") === "tr" ? SelectLanguage("de") : SelectLanguage("tr")
                            }}>
                                {window.localStorage.getItem("lang") === "tr" ? "DE" : "TR"}
                            </button>
                        </div>
                        <div className="w-50px me-1 d-flex justify-content-end hamburger-menu" onClick={() => { setShow(1) }}>
                            <i class="fa-solid fa-bars fs-1 text-gray"></i>
                        </div>
                    </div>
                </div>
            </header>


            <div className={`modal-menu hamburger-menu ${parseInt(Show) === 1 ? "active" : ""}`} onClick={() => { setShow(0) }}>
                <div className={`modal-menu-content ${parseInt(Show) === 1 ? "active" : ""}`}>
                    <div className="modal-menu-content-body">
                        <Link to={"/"}>
                            <img src="https://kompass.events/static/media/logo.1e7aa7b143207d709603.png" className="header-logo" />
                        </Link>

                        <div className="header-modal-menu-list">
                            {
                                (Menu || []).filter((f) => { return (f["lang"] === Lang() && f["section"] === "menu") }).map((d) => {
                                    return (
                                        (d["data"] || []).slice(0, 12).map((s, y) => {
                                            return (
                                                <Link className="header-modal-menu-item" to={s["url"]}>{s["name"]}</Link>
                                            )
                                        })
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
            <Highlight open={Open.open} title={Open.title} data={Content()} response={() => { setOpen("") }} />
        </>
    )
}
const Footer = () => {

    const [Email, setEmail] = useState("")
    const [Alert, setAlert] = useState({ status: 0, text: "" })
    const Control = () => {
        if (Email === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 3) })[0]["data"][0]["name"] }); return false; }
        return true;
    }
    const Company = () => {
        const content = "" +
            "<br/>" +
            "Guten Tag" +
            "<br/>" +
            "Ihr Abonnement wurde erfolgreich abgeschlossen! Um über unsere Veranstaltungen informiert zu bleiben, überprüfen Sie bitte Ihren E-Mail-Posteingang." +
            "<br/>" +
            "Vielen Dank, dass Sie uns folgen." +
            "<br/><br/>" +
            "Kompass Events<br/>" +
            "Schaufelbergerstrasse 57 <br/>" +
            "CH-8055 Zürich<br/><br/>" +
            "info@kompass.events<br/>" +
            "+41 (0) 44 576 60 80<br/>" +
            "";

        axios.post(Root({ type: "root" }), {
            params: "send-contact",
            email: Email,
            name: "Kompass Events",
            title: "Registrierungsbestätigung",
            content: content,
        })

        axios.post(Root({ type: "root" }), {
            params: "insert-newsletter",
            email: Email,
            content: content,
        })



        return true;

    }
    const Send = () => {
        if (Control()) {
            if (Company()) {
                setAlert({ status: 1, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 4) })[0]["data"][0]["name"] })
            }
        }
    }

    useEffect(() => {
        if (Alert.status) {
            setTimeout(() => {
                setAlert({ status: 0, text: "" })
            }, 3000);
        }
    }, [Alert.status])

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 mt-4 col-12" >
                            <div className="alert-danger" hidden={Alert.status === 2 ? false : true}>
                                {Alert.text}
                            </div>
                            <div className="alert-success" hidden={Alert.status === 1 ? false : true}>
                                {Alert.text}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1 mb-2">
                        <div className="col-lg-12 col-12">
                            <div className="footer-newsletter-title">
                                {(FooterData || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["title"]}
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-start h-100px desktop-newsletter">
                        <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-center">
                            <div className="footer-form-group w-100">
                                <input className="form-control h-60px rounded-0" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder={(FooterData || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["placeholder"]} />
                            </div>
                            <button className="btn btn-red h-60px border-0 w-200px" onClick={() => { Send() }}>
                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 6) })[0]["button"]}
                            </button>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center align-items-start h-100px mobile-newsletter">
                        <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-center">
                            <div className="footer-form-group w-100">
                                <input className="form-control h-60px rounded-0" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder={"Ihre E-Mail Address"} />
                            </div>
                            <button className="btn btn-red h-60px border-0 w-200px" onClick={() => { Send() }}>
                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 6) })[0]["button"]}
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12 d-flex justify-content-center">
                            <Link to={"/"}>
                                <img src="https://kompass.events/static/media/footer_logo.0b89600ae436ca7dccb6.png" className="footer-logo" />
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="footer-title">KOMPASS EVENTS</div>
                            <div className="footer-address">
                                Schaufelbergerstrasse 57
                                CH-8055 Zürich
                            </div>
                            <div className="footer-phone">
                                +41 (0) 44 576 60 80
                            </div>
                            <div className="footer-email">
                                info@kompass.events
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="footer-title">
                                {(FooterData || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["title"]}
                            </div>
                            <div className="footer-text">
                                {(FooterData || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["subtitle"]}
                            </div>
                            <div className="footer-social-list d-flex-md-center">
                                <a className="footer-social-link" href="https://www.facebook.com/profile.php?id=61557094736347" target="_blank"><i class="fa-brands fa-facebook fs-2"></i></a>
                                <a className="footer-social-link" href="https://www.instagram.com/kompassevents/" target="_blank"><i class="fa-brands fa-instagram fs-2"></i></a>
                                <a className="footer-social-link" href="https://www.facebook.com/profile.php?id=61557094736347" target="_blank"> <i class="fa-brands fa-youtube fs-2"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="footer-title">
                                {(FooterData || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 3) })[0]["title"]}
                            </div>
                            <div className="footer-menu">
                                {
                                    (Menu || []).filter((f) => { return (f["lang"] === Lang() && f["section"] === "menu") }).map((d) => {
                                        return (
                                            (d["data"] || []).slice(0, 8).map((s, y) => {
                                                return (
                                                    <Link className="footer-link" to={s["url"]}>{s["name"]}</Link>
                                                )
                                            })
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-80px">
                        <div className="col-lg-12 col-12">
                            <div className="footer-divider"></div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center h-80px">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="footer-corporate">
                                <p> <span>©</span> 2024 Kompass Events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
const Slider = ({ data = [] }) => {
    const navigation = useNavigate()
    return (
        <>
            <slider className="slider p-md-2">
                <Swiper modules={[Autoplay]} spaceBetween={2} slidesPerView={1} loop={true} autoplay={{ delay: 4000 }} >
                    {
                        (data || []).map((d, x) => {
                            return (
                                <SwiperSlide>
                                    <div className="slider-item" style={{ backgroundImage: `url(${d["image"]})` }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6 col-md-4 ">
                                                    <div className="slider-container">
                                                        <div className="w-100 md-t">
                                                            <div className="slider-title">{d["title"]}</div>
                                                            <div className="slider-subtitle">{d["subtitle"]}</div>
                                                            <div className="slider-artist-content">
                                                                {(d["artists"] || []).map((e, y) => { return (<div className="slider-artist me-2">{e}</div>) })}
                                                            </div>
                                                            <div className="slider-location">
                                                                <div className="w-30px"><i class="fa-solid fa-location-dot fs-4 text-yellow"></i></div>
                                                                {d["location"]}
                                                            </div>
                                                            <div className="slider-calender">
                                                                <div className="w-30px"><i class="fa-regular fa-calendar-days fs-4 text-yellow"></i></div>
                                                                {ConvertDate({ date: d["date"], type: "day" })}, {ConvertDate({ date: d["date"], type: "mount" }).day} {ConvertDate({ date: d["date"], type: "mount" }).mount} {ConvertDate({ date: d["date"], type: "mount" }).year} - {d["time"]}
                                                            </div>
                                                            <div className="slider-action">
                                                                <button className="btn btn-info w-200px me-1 h-60px" onClick={() => { navigation(`/event/detail/${Seo(d["title"])}/${d["event_id"]}`) }}>
                                                                    {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 4) })[0]["button"]}
                                                                </button>
                                                                <button className="btn btn-red w-200px me-1 h-60px" onClick={() => { window.open(d["url"], "target") }}>
                                                                    {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["button"]}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-6">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </slider>


        </>
    )
}
const Banner = ({ data = [] }) => {

    const navigation = useNavigate()
    const [Open, setOpen] = useState({ open: "", title: "" })
    return (
        <>
            {
                (data || []).map((d, x) => {
                    return (
                        <div className="banner" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/events/${d["poster"]})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-xs-12">
                                        <div className="banner-container">
                                            <div className="w-100">
                                                {

                                                    d["title"].split(",").length > 1 ?
                                                        <div className="split-content">
                                                            {d["title"].split(",").map((t) => {
                                                                return (<div className="banner-title split-text"> {t}</div>)
                                                            })}
                                                        </div>
                                                        :
                                                        <div className="banner-title">{d["title"]}</div>

                                                }
                                                <div className="banner-subtitle">{d["subtitle"]}</div>
                                                <div className="banner-artist-content"><div className="banner-artist me-2"> {d["artists"]}</div></div>
                                                {new Date(d["date"]) >= new Date() && <Countdown type="banner" endDate={`${d["date"]}T${d["time"]}`} />}
                                                <div className="banner-location">
                                                    <div className="w-30px"><i class="fa-solid fa-location-dot fs-4 text-yellow"></i></div>
                                                    {d["location"]}
                                                </div>
                                                <div className="banner-calender">
                                                    <div className="w-30px"><i class="fa-regular fa-calendar-days fs-4 text-yellow"></i></div>
                                                    {ConvertDate({ date: d["date"], type: "day" })}, {ConvertDate({ date: d["date"], type: "mount" }).day} {ConvertDate({ date: d["date"], type: "mount" }).mount} {ConvertDate({ date: d["date"], type: "mount" }).year} - {d["time"]}
                                                </div>
                                                <div className="banner-action" hidden={new Date(d["date"]) <= new Date() ? true : false}>
                                                    <button className="btn btn-info w-250px me-1 h-60px" onClick={() => { window.open(d["ticket"], "__target") }}>
                                                        {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["button"]}
                                                    </button>
                                                    <button className="btn btn-red w-250px me-1 h-60px" onClick={() => { document.getElementById("program").scrollIntoView({ behavior: 'smooth' }) }}>
                                                        {
                                                            d["type"] === "Theater" ?
                                                                Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 3) })[0]["button"]
                                                                :
                                                                Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["button"]
                                                        }
                                                    </button>
                                                    <button className="btn btn-yellow w-250px me-1 h-60px" onClick={() => { setOpen({ open: d["maps"], title: d["location"] }) }}>
                                                        {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 7) })[0]["button"]}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    )
                })
            }
            <Highlight open={Open.open} title={Open.title} data={<iframe src={Open.open} width="100%" height="500px" style={{ border: "0" }} ></iframe>} response={() => { setOpen("") }} />

        </>
    )
}
const Hero = ({ image = "", title = "" }) => {

    return (
        <>
            <div className="hero" style={{ backgroundImage: `url(${image})` }}>
                <div className="container">
                    <div className="hero-title">
                        {title}
                    </div>
                </div>
            </div>
        </>
    )
}

const Section = ({ data = [], classname = [] }) => {

    return (
        (data || []).map((d, x) => {
            return (
                <div className={`section-content ${classname[0]}`}>
                    <div className={`section-title ${classname[1]}`}>
                        {d["title"]}
                    </div>
                    <div className={`section-subtitle ${classname[2]}`}>
                        {d["subtitle"]}
                    </div>
                    <div className={`section-text section-subtitle ${classname[3]}`}>
                        <div dangerouslySetInnerHTML={{ __html: d["text"] }}></div>
                    </div>
                </div >
            )
        })

    )
}
const Card = ({ data = [] }) => {
    const navigation = useNavigate()
    const [Open, setOpen] = useState({ open: "", title: "" })
    return (
        <>
            <div className="row d-flex justify-content-center">
                {
                    (data || []).map((d, x) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-4 mb-3">
                                <div className="card card-events mt-3 ">
                                    <img className="event-image" src={`https://kompass.events/kompass_events/upload/events/${d["photo"]}`} />
                                    <div className="event-countdown">
                                        {new Date(d["date"]) >= new Date() && <Countdown type="card" endDate={`${d["date"]}T${d["time"]}`}
                                            placeholder={{
                                                days: CountDownData.filter((f) => { return (f["lang"] === Lang()) })[0]["data"][0]["name"],
                                                hour: CountDownData.filter((f) => { return (f["lang"] === Lang()) })[0]["data"][1]["name"],
                                                minute: CountDownData.filter((f) => { return (f["lang"] === Lang()) })[0]["data"][2]["name"],
                                                second: CountDownData.filter((f) => { return (f["lang"] === Lang()) })[0]["data"][3]["name"]
                                            }}
                                        />}

                                        {
                                            console.log()
                                        }
                                    </div>
                                    <div className="card-body p-2">
                                        <div className="event-title">
                                            {d["title"]}  ({d["subtitle"]})
                                        </div>
                                        <div className="event-location text-gray">
                                            <div className="w-25px"><i class="fa-solid fa-location-dot fs-5 text-gray"></i></div>
                                            {d["location"]}
                                        </div>
                                        <div className="event-calender text-gray">
                                            <div className="w-25px"><i class="fa-regular fa-calendar-days fs-5 text-gray"></i></div>
                                            {ConvertDate({ date: d["date"], type: "day" })}, {ConvertDate({ date: d["date"], type: "mount" }).day} {ConvertDate({ date: d["date"], type: "mount" }).mount} {ConvertDate({ date: d["date"], type: "mount" }).year} - {d["time"]}
                                        </div>
                                        <div className="event-action">
                                            <button className="btn btn-info w-100 me-1 h-50px" onClick={() => { navigation(`/event/detail/${Seo(d["title"])}/${d["event_id"]}`) }}>
                                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 4) })[0]["button"]}
                                            </button>
                                            {new Date(d["date"]) >= new Date() && <button className="btn btn-red w-100 me-1 h-50px" onClick={() => { window.open(d["ticket"], "target") }}>
                                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["button"]}
                                            </button>}
                                            {new Date(d["date"]) >= new Date() && <button className="btn btn-yellow w-100 h-50px" onClick={() => { setOpen({ open: d["maps"], title: d["location"] }) }}>
                                                {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 7) })[0]["button"]}
                                            </button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Highlight open={Open.open} title={Open.title} data={<iframe src={Open.open} width="100%" height="500px" style={{ border: "0" }} ></iframe>} response={() => { setOpen("") }} />
        </>
    )
}
const Search = () => {

    return (
        <>


        </>
    )
}

const EventInfo = ({ data = [] }) => {

    return (
        <>
            {
                (data || []).map((d, x) => {
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="event-info-image" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/events/${d["biography_photo"]})` }}>
                                    <div className="row">
                                        <div className="col-lg-6"></div>
                                        <div className="col-lg-6">
                                            <div className="event-info-text-content">
                                                <div className="w-100">
                                                    <div className="event-info-title">{d["title"]}  </div>
                                                    <div className="event-info-subtitle">{d["subtitle"]}  </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-info-content">
                                    <div className="event-info-inner">
                                        <div className="card-body p-3">
                                            <div className="event-info-text" dangerouslySetInnerHTML={{ __html: d["description"] }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
const EventAward = ({ data = [] }) => {

    return (
        <>

        </>
    )
}
const EventBanner = ({ data = [] }) => {

    return (
        <>

        </>
    )
}

const EventTag = ({ data = [] }) => {

    return (
        <>
            <div id="program" className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="card card-xl-stretch event-info-image shadow" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/events/klatscher_detail_events_tags.jpeg)` }}>
                        <div className="card-body p-1">
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <div className="card card-xl-stretch bg-trasparent border-0">
                        <div className="card-body p-0">
                            <div className="row">
                                {
                                    (data || []).map((d, x) => {
                                        return (
                                            <div className={`${data.length - 1 === x ? "col-lg-12" : "col-lg-6 col-xs-12"} mb-2`}>
                                                <div className="event-tags-background">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="event-tags-title">{d["jobs"]}</div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="event-tags-text">{d["name"]}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}
const EventStream = ({ data = [], image = "", id = "" }) => {


    return (
        <>
            <div id="program" className="card event-stream-background shadow" style={{ backgroundImage: `url(${image})` }}>
                <div className="row">
                    <div className="col-lg-12 col-xs-12">
                        {<Module
                            module="section"
                            data={sectionData.filter((d) => { return (d["event_id"] === id && d["section_name"] === "stream" && d["lang"] === Lang()) })}
                            classname={["text-start text-white p-3", "text-yellow", "", "text-start text-white w-70"]}
                        />}
                    </div>
                </div>
                <div className="event-stream-content">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 col-xs-12">

                                {
                                    (data || []).filter((f) => { return (parseInt(f["section"]) === 1) }).map((d, x) => {
                                        return (
                                            <>
                                                <div className="event-stream-title">{d["stage"]}</div>
                                                <div className="row">
                                                    {
                                                        (d["composer"] || []).map((e, y) => {
                                                            return (
                                                                <div className="col-lg-12 col-xs-12 mb-4">
                                                                    {
                                                                        console.log(e)
                                                                    }
                                                                    <div className="event-stream-composer">{e["name"]} {e["date"]}</div>
                                                                    <div className="event-stream-album">{e["album"]}</div>
                                                                    <div className="event-stream-list mt-2">
                                                                        {
                                                                            (e["lists"] || []).map((t, y) => {
                                                                                return (

                                                                                    <div className="event-stream-list-item">
                                                                                        <i class="fa-solid fa-circle fs-6 me-2"></i>
                                                                                        {t["name"]}
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                            <div className="col-lg-6 col-xs-12">
                                {
                                    (data || []).filter((f) => { return (parseInt(f["section"]) === 2) }).map((d, x) => {
                                        return (
                                            <>
                                                <div className="event-stream-title">{d["stage"]}</div>
                                                <div className="row">
                                                    {
                                                        (d["composer"] || []).map((e, y) => {
                                                            return (
                                                                <div className="col-lg-12 col-xs-12 mb-4">
                                                                    <div className="event-stream-composer">{e["name"]} {e["date"]}</div>
                                                                    <div className="event-stream-album">{e["album"]}</div>
                                                                    <div className="event-stream-list mt-2">
                                                                        {
                                                                            (e["lists"] || []).map((t, y) => {
                                                                                return (
                                                                                    <div className="event-stream-list-item"><i class="fa-solid fa-circle fs-6 me-2"></i>{t["name"]}</div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const EventGalery = ({ data = [] }) => {
    const [Open, setOpen] = useState({ open: "", title: "" })
    return (
        <>
            <div className="row">
                {
                    (data || []).map((d, x) => {
                        return (
                            <div className="col-lg-4 mb-4">
                                <div className="event-galery-background">
                                    <div className="event-galery-image cursor-pointer" onClick={() => { setOpen({ open: `https://kompass.events/kompass_events/upload/galery/${d["image"]}`, title: "" }) }} style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/galery/${d["image"]})` }}>
                                        <i className="fa fa-search-plus fs-1 text-white"></i>
                                    </div>
                                    {
                                        d["copyright"] !== "" &&
                                        <div className="event-galery-content">
                                            <div className="event-galery-title">Fazıl Say © <span className="event-galery-copyright">{d["copyright"]}</span> </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Highlight open={Open.open} title={Open.title} data={<img src={Open.open} className="highlight-image" />} response={() => { setOpen("") }} />
        </>
    )
}
const EventVideo = ({ data = [] }) => {

    return (
        <>
            <div className="row">
                {
                    (data || []).map((d, x) => {
                        return (
                            <div className="col-lg-6 mb-4">
                                <div className="event-video-background">
                                    <iframe width="100%" height="310" style={{ borderRadius: "12px" }} frameborder="0" src={`https://www.youtube.com/embed/${d["link"]}`}></iframe>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}
const Highlight = ({ open = "", data = <></>, title = "", response = () => { } }) => {

    return (
        <div className={`highlight-container ${open ? "active" : ""}`} onClick={() => { response() }}>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header d-flex">
                                <div className="w-100 d-flex align-items-center">
                                    {title}
                                </div>
                                <div className="w-50px d-flex justify-content-end">
                                    <i class="fa-solid fa-circle-xmark fs-1 text-gray cursor-pointer" onClick={() => { response() }}></i>
                                </div>
                            </div>
                            <div className="card-body">
                                {data}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default function Module({ module = "", data = [], hero = { title: "", image: "" }, stream = { data: [], image: "", id: "" }, classname = [] }) {


    switch (module) {
        case "header": return <Header />
        case "footer": return <Footer />
        case "slider": return <Slider data={data} />
        case "banner": return <Banner data={data} />
        case "hero": return <Hero image={hero.image} title={hero.title} />

        case "event-award": return <EventAward data={data} />
        case "event-banner": return <EventBanner data={data} />
        case "event-info": return <EventInfo data={data} />
        case "event-tag": return <EventTag data={data} />
        case "event-stream": return <EventStream data={stream.data} image={stream.image} id={stream.id} />
        case "event-galery": return <EventGalery data={data} />
        case "event-video": return <EventVideo data={data} />


        case "search": return <Search />
        case "section": return <Section data={data} classname={classname} />
        case "card": return <Card data={data} />

        default: return <></>

    }
}