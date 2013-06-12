/*jshint smarttabs:true */
(function (root, factory) {
	if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like enviroments that support module.exports,
		// like Node.
		module.exports = factory(
			require('../node_modules/expect.js/expect.js'),
			require('../js/makeAsync.js'),
			require('../js/FakeLocalStorage.js')
		);
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(
			[
				'expect.js',
				'syncit/makeAsync',
				'syncit/FakeLocalStorage'
			],
			factory
		);
	} else {
		// Browser globals (root is window)
 		root.returnExports = factory(
			root.expect,
			root.SyncIt_makeAsync,
			root.SyncIt_FakeLocalStorage
		);
	}
})(this, function (
	expect,
	makeAsync,
	FakeLocalStorage
) {

// Author: Matthew Forrester <matt_at_keyboardwritescode.com>
// Copyright: Matthew Forrester
// License: MIT/BSD-style

describe('manip',function() {
	it('can manipulate',function(done) {
		var fls = makeAsync(new FakeLocalStorage('aa'));
		fls.setItem('abc','def',function(r) {
		fls.getItem('abc',function(r) {
			expect(r).to.equal('def');
			done();
		});
		});
	});
});

});
