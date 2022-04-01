import React from 'react'
import FeatureCard from '../FeatureCard/FeatureCard'
import './AdvancedStatistics.css'

import brandRecognitionIcon from '../../images/icon-brand-recognition.svg'
import detailedRecordsIcon from '../../images/icon-detailed-records.svg'
import fullyCustomizableIcon from '../../images/icon-fully-customizable.svg'


export default function AdvancedStatistics() {
    return (
        <>
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <FeatureCard src={brandRecognitionIcon} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
        <FeatureCard src={detailedRecordsIcon} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
        <FeatureCard src={fullyCustomizableIcon} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
        </>
    )
}