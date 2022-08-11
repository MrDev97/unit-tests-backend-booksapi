const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(() => {})).to.equal('Error');
  });
  it('should return an error if "fullName" arg does not contains exactly one " "', () => {
    expect(formatFullname('LoremIpsum')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum ')).to.equal('Error');
    expect(formatFullname(' Lorem Ipsum')).to.equal('Error');
    expect(formatFullname('Lorem Ipsum Dolor')).to.equal('Error');
  });
  it('should return properly formatted "fullName"" if proper args', () => {
    expect(formatFullname('Lorem iPsUm')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOrEm Ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOrEm IpSuM')).to.equal('Lorem Ipsum');
  });
});
