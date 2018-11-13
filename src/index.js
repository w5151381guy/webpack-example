import config from './config'
import $ from 'jquery'
import './index.scss'

$(() => {
  $('body').append(`<div>${config}</div>`)
})
