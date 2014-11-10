/* global  angular */

"use strict";

var backendFactory = function($http) {
    var factory = {};

    factory.versesInChapter = [0, 46, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];
    factory.totalChapters = 18;

    factory.padZero = function(x) {
        return (x.length === 1) ? "0" + x : x;
    };

    factory.getVersesByChapter = function(){
        return factory.versesInChapter;
    };

    factory.getTotalChapters = function(){
        return factory.totalChapters;
    };

    factory.getChapterJSON = function(chapterId) {
        return $http.get("data/text/chapter" + this.padZero(chapterId) + ".json");
    };

    factory.incrementVerse = function(chapter, verse){
        verse = parseInt(verse, 10);
        chapter = parseInt(chapter, 10);
        return ( verse < this.versesInChapter[chapter]) ? this.padZero(verse + 1) : verse;
    };

    factory.decrementVerse = function(chapter, verse){
        verse = parseInt(verse, 10);
        chapter = parseInt(chapter, 10);
        return ( verse ==1 ) ? verse : this.padZero(verse - 1);
    };

    return factory;
};

angular.module("learn2chant").factory("backendFactory", ["$http", backendFactory]);
