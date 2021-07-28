require('dotenv').config()
require('module-alias/register')

const express = require('express')
const app = express()

const loadRoutes = require('@root/routes/load-routes')
const setUp = require('@root/setup')

loadRoutes(app)
setUp(app, express)