/* global angular */

"use strict";

var mainController = function ($routeParams) {
    // var this = $scope.this = {};
    this.chapterId = $routeParams.chapterId;
    this.verseId = $routeParams.verseId;

    // var init = function(){
    if (this.verseId.length === 1)
        this.verseId = "0" + this.verseId;
    if (this.chapterId.length === 1)
        this.chapterId = "0" + this.chapterId;
    // }; init();

    var baseAudioUrl = "data/audio/";
    this.verseURL = baseAudioUrl + "bvg" + this.chapterId + "v" + this.verseId + ".mp3"; //bvg02v65.mp3

    var baseTextUrl = "data/text/chapter" + this.chapterId + "/";
    this.verseText = baseTextUrl + "verse-" + this.chapterId + "-" + this.verseId + "-1.png"; //verse-01-38-1.png


};

angular.module("learn2chant").controller("mainController", [ "$routeParams", mainController]);



