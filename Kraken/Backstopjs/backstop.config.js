module.exports = options => {
    return {
      id: `${options.project}_test`,
      viewports: [
        {
          "label": "default",
          "width": 800,
          "height": 600
        }
      ],
      scenarios: options.scenarios,
      paths: {
        bitmaps_reference: `backstop_data/${options.project}/bitmaps_reference`,
        bitmaps_test: `backstop_data/${options.project}/bitmaps_test`,
        html_report: `backstop_data/${options.project}/html_report`,
        ci_report: `backstop_data/${options.project}/ci_report`
      },
      "engine": "playwright",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false,
      report: ['browser', 'CI'],
      debug: false
    };
  };