import * as yup from "yup"
const phoneRegExp = /[1]?[\( ]?(\d{3})([\)\- ])?[ ]?(\d{3})[\- ]?(\d{4})/gm 
const emailRegExp = /\w+@\w+\.[a-zA-Z]{2,}/g

export const advancedSchema=yup.object().shape({
    companyName:yup.string().matches(/^[A-Za-z ]*$/, 'Lütfen gecerli bir sirket ismi giriniz, özel karakterler kullanmayiniz').max(80,'Maksimum 40 karakter girilebilir').required('Şirket adi zorunludur'),
    firstName:yup.string().matches(/^[A-Za-z ]*$/, 'Lütfen gecerli bir isim giriniz, özel karakterler kullanmayiniz').max(40,'Maksimum 40 karakter girilebilir').required('İsim zorunludur'),
    lastName:yup.string().matches(/^[A-Za-z ]*$/, 'Lütfen gecerli bir soyisim giriniz, özel karakterler kullanmayiniz').max(40,'Maksimum 40 karakter girilebilir').required('Soyisim zorunludur'),
    emailAddress:yup.string().matches(emailRegExp, 'Lutfen geçerli bir email giriniz').email("Lutfen geçerli bir email giriniz").required('Email zorunludur'),
    phoneNumber:yup.string().matches(phoneRegExp, 'Geçerli bir telefon numarasi giriniz').required("Telefon numarasi zorunludur"),
    personPlan:yup.string().oneOf(['oneWeek', 'twoWeek', 'threeWeek'],'Lütfen bir zaman dilimi seçiniz').required('Zaman dilimi zorunludur') ,
    quantity:yup.number().min(50,"Bu toplu aliş servisinden yararlanabilmek için minimum 50 servis sipariş etmelisiniz").required('Bu alan zorunludur'),
    password:yup.string().required('Sifre zorunludur'),
    additionalInformation:yup.string()
})