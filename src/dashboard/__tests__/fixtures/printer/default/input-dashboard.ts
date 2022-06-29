// @ts-ignore
import type { Dashboard, TestFile } from "../../../../types";
// @ts-ignore
import { testDuration, testStartTime } from "../../../helpers/datetime";

const testFiles: TestFile[] = [
  {
    filePath: "src/__tests__/sample-1.test.ts",
    children: [
      {
        type: "describe",
        describe: "describe depth 1",
        children: [
          { type: "test", title: "test 1", status: "passed" },
          { type: "test", title: "test 2", status: "passed" },
          {
            type: "describe",
            describe: "describe depth 2",
            children: [
              { type: "test", title: "test 1", status: "passed" },
              { type: "test", title: "test 2", status: "passed" },
              {
                type: "describe",
                describe: "describe depth 3",
                children: [
                  { type: "test", title: "test 1", status: "passed" },
                  { type: "test", title: "test 2", status: "passed" },
                ],
              },
            ],
          },
          {
            type: "describe",
            describe: "describe depth 2-2",
            children: [
              { type: "test", title: "test 1", status: "passed" },
              { type: "test", title: "test 2", status: "todo" },
            ],
          },
          { type: "test", title: "test 3", status: "passed" },
          { type: "test", title: "test 4", status: "passed" },
        ],
      },
      {
        type: "describe",
        describe: "describe depth 1-2",
        children: [
          { type: "test", title: "parametarized: 1", status: "passed" },
          { type: "test", title: "parametarized: 2", status: "passed" },
          { type: "test", title: "parametarized: 1", status: "passed" },
          { type: "test", title: "parametarized: 2", status: "passed" },
        ],
      },
    ],
    permalink:
      "https://github.com/mshrtsr/jest-md-dashboard/blob/main/src/__tests__/sample-1.test.ts",
  },
  {
    filePath: "src/__tests__/sample-2.test.ts",
    children: [
      {
        type: "describe",
        describe: "describe depth 1",
        children: [
          { type: "test", title: "test 1", status: "passed" },
          { type: "test", title: "test 2", status: "passed" },
          { type: "test", title: "test 3", status: "passed" },
          { type: "test", title: "test 4", status: "passed" },
        ],
      },
    ],
    permalink:
      "https://github.com/mshrtsr/jest-md-dashboard/blob/main/src/__tests__/sample-2.test.ts",
  },
];

export const dashboard: Dashboard = {
  title: "My Dashboard",
  summary: {
    numFailedTests: 43,
    numFailedTestSuites: 7,
    numPassedTests: 67,
    numPassedTestSuites: 38,
    numPendingTests: 0,
    numTodoTests: 13,
    numPendingTestSuites: 0,
    numRuntimeErrorTestSuites: 0,
    numTotalTests: 45,
    numTotalTestSuites: 123,
    startTime: testStartTime.getTime(),
    totalRunTime: testDuration,
  },
  testFiles: testFiles,
};
