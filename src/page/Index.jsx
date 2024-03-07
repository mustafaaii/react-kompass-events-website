import { useParams } from "react-router-dom";
import Module from "../libs/module";
import sliderData from "../data/slider.json"
import eventData from "../data/event.json"
import sectionData from "../data/section.json"
import tagsData from "../data/tags.json"
import galeryData from "../data/gallery.json"
import streamData from "../data/stream.json"
import videoData from "../data/video.json"
import aboutusData from "../data/aboutus.json"
import faqData from "../data/faq.json"

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Root } from "../libs/element";
import Button from "../data/button.json"
import ContactForm from "../data/contact.json"
import AkretidationData from "../data/akretidation.json"
import AlertData from "../data/alert.json"




const Lang = () => {
    if (window.localStorage.getItem("lang") === null) {
        return "de"
    }
    else {
        return window.localStorage.getItem("lang")
    }
}


const Home = () => {
    return (
        <>
            <Module module="slider" data={sliderData.filter((d) => { return (d["lang"] === Lang()) })} />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Module module="section" data={sectionData.filter((d) => { return (d["id"] === 1 && d["lang"] === Lang()) })} />
                        </div>
                    </div>
                    <Module module="card" data={eventData.filter((d) => { return (new Date() < new Date(d["date"]) && d["lang"] === Lang()) })} />
                </div>
            </section>

            <section className="section" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/past_event_bg.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Module module="section" data={sectionData.filter((d) => { return (d["id"] === 2 && d["lang"] === Lang()) })} />
                        </div>
                    </div>
                    <Module module="card" data={eventData.filter((d) => { return (new Date() > new Date(d["date"]) && d["lang"] === Lang()) })} />
                </div>
            </section>
        </>
    )
}
const Event = () => {


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Module module="section" />
                        </div>
                    </div>
                    <Module module="card" data={eventData.filter((d) => { return (new Date() < new Date(d["date"]) && d["lang"] === Lang()) })} />
                </div>
            </section>

        </>
    )
}
const About = () => {

    return (
        <>

            <section className="section" style={{ backgroundColor: "#ffff" }}>
                <div className="container">
                    {
                        (aboutusData.filter((f) => { return (f["lang"] === Lang() && f["section"] === "info") }) || []).map((d, x) => {
                            return (
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="about-info-image" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/${d["image"]})` }}>
                                            <div className="row">
                                                <div className="col-lg-5 mobile-about-title">
                                                    <div className="about-info-text-content">
                                                        <div>
                                                            <div className="about-info-title">{d["title"]}  </div>
                                                            <div className="about-info-subtitle">{d["subtitle"]}  </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-7">
                                                    <div className="about-info-content">
                                                        <div className="about-info-inner">
                                                            <div className="card-body p-3">
                                                                <div className="about-info-text" dangerouslySetInnerHTML={{ __html: d["text"] }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 desktop-about-title">
                                                    <div className="about-info-text-content">
                                                        <div>
                                                            <div className="about-info-title">{d["title"]}  </div>
                                                            <div className="about-info-subtitle">{d["subtitle"]}  </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>


            <section className="section" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/vmi_background.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vimi-image-content">
                                <div className="w-100 me-2">
                                    <img src="https://kompass.events/kompass_events/upload/kompass_events/about_us_ceyda.png" className="vimi-image" />
                                </div>
                                <div className="w-100">
                                    <div className="mb-2">
                                        <img src="https://kompass.events/kompass_events/upload/kompass_events/about_us_sertap.png" className="vimi-image" />
                                    </div>
                                    <div>
                                        <img src="https://kompass.events/kompass_events/upload/kompass_events/about_us_sezen.png" className="vimi-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vimi-content">
                                <div className="row">
                                    <div className="col-12">
                                        {
                                            (aboutusData.filter((f) => { return (f["lang"] === Lang() && f["section"] === "vision") }) || []).map((d) => {
                                                return (
                                                    <>
                                                        <div className="vimi-title">
                                                            {d["title"]}
                                                        </div>
                                                        <div className="vimi-text">
                                                            {d["text"]}
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className="col-12 mt-5">
                                        {
                                            (aboutusData.filter((f) => { return (f["lang"] === Lang() && f["section"] === "mission") }) || []).map((d) => {
                                                return (
                                                    <>
                                                        <div className="vimi-title">
                                                            {d["title"]}
                                                        </div>
                                                        <div className="vimi-text">
                                                            {d["text"]}
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
                </div>
            </section>


            <section className="section" style={{ backgroundColor: "#ffff" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ceo-image-content">
                                <div className="w-100 me-2">
                                    <img src="https://kompass.events/kompass_events/upload/kompass_events/ceo_image.jpg" className="ceo-image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ceo-content">
                                <div className="row">
                                    {
                                        (aboutusData.filter((f) => { return (f["lang"] === Lang() && f["section"] === "ceo") }) || []).map((d) => {
                                            return (
                                                <>
                                                    <div className="col-12">
                                                        <div className="ceo-slogan">
                                                            {d["info"]}
                                                        </div>
                                                        <div className="ceo-title">
                                                            {d["title"]}
                                                        </div>
                                                        <div className="ceo-info">
                                                            {d["subtitle"]}
                                                        </div>
                                                        <div className="ceo-text" dangerouslySetInnerHTML={{ __html: d["text"] }}>
                                                        </div>
                                                        <div className="ceo-name">
                                                            {d["ceo_name"]}
                                                        </div>
                                                        <div className="ceo-jobs">
                                                            {d["jobs"]}
                                                        </div>
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
            </section>
        </>
    )
}
const Contact = () => {

    const [Alert, setAlert] = useState({ status: 0, text: "" })
    const [Gender, setGender] = useState(0)
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Text, setText] = useState("")
    const Control = () => {
        if (Gender === 0) { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][0]["name"] }); return false; }
        if (Name === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][1]["name"] }); return false; }
        if (Email === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][2]["name"] }); return false; }
        if (Phone === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][3]["name"] }); return false; }
        if (Text === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][4]["name"] }); return false; }
        return true
    }
    const Customer = () => {
        var respec = ""
        if (Gender === "Frau") {
            respec = "Sehr geehrte Frau " + Name;
        }
        else {
            respec = "Sehr geehrter Herr " + Name
        }
        const content = "" +
            "" + respec + "<br/>" +
            "<br/>" +
            "Ihre Nachricht ist bei uns angekommen, wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.<br/>" +
            "<br/>" +
            "Freundliche Grüsse" +
            "<br/><br/>" +
            "Kompass Events<br/>" +
            "Schaufelbergerstrasse 57 <br/>" +
            "CH-8055 Zürich<br/><br/>" +
            "info@kompass.events<br/>" +
            "+41 (0) 44 576 60 80<br/>";
        axios.post(Root({ type: "root" }), {
            params: "send-contact",
            email: Email,
            name: "Kompass Events",
            title: "Ihre Nachricht ist bei uns angekommen",
            content: content
        })
        return true;

    }
    const Company = () => {
        const content = "" +
            "Sie haben eine neue Nachricht. Bitte nehmen Sie Kontakt mit dem Absender auf." +
            "<br/><br/>" +
            "Anrede: " + Gender + "<br/>" +
            "Name und Vorname: " + Name + "<br/>" +
            "Telefon: " + Phone + "<br/>" +
            "E-Mail: " + Email + "<br/>" +
            "Bemerkungen: " + Text + "<br/>";
        axios.post(Root({ type: "root" }), {
            params: "send-contact",
            email: "info@kompass.events",
            name: Name,
            title: "Neue Nachricht",
            content: content
        })
        return true;
    }
    const Send = () => {
        if (Control()) {
            if (Customer()) {
                if (Company()) {
                    setAlert({ status: 1, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 3) })[0]["data"][0]["name"] });
                    setGender(0)
                    setName("")
                    setEmail("")
                    setPhone("")
                    setText("")
                }
            }
        }
    }
    return (
        <>
            <section className="section">
                <div className="about-us-content">
                    <div className="container">

                        <div className="row d-flex justify-content-center">
                            {
                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                    return (
                                        (d["contact"] || []).map((d) => {
                                            return (
                                                <div className="col-lg-4">
                                                    <div className="about-us-card shadow-sm" >
                                                        <div className="about-us-title">{d["title"]}</div>
                                                        <div className="about-us-text">{d["value"]}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                                })
                            }
                        </div>

                        <div className="row mt-5">
                            <div className="col-lg-6 mt-2">
                                <div className="alert-danger" hidden={Alert.status === 2 ? false : true}>
                                    {Alert.text}
                                </div>
                                <div className="alert-success" hidden={Alert.status === 1 ? false : true}>
                                    {Alert.text}
                                </div>
                                <div className="card card-xl-stretch border-radius-12">
                                    <div className="card-body">
                                        <div className="row">
                                            {
                                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="form-title">{d["form"][0]["placeholder"]} *</label>
                                                                <select className="form-select contact-form h-50px" onChange={(e) => { setGender(e.target.value) }}>
                                                                    <option value={0}></option>
                                                                    {d["form"][0]["subs"].map((f) => { return (<option value={f}>{f}</option>) })}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                            {
                                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="form-title">{d["form"][1]["placeholder"]}  *</label>
                                                                <input className="form-control contact-form h-50px" value={Name} onChange={(e) => { setName(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                            {
                                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="form-title">{d["form"][2]["placeholder"]} *</label>
                                                                <input className="form-control contact-form h-50px" value={Email} onChange={(e) => { setEmail(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="form-title">{d["form"][3]["placeholder"]} *</label>
                                                                <input className="form-control contact-form h-50px" value={Phone} onChange={(e) => { setPhone(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                (ContactForm || []).filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) }).map((d) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label className="form-title">{d["form"][4]["placeholder"]} *</label>
                                                                <textarea className="form-control contact-form h-100px" value={Text} onChange={(e) => { setText(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }


                                            <div className="col-lg-12">
                                                <button className="btn btn-info w-100 h-50px" onClick={() => { Send() }}>
                                                    {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 5) })[0]["button"]}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="https://kompassgroup.ch/assets/img/contact.jpg" className="contact-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
const Detail = ({ id = "" }) => {

    const [EventId, setEventId] = useState("")
    useEffect(() => {
        const response = (eventData || []).filter((d) => { return (parseInt(d["id"]) === parseInt(id)) });
        (response || []).map((d) => { setEventId(d["event_id"]) })
    }, [])
    return (
        <>
            {/**BANNER */}
            <Module module="banner" data={eventData.filter((d) => { return (d["event_id"] === id && d["lang"] === Lang()) })} />

            {/**INFO */}
            {
                //backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/past_event_bg.jpg)`
                eventData.filter((d) => { return (d["event_id"] === id && d["lang"] === Lang()) }).length > 0 &&
                <section className="section" style={{}}>
                    <div className="container">
                        <Module module="event-info" data={eventData.filter((d) => { return (d["event_id"] === id && d["lang"] === Lang()) })} />
                    </div>
                </section>
            }

            {/**TAGS */}
            {
                //backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/past_event_bg.jpg)`
                tagsData.filter((d) => { return (d["event_id"] === id) }).length > 0 &&
                <section className="section" style={{}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {<Module module="section" data={sectionData.filter((d) => { return (d["event_id"] === id && d["section_name"] === "tags" && d["lang"] === Lang()) })} />}
                            </div>
                        </div>
                        <Module module="event-tag" data={tagsData.filter((d) => { return (d["event_id"] === id && d["lang"] === Lang() && d["lang"] === Lang()) })} />
                    </div>
                </section>
            }


            {/**STREAM */}
            {
                //backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/past_event_bg.jpg)` 
                streamData.filter((d) => { return (d["event_id"] === id) }).length > 0 &&
                <section className="section" style={{}}>
                    <div className="container">
                        <Module
                            module="event-stream"
                            stream={{
                                id: id,
                                data: streamData.filter((d) => { return (d["event_id"] === id && d["lang"] === Lang()) }),
                                image: "https://kompass.events/kompass_events/upload/kompass_events/fazilsay_stream_background.jpg"
                            }}
                        />
                    </div>
                </section>
            }

            {/**VIDEO */}
            {
                //backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/music_background.jpg)`
                videoData.filter((d) => { return (d["event_id"] === id) }).length > 0 &&
                <section className="section" style={{}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Module module="section" data={sectionData.filter((d) => { return (d["event_id"] === id && d["section_name"] === "video" && d["lang"] === Lang()) })} classname={["", "", "", ""]} />
                            </div>
                        </div>
                        <Module module="event-video" data={videoData.filter((d) => { return (d["event_id"] === id) })} />
                    </div>
                </section>
            }


            {/**GALERY */}
            {
                //backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/awards_background.jpg)`
                galeryData.filter((d) => { return (d["event_id"] === id) }).length > 0 &&
                <section className="section" style={{}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Module module="section" data={sectionData.filter((d) => { return (d["event_id"] === id && d["section_name"] === "galery" && d["lang"] === Lang()) })} classname={["", "", "", ""]} />
                            </div>
                        </div>
                        <Module module="event-galery" data={galeryData.filter((d) => { return (d["event_id"] === id) })} />
                    </div>
                </section>
            }





        </>
    )
}
const Faq = () => {

    const [Active, setActive] = useState(1)
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Module module="section" data={[{ title: "FAQ", text: "Häufig Gestellte Fragen für Konzerte und Theateraufführungen." }]} />
                        </div>
                    </div>
                    <div className="row">
                        {
                            (faqData || []).filter((f) => { return (f["lang"] === Lang()) }).map((d, x) => {
                                return (
                                    <div className="col-lg-12 mb-2">
                                        <div className={`tabs-head ${Active === x ? "active" : ""}`} onClick={() => { setActive(x) }}>
                                            {d["title"]}
                                        </div>
                                        <div className={`tabs-content ${Active === x ? "active" : ""}`}>
                                            {d["text"]}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="faq-image" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/faq-background.png)` }}></div>
            </div>


        </>
    )
}
const Akredite = () => {

    const fileRef = useRef()
    const [Alert, setAlert] = useState({ status: 0, text: "" })

    const [Gender, setGender] = useState(0)
    const [Name, setName] = useState("")
    const [Jobs, setJobs] = useState("")
    const [Build, setBuild] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [PressCard, setPressCard] = useState("")
    const [BroadcastingName, setBroadcastingName] = useState("")
    const [BroadcastingType, setBroadcastingType] = useState("")
    const [ActivitySelect, setActivitySelect] = useState("")
    const [ActivityJoin, setActivityJoin] = useState("")
    const [OtherText, setOtherText] = useState("")
    const [Document, setDocument] = useState("")
    const [DocumentInfo, setDocumentInfo] = useState("")

    const Control = () => {
        if (Gender === 0) { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 1) })[0]["data"][0]["name"] }); return false; }
        if (Name === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][1]["name"] }); return false; }
        if (Jobs === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][2]["name"] }); return false; }
        if (Build === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][3]["name"] }); return false; }
        if (Email === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][4]["name"] }); return false; }
        if (Phone === "") { setAlert({ status: 2, text:AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][5]["name"] }); return false; }
        if (PressCard === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][6]["name"]}); return false; }
        if (BroadcastingName === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][7]["name"]}); return false; }
        if (BroadcastingType === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][8]["name"] }); return false; }
        if (ActivitySelect === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][9]["name"] }); return false; }
        if (ActivityJoin === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][10]["name"] }); return false; }
        if (OtherText === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][11]["name"] }); return false; }
        if (Document === "") { setAlert({ status: 2, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 2) })[0]["data"][12]["name"] }); return false; }
        return true
    }
    const Upload = async (e) => {
        e.preventDefault();
        const [file] = e.target.files;
        const data = new FormData();
        if (file) {
            data.append('files', file);
            var result = (await axios.post(Root({ type: "upload" }), data)).data
            setDocument(`https://kompass.events/kompass_events/${result.slice(2, 500)}`)
            setDocumentInfo(file.name)
            console.log(file)
        }
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    }
    const Customer = () => {
        var respec = ""
        if (Gender === "Frau") {
            respec = "Sehr geehrte Frau " + Name;
        }
        else {
            respec = "Sehr geehrter Herr " + Name
        }
        const content = "" +
            "" + respec + "<br/>" +
            "<br/>" +
            "Ihre Nachricht ist bei uns angekommen, wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.<br/>" +
            "<br/>" +
            "Freundliche Grüsse" +
            "<br/><br/>" +
            "Kompass Events<br/>" +
            "Schaufelbergerstrasse 57 <br/>" +
            "CH-8055 Zürich<br/><br/>" +
            "info@kompass.events<br/>" +
            "+41 (0) 44 576 60 80<br/>";
        axios.post(Root({ type: "root" }), {
            params: "send-contact",
            email: Email,
            name: "Kompass Events",
            title: "Ihre Nachricht ist bei uns angekommen",
            content: content
        })
        return true;

    }
    const Company = () => {
        const content = "" +
            "Sie haben eine neue Nachricht. Bitte nehmen Sie Kontakt mit dem Absender auf." +
            "<br/><br/>" +
            "Anrede: " + Gender + "<br/>" +
            "Name und Vorname: " + Name + "<br/>" +
            "Berufsbezeichnung: " + Jobs + "<br/>" +
            "Institution/Organisation: " + Company + "<br/>" +
            "E-Mail: " + Email + "<br/>" +
            "Telefon: " + Phone + "<br/>" +
            "Presseausweisnummer: " + PressCard + "<br/>" +
            "Name des Publikationsorgans: " + BroadcastingName + "<br/>" +
            "Art des Publikationsorgans : " + BroadcastingType + "<br/>" +
            "Spezifisches Interesse an der Veranstaltung  : " + ActivitySelect + "<br/>" +
            "Frühere Teilnahmen/Veröffentlichungen  : " + ActivityJoin + "<br/>" +
            "Zusätzliche Notizen  : " + OtherText + "<br/>" +
            "Dokument:  <a href=" + Document + ">Dokument</a><br/>" +
            "<br/>";
        axios.post(Root({ type: "root" }), {
            params: "send-contact",
            email: "info@kompass.events",
            name: Name,
            title: "Neue Nachricht",
            content: content
        })
        return true;
    }
    const Send = () => {
        if (Control()) {
            if (Customer()) {
                if (Company()) {
                    setAlert({ status: 1, text: AlertData.filter((d) => { return (d["lang"] === Lang() && d["id"] === 3) })[0]["data"][0]["name"] });
                    setDocumentInfo("")
                    setGender(0)
                    setName("")
                    setJobs("")
                    setBuild("")
                    setEmail("")
                    setPhone("")
                    setPressCard("")
                    setBroadcastingName("")
                    setBroadcastingType("")
                    setActivitySelect("")
                    setActivityJoin("")
                    setOtherText("")
                    setDocument("")
                    setDocumentInfo("")
                }
            }
        }
    }
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Module module="section" />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="akredite-card shadow-sm" style={{ backgroundImage: `url(https://kompass.events/kompass_events/upload/kompass_events/akkreditierung_bg.png)` }}>
                                <div className="akredite-content">
                                    <div>
                                        <div className="akredite-title">
                                            {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) })[0]["title"]}
                                        </div>
                                        <div className="akredite-text">
                                            {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) })[0]["text"]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5 mobile-resorce">
                        <div className="col-lg-12 mt-2">
                            <div className="alert-danger" hidden={Alert.status === 2 ? false : true}>
                                {Alert.text}
                            </div>
                            <div className="alert-success" hidden={Alert.status === 1 ? false : true}>
                                {Alert.text}
                            </div>

                            <div className="card border-radius-12 mb-3" >
                                <div className="card-header">
                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => { return (s["title"]) }))
                                    })}
                                </div>
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 1 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <select className="form-select contact-form h-50px" onChange={(e) => { setGender(e.target.value) }}>
                                                    <option value={0}></option>

                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => {
                                                                    return (r["id"] === 1 && <>{
                                                                        (r["subs"] || []).map((k) => {
                                                                            return (<option value={k}>{k}</option>)
                                                                        })
                                                                    } *</>)
                                                                })
                                                            )
                                                        }))
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 2 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={Name} onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 3 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={Jobs} onChange={(e) => { setJobs(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 4 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={Build} onChange={(e) => { setBuild(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 5 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={Phone} onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 1) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 6 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={Phone} onChange={(e) => { setPhone(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card border-radius-12 mt-3">
                                <div className="card-header">
                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 2) }).map((s) => { return (s["title"]) }))
                                    })}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 2) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 1 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={PressCard} onChange={(e) => { setPressCard(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 2) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 2 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={BroadcastingName} onChange={(e) => { setBroadcastingName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 2) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 3 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={BroadcastingType} onChange={(e) => { setBroadcastingType(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-radius-12 mt-3">
                                <div className="card-header">
                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 3) }).map((s) => { return (s["title"]) }))
                                    })}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 3) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 1 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={ActivitySelect} onChange={(e) => { setActivitySelect(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">
                                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 3) }).map((s) => {
                                                            return (
                                                                (s["data"] || []).map((r) => { return (r["id"] === 2 && <>{r["placeholder"]} *</>) })
                                                            )
                                                        }))
                                                    })}
                                                </label>
                                                <input className="form-control contact-form h-50px" value={ActivityJoin} onChange={(e) => { setActivityJoin(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card border-radius-12 mt-3">
                                <div className="card-header">
                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 4) }).map((s) => { return (s["title"]) }))
                                    })}
                                </div>
                                <div className="card-body">
                                    <div className="akredite-upload" onClick={() => { fileRef.current.click() }}>
                                        {
                                            DocumentInfo === "" ?
                                                <div className="d-flex">
                                                    <div className="w-50px me-2 d-flex align-items-center">
                                                        <i class="fa-solid fa-cloud-arrow-up fs-1 text-gray"></i>
                                                    </div>
                                                    <div className="w-100">
                                                        {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                                            return ((d["data"] || []).filter((d) => { return (d["id"] === 4) }).map((s) => {
                                                                return (
                                                                    (s["data"] || []).map((r) => { return (r["id"] === 1 && <><div>{r["placeholder"]}</div></>) })
                                                                )
                                                            }))
                                                        })}

                                                    </div>
                                                </div>
                                                :
                                                <div className="d-flex justify-content-center">
                                                    <div className="card w-100 shadow-sm">
                                                        <div className="card-body">
                                                            {DocumentInfo}
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                        <input ref={fileRef} type="file" onChange={Upload} hidden />
                                    </div>
                                </div>
                            </div>

                            <div className="card border-radius-12 mt-3">
                                <div className="card-header">
                                    {(AkretidationData || []).filter((d) => { return (d["lang"] === Lang()) }).map((d) => {
                                        return ((d["data"] || []).filter((d) => { return (d["id"] === 5) }).map((s) => { return (s["title"]) }))
                                    })}
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label className="form-title">Weitere Informationen, die Sie hinzufügen möchten *</label>
                                                <textarea className="form-control contact-form h-100px" value={OtherText} onChange={(e) => { setOtherText(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 mt-2">
                                <button className="btn btn-info w-100 h-50px" onClick={() => { Send() }}>
                                    {Button.filter((d) => { return (d["lang"] === Lang() && d["id"] === 5) })[0]["button"]}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}





export default function Index() {
    const { page, type, name, id } = useParams()


    switch (page) {
        case "event": {
            switch (type) {
                case "detail": return <Detail id={id} />
                default: return <Event />
            }
        };
        case "uberuns": return <About />;
        case "kontakt": return <Contact />;
        case "faq": return <Faq />;
        case "akkreditierung": return <Akredite />;
        default: return <Home />
    }

}