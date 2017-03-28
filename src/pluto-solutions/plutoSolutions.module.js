(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('plutoSolutions.config', [])
      .value('plutoSolutions.config', {
          debug: true
      });

  // Modules
  angular.module('plutoSolutions.directives', []);
  angular.module('plutoSolutions.filters', []);

  angular.module('plutoSolutions.services')
    .service('getValue', function () {
        this.foo = function () {
            return 1234;
        };
    });

  angular.module('plutoSolutions',
      [
          'plutoSolutions.config',
          'plutoSolutions.directives',
          'plutoSolutions.filters',
          'plutoSolutions.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
