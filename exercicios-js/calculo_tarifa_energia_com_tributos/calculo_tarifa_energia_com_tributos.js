const TE=0.35
const TUSD=0.45
const PIS_PASEP=0.0082
const COFINS=0.0377
const ICMS=0.18

const calcular_tarifa_com_impostos = (tarifa, icms, pis_pasep, cofins) => tarifa/((1 - icms) * (1 - pis_pasep - cofins))

te_com_impostos = calcular_tarifa_com_impostos(TE, ICMS, PIS_PASEP, COFINS)
tusd_com_impostos = calcular_tarifa_com_impostos(TUSD, ICMS, PIS_PASEP, COFINS)

console.log(`TE: ${te_com_impostos}, TUSD: ${tusd_com_impostos}`)
console.log(`Tarifa total (TE + TUSD): ${te_com_impostos + tusd_com_impostos}`)
