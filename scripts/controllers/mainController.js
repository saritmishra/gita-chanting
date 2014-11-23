/* global angular */

"use strict";

var mainController = function ($routeParams, $location, backendFactory) {
    this.chapterId = $routeParams.chapterId;
    this.verseId = $routeParams.verseId;
    this.chapterText = [];

    this.verseId = backendFactory.padZero(this.verseId);
    this.chapterId = backendFactory.padZero(this.chapterId);

    var baseAudioUrl = "data/audio/chapter" + this.chapterId + "/";
    this.verseURL = baseAudioUrl + "bvg" + this.chapterId + "v" + this.verseId + ".mp3"; //bvg02v65.mp3

    // var baseTextUrl = "data/text/chapter" + this.chapterId + "/";
    // this.verseText = baseTextUrl + "verse-" + this.chapterId + "-" + this.verseId + "-1.png"; //verse-01-38-1.png

    // Get Verse text information
    var self = this;
    backendFactory.getChapterJSON(self.chapterId).
      success(function(data, status, headers, config) {
        self.verseText = data[self.verseId - 1] ;
      }).
      error(function(data, status, headers, config) {
        console.log("error in fetching json");
      });

      // Handle keyboard events
      this.onKeyDown = function(event) {
        var SPACE_KEY = 32;
        var LEFT_ARROW = 37;
        var RIGHT_ARROW = 39;

        if (event.which == RIGHT_ARROW)
          this.goRight();

        if (event.which == LEFT_ARROW)
          this.goLeft();

      };

      this.goBackward = function(){ // Decrement verseId and route to that page
        $location.path("/chapter" + this.chapterId + "/verse" + backendFactory.decrementVerse(this.chapterId, this.verseId));
      };

      this.goForward = function(){ // Increment verseId and route to that page
        $location.path("/chapter" + this.chapterId + "/verse" + backendFactory.incrementVerse(this.chapterId, this.verseId));
      };
};

angular.module("learn2chant").controller("mainController", [ "$routeParams", "$location", "backendFactory", mainController]);



