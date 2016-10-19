var data = JSON.parse(httpResponse.text);

if (!data.features || !data.features[0]) {
  return response.error("Could not add location");
}

Message.set('location_text', data.features[0].text);
Message.set('location_text_long', data.features[0].place_name);
Message.save();

return Message;
