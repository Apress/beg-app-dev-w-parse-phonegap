var senderQuery = new Parse.Query(MyParseMessage);
senderQuery.equalTo("Receiver", Receiver);
senderQuery.equalTo("Sender", MyParseUser.current());