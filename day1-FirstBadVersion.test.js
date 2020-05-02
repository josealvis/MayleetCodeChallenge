const { solution ,badSolution} = require('./day1-FirstBadVersion');
const { complexityCalculator } = require('./TimeCompexity');


var timecomplexity = {};
beforeEach(() => {
  timecomplexity ={ n: 0, versions:0, notation: ()=>complexityCalculator(timecomplexity.versions,timecomplexity.n) };
});

test('It should return 6', () => {
  expect(solution(isBad(6))(100)).toBe(6);
  console.log("times: ", timecomplexity.n)
})

test('It should return 6', () => {
  expect(solution(isBad(6))(1088543488888888)).toBe(6);
  console.log("times: ", timecomplexity.n)
})
test('It should return 50566777', () => {
  expect(solution(isBad(50566777))(13453543636545645656456456456)).toBe(50566777);
  console.log("times: ", timecomplexity.n)
})

for (let x = 0; x < 22; x++) {
  let versions = Math.floor((Math.random() * 100000) + 1);
  let firstBadVer = Math.floor((Math.random() * versions) + 1);
  test(`It should return ${firstBadVer}`, () => {
    expect(solution(isBad(firstBadVer))(versions)).toBe(firstBadVer);
    console.log("times: ", timecomplexity.n, " for "+ timecomplexity.versions+" "+timecomplexity.notation())
  })

}
function isBad(n) {
  return function fn(v) {
    timecomplexity.n = timecomplexity.n + 1;
    timecomplexity.versions==0? timecomplexity.versions = v: null;
    return v >= n;
  }
}




