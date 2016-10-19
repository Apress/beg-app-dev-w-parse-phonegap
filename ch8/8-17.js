var receiverQuery = new Parse.Query(MyParseMessage);
receiverQuery.equalTo("Receiver", MyParseUser.current());
receiverQuery.equalTo("Sender", Receiver);