var query1 = new Parse.Query(MyClass);
query1.equalTo('key', value1);
var query2 = new Parse.Query(MyClass);
query2.equalTo('key', value2);
var query3 = new Parse.Query(MyClass);
query3.equalTo('key', value3);
var compoundQuery = Parse.Query.or(query1, query2, query3);
compoundQuery.find();