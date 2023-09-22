const typeId = document.querySelector('.input_typeid')
const utmCompaign = document.querySelector('.input_compaign')
const cityId = document.querySelector('.input_cityid')
const erid = document.querySelector('.input_erid')
const result = document.querySelector('.result')
const url = document.querySelector('.input_url')
const inputList = Array.from(document.getElementsByTagName("input"))
console.log(inputList)

function generateUtm() {
  result.textContent = `${url.value}?utm_source=tg&utm_medium=cpc&utm_campaign=${utmCompaign.value}&utm_content=type_id:${typeId.value}|city_id:${cityId.value}&erid=${erid.value}`
}

inputList.forEach(i => {
    console.log(i)
    i.addEventListener('input', generateUtm)
});

