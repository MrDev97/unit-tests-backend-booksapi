const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(() => {})).to.equal('Error');
  });
});
