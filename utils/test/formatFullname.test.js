const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('', () => {
    expect(formatFullname(undefined)).to.equal('Error');
  });
});
