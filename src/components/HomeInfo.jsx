import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      hi, I am <span className="font-semibold">alwi</span>
      <br/>
      a software engineer from Armenia
    </h1>
  ),
  2: (
    <InfoBox
      text="throughout my journey, I've collaborated with various organizations, acquiring a diverse skill set in the process"
      link="/about"
      btnText="learn more"
    />
  ),
  3: (
    <InfoBox
      text="contributed to numerous successful projects over the years, playing a key role in their achievements. interested in the details?"
      link="/projects"
      btnText="visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="looking to transform your ideas into reality or in need of technical expertise? reach out, and let's start crafting your solution together!"
      link="/contact"
      btnText="let's talk"
    />
  )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo