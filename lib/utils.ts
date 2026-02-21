export const createWhatsAppLink = (villaName?: string) => {
  const base = "https://wa.me/9779808120452"
  const message = villaName 
    ? `Namaste! I am interested in booking ${villaName} at Ness Farm Stay.`
    : "Namaste! I am interested in booking a stay at Ness Farm Stay."
  return `${base}?text=${encodeURIComponent(message)}`
}
