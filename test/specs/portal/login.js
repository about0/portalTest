var assert = require('assert');

  describe("portal login page", function () {
    
    browser.url('http://stage.hf.intellica.sk/portal/login')
    it('should have the title "Sign In"', function () {
      var title = browser.getTitle();
      browser.getTitle().should.be.equal('Sign In')
      // assert.equal(title, "Sign In")
    });
    it('should have two fields: email and a password', function () {

    });
  });
