const testsToRun = [];

function describe(name, fn) {
  testsToRun.push({ type: 'suite', name });
  fn();
}

function test(name, fn) {
  testsToRun.push({ type: 'test', name, fn });
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) throw new Error(`Expected ${expected} but got ${actual}`);
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    },
    toHaveLength(expected) {
      if (!actual || actual.length !== expected) throw new Error(`Expected length ${expected} but got ${actual ? actual.length : actual}`);
    },
    toBeGreaterThanOrEqual(expected) {
      if (actual < expected) throw new Error(`Expected >= ${expected} but got ${actual}`);
    },
    toBeLessThanOrEqual(expected) {
      if (actual > expected) throw new Error(`Expected <= ${expected} but got ${actual}`);
    },
    toBeNull() {
      if (actual !== null) throw new Error(`Expected null but got ${actual}`);
    },
    not: {
      toBe(expected) {
        if (actual === expected) throw new Error(`Expected not ${expected}`);
      },
      toBeNull() {
        if (actual === null) throw new Error(`Expected not null`);
      }
    }
  };
}

// Run tests when window loads
window.addEventListener('load', async () => {
  const resultsDiv = document.getElementById('results');
  const summaryDiv = document.getElementById('summary');
  let passedCount = 0;
  let failedCount = 0;

  for (const item of testsToRun) {
    if (item.type === 'suite') {
      const suiteDiv = document.createElement('div');
      suiteDiv.className = 'suite';
      suiteDiv.textContent = item.name;
      resultsDiv.appendChild(suiteDiv);
    } else if (item.type === 'test') {
      const testDiv = document.createElement('div');
      testDiv.className = 'test running';
      testDiv.textContent = '⏳ ' + item.name;
      resultsDiv.appendChild(testDiv);
      
      try {
        item.fn();
        testDiv.className = 'test passed';
        testDiv.textContent = '✅ ' + item.name;
        passedCount++;
      } catch (err) {
        testDiv.className = 'test failed';
        testDiv.textContent = '❌ ' + item.name + ' - ' + err.message;
        failedCount++;
      }
    }
  }

  summaryDiv.innerHTML = `Tests: <span class="summary-passed">${passedCount} passed</span>, <span class="summary-failed">${failedCount} failed</span> out of ${passedCount + failedCount}`;
});