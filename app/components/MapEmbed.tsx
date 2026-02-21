import React from 'react'

const MapEmbed: React.FC = () => {
  // Using search query for JMMF+FM4, Panchkhal 45200, Nepal
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.896876396866!2d85.6375!3d27.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb04a123456789%3A0xabcdef1234567890!2sJMMF%2BFM4%2C%20Panchkhal%2045200%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: '8px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ness Farm Stay Location"
    />
  )
}

export default MapEmbed
