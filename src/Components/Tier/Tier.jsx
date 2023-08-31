import "./Tier.css";
import Union from "../../assets/Union.png";
import { useTypingEffect } from "../Typing/Typing";
import React from "react";

function Tier() {
  const textToAnimate =
    " We are a team of qualified professionals specializing in different areas of digital services. We work\nclosely with our clients to offer tailored solutions based on their specific needs, using the latest\ntechnologies and tools to deliver quality services that help clients achieve their business goals.";
  const interKeyStrokeDurationInMs = 50;
  const animatedText = useTypingEffect(
    textToAnimate,
    interKeyStrokeDurationInMs
  );

  return (
    <div>
      <link
        href="https://assets.website-files.com/6183b55f780ace756b6c3270/css/az-boldest.webflow.57f76183c.css"
        rel="stylesheet"
        type="text/css"
      />
      <div className="section-hero white">
        <div>
          <div>
            <h1 className="having-text">
              HAVE ANY TROUBLES ? <br />
              <span className="heading-our">OUR HANDS ARE OPEN TO YOU</span>
            </h1>
            <div className="small-container">
              <p
                id="w-node-b5fef013-a912-18b5-255d-f2d05dda7c52-a36c3288"
                className=" text-center"
              >
                We are a team of qualified professionals specializing in
                different areas of digital services. We work closely with our
                clients to offer tailored solutions based on their specific
                needs, using the latest technologies and tools to deliver
                quality services that help clients achieve their business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section timeline">
        <div className="container no-padding">
          <div className="timeline-wrapper">
            <div className="timeline-proggres-holder">
              <div className="timeline-proggres-bar" />
            </div>
            <div className="timeline-item">
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ab-a36c3288"
                className="timeline-left"
              >
                <h3 className="sticky">TIER 0</h3>
              </div>
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ae-a36c3288"
                className="timeline-center"
              >
                <div className="timeline-circle" />
              </div>
              <div className="timeline-right">
                <h5 className="semi-bold">SELF SERVICE UNIT</h5>
                <p className="grey-text top-margin">
                  Anyone can use our chatbots, blogs or websites. Also pick our
                  social contact method such as twitter, LinkedIn, Facebook.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                id="w-node-e7dc4c6c-be0c-f036-05ee-ea9fb8b1bc6d-a36c3288"
                className="timeline-left"
              >
                <h3 className="sticky">TIER 1</h3>
              </div>
              <div
                id="w-node-_5358a172-3e22-2e96-3258-fa3b6e333bcf-a36c3288"
                className="timeline-center"
              >
                <div className="timeline-circle" />
              </div>
              <div className="timeline-right">
                <h5 className="semi-bold">CUSTOMER SUPPORT DIVISON</h5>
                <p className="grey-text top-margin">
                  Our Customer Support Team addressea the issue and the user
                  gets the response within 24-48 hours.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ab-a36c3288"
                className="timeline-left"
              >
                <h3 className="sticky">TIER 3</h3>
              </div>
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ae-a36c3288"
                className="timeline-center"
              >
                <div className="timeline-circle" />
              </div>
              <div className="timeline-right">
                <h5 className="semi-bold">TECHNICAL SUPPORT DIVISON</h5>
                <p className="grey-text top-margin">
                  If the solution you received is not satisfactory,our Tier 2
                  technical team will monitor it and you will be notified within
                  3 to 5 bussiness days.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ab-a36c3288"
                className="timeline-left"
              >
                <h3 className="sticky">TIER 3</h3>
              </div>
              <div
                id="w-node-c9167761-0118-d8da-34c9-88620a9a20ae-a36c3288"
                className="timeline-center"
              >
                <div className="timeline-circle" />
              </div>
              <div className="timeline-right">
                <h5 className="semi-bold">TECHNICAL SUPPORT DIVISON</h5>
                <p className="grey-text top-margin">
                  If the solution you received is not satisfactory,our Tier 2
                  technical team will monitor it and you will be notified within
                  3 to 5 bussiness days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tier;
