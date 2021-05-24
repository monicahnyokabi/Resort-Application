import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state = {
    services: [
        {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
        "We offer free cocktails for any guest"
    },
    {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
        "Visit us to enjoy hiking at an affordable cost"
    },
    {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
        "We make sure that our guest are comfortable by offering free mode of transport"
    },
    {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
        "Want to taste the sweetest kind of beers from South Africa?Visit Alpha Resort"
    }
    ]
};
    render() {
    return (
    <section className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map(item => {
            return (
                <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
            );
        })}
        </div>
    </section>
    );
}
}