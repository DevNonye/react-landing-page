import React, { Component } from 'react'
import './main.css'

class Main extends Component {
  render() {
    return (
        <main>
            <section className="intro">
                <h2>About Us</h2>
                <div>
                  <p>Mauris vestibulum luctus dui. Vestibulum a nisl vel nisi malesuada maximus ut et nulla. Duis non facilisis est, bibendum consectetur sem. Etiam ut nunc ac magna ornare lobortis at sit amet lectus. Etiam eget leo tempor, condimentum turpis sit amet, ultricies nunc. Aliquam erat volutpat. Morbi a egestas arcu. Nullam ac facilisis urna. Morbi posuere semper lacus vel sagittis. Nam facilisis accumsan efficitur.</p>
                </div>
            </section>
            <div>
                <div className="services">
                  <div className="service__one">
                  <p className="service__icon"><i className="fas fa-calendar-alt"></i></p>
                  <p className="service__title">Planning</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service_two">
                  <p className="service__icon"><i className="fas fa-pencil-alt"></i></p>
                  <p className="service__title">Design</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                  <div className="service__three">
                  <p className="service__icon"><i className="fas fa-code"></i></p>
                  <p className="service__title">Development</p>
                  <p>Pellentesque congue dolor arcu, in finibus nisi gravida non. Sed mi risus, congue in nunc sed, bibendum porta nibh. Praesent.</p>
                  </div>
                </div>
            </div>
            <div className="gallery">
              <div className="gallery__item__one"></div>
              <div className="gallery__item__two"></div>
              <div className="gallery__item__three"></div>
              <div className="gallery__item__four"></div>
              <div className="gallery__item__five"></div>
              <div className="gallery__item__six"></div>
            </div>
        </main>
    )
  }
}

export default Main;