const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1973, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2001, end: 2018 },
  { name: 'Company Six', category: 'Property', start: 1987, end: 2004 },
  { name: 'Company Seven', category: 'Finance', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 1999, end: 2019 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 2001 }
]

// const ages = [33, 12, 20, 66, 90, 25, 1, 56, 44, 39, 99, 0, 48, 21, 74]
// // For Each Old
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

// For Each new style
// companies.forEach(function (company) {
//   console.log(company)
// })

// Filter -Old way
// let canDrink = []
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }
// console.log(canDrink)

// Filter -2nd style function
// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true
//   }
// })
// console.log(canDrink)

// Filter -New style function
// const canDrink = ages.filter(age => age >= 21)
// console.log(canDrink)

// Filter retailCompanies
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === 'Retail') {
//     return true
//   }
// })
// console.log(retailCompanies)

const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
console.log(eightiesCompanies)

const lastedTenYears = companies.filter(company => company.end - company.start <= 10)
console.log(lastedTenYears)

const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(companyNames)

const agesSquare = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2)
console.log(agesSquare, ages, companies)

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1
//   } else {
//     return -1
//   }
// })
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies)

// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }
// console.log(ageSum)

const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(totalYears)

const combined = ages.map(age => age * 2)
console.log(combined)
