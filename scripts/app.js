/* global angular */
"use strict";

angular
    .module("learn2chant", ["ngRoute", "ui.bootstrap"])
    .config( function ( $routeProvider ) {

        $routeProvider
            .when("/chapter:chapterId/verse:verseId", {
                templateUrl: "views/main.html",
                controllerAs: "main",
                controller: "mainController"
            })
            .otherwise({
                redirectTo: "/chapter01/verse01"
            });
    });


