(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#jquery.getVal', {
    // This will run before each test in this module.
    setup: function() {
      this.$elems = $('#qunit-fixture');
    }
  });

  test('text input', function() {
    equal(this.$elems.find('[type="text"]').getVal(), 'text');
  });

  // Checkboxes
  test('checkbox val', function() {
    equal(this.$elems.find('[type="checkbox"]').getVal(), 'yes');
  });
  test('checkbox checked', function() {
    equal(this.$elems.find('[type="checkbox"]').getVal({
      checkedType: 'checked'
    }), true);
  });


  // Radio
  test('radio group', function() {
    equal(this.$elems.find('[type="radio"]').getVal(), 'yes');
  });
  test('radio checked', function() {
    equal(this.$elems.find('[type="radio"]:checked').getVal({
      radioType: 'checked'
    }), 'yes');
    equal(typeof this.$elems.find('[type="radio"]:not(:checked)').getVal({
      radioType: 'checked'
    }), 'undefined');
  });
  test('radio val', function() {
    equal(this.$elems.find('[type="radio"]').getVal(), 'yes');
  });


  // Select
  test('select', function() {
    equal(this.$elems.find('select').getVal(), 'yes');
  });


}(jQuery));
