var performLogin = require('../../common/common_test');
var assert = require('assert');

describe('Perform Login', () => {
    it('can login', async () => {
        await performLogin();
        assert(true);
    })
});
