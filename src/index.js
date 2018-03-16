import $ from 'jquery'
import storage from './storage'

function showDatainfo() {
    const cloudArray = storage.getCloudArray()
    cloudArray.map(el => {
        $('body').append(el)
    })
}

function setDatainfo() {
    const cloudString = "Hello World 123"
    storage.setCloudArray(cloudString)
}

$(() => {
    setDatainfo()
    showDatainfo()
})