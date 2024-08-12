import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar2 from '../components/navbar2'
import Hero9 from '../components/hero9'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Defensive Left Zebra</title>
        <meta property="og:title" content="Defensive Left Zebra" />
      </Helmet>
      <Navbar2
        link1={
          <Fragment>
            <span className="home-text100 thq-link thq-body-small">
              Default value
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-link thq-body-small">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">
              About Us
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-link thq-body-small">
              Contact Us
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text104 thq-link thq-body-small">
              Default value
            </span>
          </Fragment>
        }
      ></Navbar2>
      <Hero9
        action1={
          <Fragment>
            <span className="home-text105 thq-body-small">Book Demo</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text106 thq-body-small">Know More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text107 thq-body-large">
              Bost your sales with arctan
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text108 thq-heading-1">ARCTAN</h1>
          </Fragment>
        }
      ></Hero9>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text109 thq-heading-2">
              AI Voicebot Simulation
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text110 thq-heading-2">Persona Mimicking</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text111 thq-heading-2">
              Insights &amp; Analytics
            </h2>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1586985564259-6211deb4c122?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1lZXRpbmclMjBjYWxsfGVufDB8fHx8MTcyMzQ2MDEzMXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Train sales reps with AI voicebots
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Mimic client personas
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text114 thq-body-small">
              Receive actionable insights
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text115">Get started today</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text116 thq-body-large">
              Experience the power of AI voicebots in providing a simulated
              environment for your sales representatives to enhance their skills
              and increase conversions.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-2">
              Ready to revolutionize your sales training?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text118 thq-heading-2">AI Voicebot Training</h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text119 thq-heading-2">Actionable Insights</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text120 thq-heading-2">
              Personalized Training Environment
            </h2>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjaGFydHN8ZW58MHx8fHwxNzIzNDYwMjEwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Train your sales representatives with AI voicebots that mimic the
              personas of your clientbase for realistic simulations.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Receive actionable insights from the AI voicebots to improve sales
              calls and increase conversion rates.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Create a personalized and stimulated training environment for your
              sales team with AI voicebots.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <p className="home-text124 thq-body-large">Starter Plan</p>
          </Fragment>
        }
        plan2={
          <Fragment>
            <p className="home-text125 thq-body-large">Business plan</p>
          </Fragment>
        }
        plan3={
          <Fragment>
            <p className="home-text126 thq-body-large">Enterprise plan</p>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text127 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text128 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text129 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text131 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text134 thq-heading-2">Pricing plan</h2>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <h3 className="home-text135 thq-heading-3">$99/month</h3>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <h3 className="home-text136 thq-heading-3">$29/mo</h3>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <h3 className="home-text137 thq-heading-3">$49/mo</h3>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text138 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <h3 className="home-text139 thq-heading-3">$79/month</h3>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <p className="home-text140 thq-body-large">$999/year</p>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text141 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <h3 className="home-text142 thq-heading-3">$299/yr</h3>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <p className="home-text143 thq-body-large">or $299 yearly</p>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text144 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <h3 className="home-text145 thq-heading-3">$499/yr</h3>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <p className="home-text146 thq-body-large">or $499 yearly</p>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147 thq-body-small">
              Contact Us for Discounted Pricing
            </span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text148 thq-body-large">$799/year</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text149 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text150 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text151 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text152 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text153 thq-body-small">
              AI Voicebot Training
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text154 thq-body-small">
              Persona Mimicking
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text155 thq-body-small">
              Actionable Insights
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text156 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text157 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text158 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text159 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text160 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text161 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Customized Clientbase Simulation
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Conversion Optimization Analysis
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text167 thq-body-small">
              24/7 Customer Support
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text177 thq-heading-2">Sign up for a demo</h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text178 thq-heading-2">
              Customize your voicebot
            </h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text179 thq-heading-2">Train your team</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text180 thq-heading-2">
              Receive actionable insights
            </h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Schedule a demo to see our AI voicebot in action and learn how it
              can revolutionize your sales training.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Tailor the AI voicebot to mimic the personas of your clientbase,
              providing a realistic training environment for your sales
              representatives.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Engage your sales team in interactive training sessions with the
              AI voicebot to practice real-life scenarios and improve their
              sales skills.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Get detailed analytics and insights from the AI voicebot to
              enhance your team&apos;s performance and increase conversion
              rates.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Using the AI voicebots has significantly improved our sales
              team&apos;s performance. The personalized training scenarios have
              been invaluable.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text186 thq-body-small">
              The AI voicebots have revolutionized how we train our sales reps.
              The insights provided have led to a noticeable increase in
              conversions.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text187 thq-body-small">
              I was skeptical at first, but the AI voicebots have exceeded my
              expectations. Our team is more confident and effective on calls
              now.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text188 thq-body-small">
              The AI voicebots have become an essential part of our sales
              training program. The ability to practice with different client
              personas is a game-changer.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text189 thq-body-small">
              See what our clients have to say about their experience using our
              AI voicebots for sales training.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text190 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text191 thq-body-large">John Doe</strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text192 thq-body-large">Jane Smith</strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text193 thq-body-large">
              Michael Johnson
            </strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text194 thq-body-large">Sarah Lee</strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text195 thq-body-small">
              CEO, B2B SAAS Company in Europe
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text196 thq-body-small">
              Sales Manager, AI SAAS Company in US.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text197 thq-body-small">
              Director of Sales, DEF Corp
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198 thq-body-small">
              VP of Sales Operations, GHI Industries
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text199 thq-body-large">
              Have a question or want to learn more about our AI voicebots for
              sales training? Reach out to us using the form below or contact us
              directly via phone or email.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text200 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text201 thq-heading-3">
              123 Main Street, City, Country
            </h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="home-text202 thq-heading-3">+1-123-456-7890</h3>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="home-text203 thq-body-large">Headquarters</p>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="home-text204 thq-body-large">Phone Support</p>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text205 thq-body-small">Product</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text206 thq-body-small">Solutions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text207 thq-body-small">Pricing</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text208 thq-body-small">About Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text209 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text210 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text211 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text212 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
