(function () {
	console.log('hello');
	var app = angular.module("simModule", []);

	app.controller('myController', function($scope, $interval) {


		$scope.words = ["want", "MINE", "candy", "fun", "STOP", "scared", "happy", "sticky", "bugs", "mean", "monster", "NO", "HEY!",  "may", "say", "way", "all", "ball", "call", "fall", "tall", "wall", "as", "ask", "bask", "task", "with", "had", "have"];

		$scope.phrase = ["I'm tired", "It's hot", "Leave me alone!", "Go away!", "What are you doing?", "I'm hungry!", "I'm starving!!", "Can I use your phone?", "Let's play a game.", "Don't do that!", "We're not friends anymore.", "NO FAIR!"];

		$scope.classes = ["class1", "class2", "class3", "class4", "class5"];

		$scope.viewWords = [];

		$scope.addWords = function() {
			console.log('clicked');
			var newObj = {word: $scope.words[Math.floor(Math.random() * $scope.words.length)],
				cls: $scope.classes[Math.floor(Math.random() * $scope.classes.length)]};
				$scope.viewWords.push(newObj);
		}

		$scope.addPlainWords = function() {
			console.log('clicked');
			var newObj = {word: $scope.words[Math.floor(Math.random() * $scope.words.length)],
				cls: ".plain"};
				$scope.viewWords.push(newObj);
		}

		$scope.addPlainPhrase = function() {
			console.log('clicked');
				var newObj = {word: $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)],
				cls: ".plain"};
				$scope.viewWords.push(newObj);
		}

		$scope.addPhrase = function() {
			console.log('clicked');
				var newObj = {word: $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)],
				cls: $scope.classes[Math.floor(Math.random() * $scope.classes.length)]};
				$scope.viewWords.push(newObj);
		}

		$scope.arrOfFunctions = [$scope.addPlainWords,$scope.addPhrase,$scope.addPlainPhrase,$scope.addWords];

		$scope.randomFunction = function() {
			return $scope.arrOfFunctions[Math.floor(Math.random() * $scope.arrOfFunctions.length)];
		}

		$interval($scope.randomFunction(), 500 );

	})
})();
