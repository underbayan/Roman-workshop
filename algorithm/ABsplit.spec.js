'use strict'
const { search } = require('./ABsplit')
let as = console.assert

as(search([8, 2, 9, 20, 23, 12]) === 2)
as(search([8, 2, 9, 3, 12, 1]) === 4)
as(search([8, 2, 9, 3, 12, 1, 20]) === 5)
as(search([8, 2, 9, 3]) === -1)
as(search([1, 2, 3, 4]) === 1)
