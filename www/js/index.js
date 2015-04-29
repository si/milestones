/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        var dob = document.getElementById('dob');
        dob.addEventListener('change', app.setDays, false);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // Calculate day since entered date
    setDays: function(e) {

        //e.preventDefault();

        var dob = document.getElementById('dob');
        var start = Date.parse(dob.value);
        var now = Date.now();
        var diff = (now - start);

        var values = {
            days    : (diff/1000/60/60/24),
            months  : (diff/1000/60/60/24/12),
        };
        console.log('values=',values);

        app.setNumber('days', values.days);
        app.setNumber('months', values.months);

        app.setNumber('next_sf', app.getNextSigFig(values.days, 1));
    },

    // Set number to an element
    setNumber: function(id, val) {
        var el = document.getElementById(id);
        el.innerHTML = app.formatNumber(val);
    },

    getNextSigFig: function(n, sig) {
        var mult = Math.pow(10,
            sig - Math.floor(Math.log(n) / Math.LN10) - 1);
        //return Math.round(n * mult) / mult;
        return (Math.ceil(n * mult) / mult);
    },

    // Format round numbers
    formatNumber: function(val) {
        //return Math.floor(val);
        return Math.floor(val).toLocaleString();
    }

};

app.initialize();