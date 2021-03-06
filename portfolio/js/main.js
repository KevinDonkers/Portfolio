﻿/*
    main.js
    Kevin Donkers
    portfolio website
    This is the main JavaScript file for Kevin Donkers portfolio website 
*/

//the settings for the magellan navigation bar
$(document).foundation({
    "magellan-expedition": {
        active_class: 'active', // specify the class used for active sections
        threshold: 1, // how many pixels until the magellan bar sticks, 0 = auto
        destination_threshold: 5, // pixels from the top of destination for it to be considered active
        throttle_delay: 50, // calculation throttling to increase framerate
        fixed_top: 0, // top distance in pixels assigned to the fixed element on scroll
    }
});