import * as React from "react";
import {Link} from "react-router";

require("./../styles/index.scss");

export interface IHomeProps {

}

export default class Home extends React.Component<IHomeProps, any> {

	render() {
		return (
			<div>

				<div className="nav">
					<div className="nav--logo logo">
						ten eleven
					</div>
					<a href="mailto:joe@teneleven.co.uk" className="nav--contact-us contact-us">contact us</a>
				</div>

				<div className="splash">
					<div className="splash-wrap">
						<div className="splash--heading">We help companies build delightful products.</div>

						<div className="splash-blurb">

							<div className="splash-blurb--item our-expertise">
								<div className="our-expertise--title">Who are we</div>
								<div className="our-expertise--blurb">We're a software development team based in London. We specialise in building complex web applications. We have experience working with organisations and startups such as Opentable, Nestle and the BBC.</div>
								<div className="our-expertise--keywords">We can help on:
								<ul className="keywords-list">
									<li className="keyword">Frontend Development</li>
									<li className="keyword">Product Exploration</li>
									<li className="keyword">Backend Development</li>
									<li className="keyword">QA Automation</li>
									<li className="keyword">Continous Integration</li>
								</ul>
								</div>
							</div>

							<div className="splash-blurb--item how-can-help">
								<div className="how-can-help--title">How we can Help</div>

								<div className="how-can-help__adding-team">
									<div className="how-can-help__adding-team--title">Working together</div>
									<div className="how-can-help__adding-team--blurb">Falling behind in delivering deadlines and need some features fast? We can provide a helping hand in getting your products shipped faster.</div>
								</div>

								<div className="how-can-help__team-hire">
									<div className="how-can-help__team-hire--title">Team for hire</div>
									<div className="how-can-help__team-hire--blurb">We have years of experience building products for organisations. Leverage on our experience to help you plan, prototype and build your product from scratch.</div>
								</div>

							</div>

						</div>

					</div>

				</div>

				<div className="availability">
					<p>We're available for Q1 2016. <a href="mailto:joe@teneleven.co.uk">Contact us</a> about your project.</p>
				</div>

				<div className="showcases">

					<div className="showcases--heading">Our Client Work</div>

					<div className="showcases--item showcase__opentable">
						<div className="showcase--overlay">
							<div className="showcase__opentable--logo"></div>
							<div className="showcase__opentable--blurb">OpenTable connects diners, restaurants and their communities around the restaurant table through technology that fuels an extraordinary experience, each and every meal you share.</div>
							<Link to="/case-studies/opentable" className="showcase__opentable--link">Read More</Link>
						</div>
					</div>

					<div className="showcases--item showcase__pinpoint">
						<div className="showcase__pinpoint--logo"></div>
						<div className="showcase__pinpoint--blurb">Pinpoint makes Finding and sharing media files easy. Your own portal to create, organise and promote your media files for others to discover.</div>
						<div className="showcase__pinpoint--link">Read More</div>
					</div>

				</div>

			</div>
		);
	}
}
