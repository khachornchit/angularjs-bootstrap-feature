var myApp = angular
                .module("plutosolutions", [])
                .controller("plutosolutionsControl", function ($scope) {
                    $scope.customers = [
                        { name: "Davolio	Nancy", dateofbirth: new Date("November 23, 1908"), gender: "Male", order: 55000.788, city: "New York" },
                        { name: "Fuller Andrew", dateofbirth: new Date("May 05, 1970"), gender: "Female", order: 68000, city: "Chiang Mai" },
                        { name: "Leverling Janet", dateofbirth: new Date("August 15, 1974"), gender: "Male", order: 57000, city: "Chiang Rai" },
                        { name: "Peacock	Margaret", dateofbirth: new Date("October 27, 1979"), gender: "Female", order: 53000, city: "London" },
                        { name: "Buchanan Steven", dateofbirth: new Date("December 30, 1983"), gender: "Male", order: 60000, city: "Berlin" }
                    ];
                });