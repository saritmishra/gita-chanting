"use strict";

var DropdownCtrl = function ($scope, $location, $routeParams, backendFactory) {

  this.selectedChapterNbr = $routeParams.chapterId;
  this.selectedVerseNbr = $routeParams.verseId;
  this.selectedChapter = "Chapter " + this.selectedChapterNbr;
  this.selectedVerse = "Verse " + this.selectedVerseNbr;

  // this.versesInChapter = [0, 46, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];
  this.versesInChapter = backendFactory.getVersesByChapter();

  this.chapters = [];
  this.verses = [];

  var totalChapters = backendFactory.getTotalChapters();
  for (var i = 1; i <= totalChapters; i += 1) {
    this.chapters.push(i);
  };

  this.updateVerses = function (chapter){
    chapter = parseInt(chapter, 10);
    this.verses = [];
    for (var i = 1; i <= this.versesInChapter[chapter]; i += 1) {
      this.verses.push(i);
    };
  };
 this.updateVerses(this.selectedChapterNbr); // Initialize verses for the current chapter

  this.setChapterSelection = function(selection){
    this.selectedChapter =  "Chapter " + selection;
    this.selectedChapterNbr = selection;
    this.updateVerses(selection);

  };

  this.setVerseSelection = function(selection) {
    this.selectedVerse = "Verse " + selection;
    this.selectedVerseNbr = selection;
  };

  this.changeRoute = function() {
    $location.path("/chapter" + this.selectedChapterNbr + "/verse" + this.selectedVerseNbr);
  };

};

angular.module("learn2chant").controller("DropdownCtrl", ["$scope", "$location", "$routeParams", "backendFactory", DropdownCtrl]);
