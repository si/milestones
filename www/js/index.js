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
        console.log('dob.value=',dob.value);

        var start = Date.parse(dob.value);
        console.log('start=',start);
        var now = Date.now();
        console.log('now=',now);
        var diff = (now - start);
        console.log('diff=',diff)

        var values = {
            days    : (diff/1000/60/60/24),
            months  : (diff/1000/60/60/24/12),
        };
        console.log('values=',values);

        var days = document.getElementById('days');
        console.log('days=',days);
        days.innerHTML = Math.floor(values.days);

        var months = document.getElementById('months');
        console.log('months=',months);
        months.innerHTML = Math.floor(values.months);
    }

};

app.initialize();