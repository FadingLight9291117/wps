const date = new Date()
console.log(date.toLocaleDateString())

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
console.log(dayjs().format("YYYY-MM-DD"))