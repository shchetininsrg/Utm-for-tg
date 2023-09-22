const typeId = document.querySelector(".input_typeid");
const utmCompaign = document.querySelector(".input_compaign");
const cityId = document.querySelector(".input_cityid");
const erid = document.querySelector(".input_erid");
const result = document.querySelector(".result");
const url = document.querySelector(".input_url");
const validate = document.querySelector(".validate");
const inputList = Array.from(document.getElementsByTagName("input"));
const selectCity = document.querySelector(".select_city");
const selectType = document.querySelector(".select_type");

function generateUtm() {
  result.textContent = `${url.value}?utm_source=tg&utm_medium=cpc&utm_campaign=${utmCompaign.value}&utm_content=type_id:${selectType.value}|city_id:${selectCity.value}&erid=${erid.value}`;
  validate.textContent = `${result.textContent.length} из 260`;
  if (result.textContent.length > 260) {
    validate.style.color = "red";
    validate.textContent = `${result.textContent.length} из 260 слишком много`;
  } else {
    validate.style.color = "black";
    validate.textContent = `${result.textContent.length} из 260`;
  }
}

inputList.forEach((i) => {
  i.addEventListener("input", generateUtm);
});

selectCity.addEventListener("input", generateUtm);
selectType.addEventListener("input", generateUtm);
