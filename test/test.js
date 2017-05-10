function GetInput () {
    return $('#input');
}

QUnit.test('Initialize plugin', function( assert ) {
    var $input = GetInput();
    assert.ok($input.data('autocompletr'), 'Plugin initialized');
    assert.ok($input.hasClass('autocompletr'), 'Class added to the element');
});

QUnit.test('Show suggestions', function( assert ) {
    var $input = GetInput();


    assert.ok($input.data('autocompletr'), 'Plugin initialized');
    assert.ok($input.hasClass('autocompletr'), 'Class added to the element');
});