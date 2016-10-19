query.find({
    success: function (records) {
        var frag = document.createDocumentFragment();
        records.forEach(function (record) {
            var li = document.createElement('li');
            li.innerHTML = record.get('foo');
            li.id = record.id;
            li.contentEditable = true;
            frag.appendChild(li);
        });
        ul.appendChild(frag);
    },
    error: function (object, error) {
        console.warn('Could not retrieve records.', error);
    }
});