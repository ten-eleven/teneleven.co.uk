import * as React from "react";
import {Link, History} from "react-router";

require("./../styles/index.scss");

export interface ICaseStudyProps {
}

export default class OpentableCaseStudy extends React.Component<ICaseStudyProps, any> {

	componentWillMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div className="case-study-view">

				<Link to="/" className="case-study-view--back-link">←</Link>

				<div className="case-study-view-header">
          <div className="case-study-view-header--logo"></div>
          <div className="case-study-view-header--length">July 2013 - September 2015</div>
        </div>

        <div className="case-study-view-body">

          <div className="case-study-section">
            <div className="case-study-section--title">Restaurant Setup App</div>
            <div className="case-study-section--technologies">Angular JS, NET, Coffeescript, Protractor, Grunt JS</div>
            <div className="case-study-section--description">
              <p>We were contacted by OpenTable's Engineering Team in San Francisco to help with their team in building a restaurant setup product. This product would allow the restauranteurs to model their restaurant’s floor-plan and shifts. This would enable Opentable to understand the restaurant’s availability and thus, intelligently manages the restaurant’s reservations.</p>
              <p>We were tasked to build a tool that would help restauranteurs create floor-plans. This involved being able to create a resizable floor-plan and to add or align tables of different sizes onto the floor-plan. We started first by working with the design team by delivering quick prototypes on the floor-plan builder tool, with each iteration lasting 2 days. Not only, did we provided a slick drag n drop functionality, we also added more advanced features such as auto align, multiple select, snap to grid and collision detection logic which helped improve the user experience as it made the creation of a floor-plan less tedious.</p>
							<a className="case-study-section--media-link" href="https://vimeo.com/user8992440/review/109497523/39b3791493">
								<img className="case-study-section--image" src="/static/src/components/opentable-casestudy/images/floorplan.png"/>
							</a>
							<p>We were then asked to see if we could help them with Restaurant shifts. The shifts section allowed the restauranteur to setup their restaurants 7 day week availability. Each day can have one or more shifts. Previously, the user experience was limited to a “CRUD” view whereby adding or updating a shift happened in a detail view. This caused issues as shift changes might conflict with other shifts which was not apparent in the UI. We took this problem and applied the same prototyping strategy. We came up with the idea of displaying shifts in a grid and this would also allow the restauranteur to make time changes to the shift by dragging. Any problems were immediately surfaced and could be dealt with quickly.</p>
							<a className="case-study-section--media-link" href="https://vimeo.com/user8992440/review/109499898/abd39d90d5">
							<img className="case-study-section--image" src="/static/src/components/opentable-casestudy/images/shifts.png"/>
							</a>
							<p>The feedback from OpenTable’s customers has been great. They loved how quickly they could recreate their floor-plan within the tool and quickly adjust their shifts to update their restaurants availability.</p>
            </div>
          </div>

          <div className="case-study-section">
            <div className="case-study-section--title">Reservations App</div>
            <div className="case-study-section--technologies">Angular JS, Ionic JS, Node JS, Coffee-script, Protractor, Gulp</div>
            <div className="case-study-section--description">
              <p>OpenTable wanted a web application to help restaurant managers keep on top with their restaurant’s reservations. Managers wanted to be able to view reservations for any given day, make changes to a reservation and the ability to create reservations. We worked with OpenTable’s product managers and designers to create a product that delivered on these requirements. We delivered a slick mobile app and a desktop app. Each piece of functionality was broken down into reusable components and shared between the mobile and desktop app. We released this to production in weekly cycles which was made possible by relying heavily on automated QA and monitoring.</p>
							<a className="case-study-section--media-link" href="https://vimeo.com/user8992440/review/110442394/a6518fd53e">
								<img className="case-study-section--image" src="/static/src/components/opentable-casestudy/images/desktop-reservations.png"/>
							</a>
							<p>The product was well received by OpenTable’s users. They loved that they could review their restaurants day to day workload from wherever they were.</p>
						</div>
          </div>

          <div className="case-study-section">
            <div className="case-study-section--title">Reservations Next</div>
            <div className="case-study-section--technologies">Angular JS, Node JS, Coffee-script, Gulp</div>
            <div className="case-study-section--description">
              <p>OpenTable wanted a more advanced version of the desktop web app that was on feature parity to their iPad app. The requirements of this were that it needed to be offline-ready, with a fully asynchronous user experience, continuous real time updates and restaurant availability calculated on the client. We architected the application with these requirements in mind, borrowing ideas from ReactJS apps architecture. We were able to deliver a product that had a very similar experience to the iPad app. In addition, we also trained their engineering team in San Francisco to succeed with future development of the product.</p>
							<img className="case-study-section--image" src="/static/src/components/opentable-casestudy/images/next-1.png"/>
							<img className="case-study-section--image" src="/static/src/components/opentable-casestudy/images/next-2.png"/>
							<p>The product is currently in beta and has been previewed to a small selection of restaurants, so far the feedback has been well received.</p>
						</div>
          </div>

        </div>

			</div>
		);
	}
}
