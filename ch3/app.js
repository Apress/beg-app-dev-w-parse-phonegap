(function () {
    'use strict';
    // User Interface elements
    var input = document.getElementById('test-input');
    var editPanel = document.getElementById('edit-panel');
    var btnAdd = document.getElementById('btn-add');
    var ul = document.querySelector('.record-list');

    // Create new Parse Object and instantiate it
    var TestObject = Parse.Object.extend('ParseObject');
    var query = new Parse.Query(TestObject);

    // Used when editing a record after the user selects a record from the list
    function editItem(event) {
        if (event.target.parentNode.className === 'record-list') {
            input.dataset.parseid = event.target.id;
            btnAdd.className = 'hide';
            input.className = 'hide';
            editPanel.className = 'show';
        }
    }

    // Executes a function on a returned Parse object
    function getParseObject(parseObjectId, fn) {
        query.get(parseObjectId, {
            success: fn,
            error: function (data, error) {
                console.warn(data, error);
            }
        });
    }

    // Removes an element from the DOM based on id
    function removeDOMNode(id) {
        var node = document.getElementById(id);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    // Resets the interface to it's initial view
    function resetForm() {
        editPanel.className = 'hide';
        btnAdd.className = 'show';
        input.className = 'show';
        input.dataset.parseid = '';
        input.value = '';
    }

    // Object containing CRUD methods
    var crud = {
        create: function (id) {
            if (input.value === '') {
                return;
            }
            // Create a new <li> element, set the value, then append it to the list
            var li = document.createElement('li');
            li.innerHTML = input.value;
            li.className = 'msg-processing';
            document.querySelector('.record-list').appendChild(li);

            // Create new Parse Object then save
            var testObject = new TestObject();
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
                    if (error.code === Parse.Error.CONNECTION_FAILED) {
                        console.warn('Could not connect to Parse Cloud.');
                    }
                    li.className = 'msg-warn';
                }
            });
        },
        retrieve: function () {
            // query.contains('foo', 'first');
            // query.ascending('createdAt');
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
        },
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
        },
        delete: function (parseObject) {
            parseObject.destroy({
                success: function (parseObject) {
                    console.log(parseObject.id + ' destroyed');
                    removeDOMNode(parseObject.id);
                    resetForm();
                },
                error: function (parseObject, error) {
                    console.info('Error deleting: ', parseObject);
                    console.warn(error);
                }
            });
        }
    };

    function initialize() {
        // Initialize Parse application
        Parse.initialize('','');

        // Populate with existing records
        crud.retrieve();

        // Bind UI elements

        // Add
        document.getElementById('btn-add').addEventListener('click', function (event) {
            event.preventDefault();
            crud.create();
        });

        // Edit
        document.querySelector('body').addEventListener('click', function (event) {
            event.preventDefault();
            editItem(event);
        });

        // Update
        document.getElementById('btn-update').addEventListener('click', function (event) {
            event.preventDefault();
            getParseObject(input.dataset.parseid, crud.update);
        });

        // Delete
        document.getElementById('btn-delete').addEventListener('click', function (event) {
            event.preventDefault();
            getParseObject(input.dataset.parseid, crud.delete);
        });

        // Cancel
        document.getElementById('btn-cancel').addEventListener('click', function (event) {
            event.preventDefault();
            resetForm();
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initialize();
    });
})();
