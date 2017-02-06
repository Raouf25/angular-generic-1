'use strict';

angular.module('app.core')

.service('contacts', function () {
return  [
{First_name:"Foo",Last_name:"Bar",phone:"00 00 00 00 ",email:"toto.toto@gmail.com"},
{First_name:"Someone",Last_name:"Youknow",phone:"11 11 11 11 ",email:"toto.toto@gmail.com"},
{First_name:"Iamout",Last_name:"Ofinspiration",phone:"22 22 22 22 ",email:"toto.toto@gmail.com"}
];

  });
