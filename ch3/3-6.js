update: function (parseObject) {
    var li = document.getElementById(parseObject.id);
    parseObject.save({
        'foo': li.textContent
    }, {
        success: function () {
            removeDOMNode(parseObject.id);
            // Repopulate list items
            crud.retrieve();
            resetForm();
            li.contentEditable = true;
        },
        error: function (data, error) {
            document.getElementById(parseObject.id).className = 'msg-warn';
            console.warn('Could not update.', error);
        }
    });
}
/**
 * Created by Wil on 6/23/15.
 */
