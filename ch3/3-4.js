testObject.save({
    foo: li.innerHTML
}, {
    success: function (object) {
        console.log('success!', object);
// Reset the ID to the Parse object ID
        li.setAttribute('id', object.id);
// Reset class, and make editable, and clear form value
        li.className = '';
        li.contentEditable = true;
        input.value = '';
    },
    error: function (object, error) {
        console.warn('Could not create object.');
        console.warn(object, error);
        li.className = 'msg-warn';
    }