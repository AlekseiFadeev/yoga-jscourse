require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let calc = require('./modules/calc'),
        slider = require('./modules/slider'),
        form = require('./modules/form'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        tabs = require('./modules/tabs');

    calc();
    slider();
    form();
    modal();
    timer();
    tabs();
});