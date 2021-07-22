const express = require('express')
const router = express.Router()

// v0 routes

router.post('/organisational/register/v0/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v0/nhsnumber')
    } else {
    res.redirect('/organisational/register/v0/check')
    }
});

// v1 routes

router.post('/organisational/register/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v1/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v1/single/staff')
    } else {
    res.redirect('/organisational/register/v1/how?error=empty')
    }
});

router.post('/organisational/register/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v1/single/testkit')
    }
});


// v2 routes

router.post('/organisational/register/v2/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v2/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/register/v2/how?error=empty')
    }
});

router.post('/organisational/register/v2/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v2/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v2/single/have-coronavirus')
    }
});

router.post('/organisational/register/v2/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v2/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v2/single/testkit')
    }
});

router.post('/organisational/register/v2/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v2/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v2/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/country')
  } else {
    res.redirect('/organisational/register/v2/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v2/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v2/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v2/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v2/single/ethnic-group?error=empty')
    }
});


// v3 routes

router.post('/organisational/register/v3/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v3/how')
    }
});

router.post('/organisational/register/v3/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v3/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v3/single/info')
    } else {
    res.redirect('/organisational/register/v3/how?error=empty')
    }
});

router.post('/organisational/register/v3/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v3/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v3/single/email')
    }
});

router.post('/organisational/register/v3/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v3/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v3/single/dob')
    }
});

router.post('/organisational/register/v3/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v3/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v3/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/country')
  } else {
    res.redirect('/organisational/register/v3/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v3/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v3/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v3/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v3/single/ethnic-group?error=empty')
    }
});

// v4 routes

router.post('/organisational/register/v4/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'single') {
    res.redirect('/organisational/register/v2/how')
    } else {
    res.redirect('/organisational/register/v4/how')
    }
});

router.post('/organisational/register/v4/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v4/bulk/info')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v4/single/info')
    } else {
    res.redirect('/organisational/register/v4/how?error=empty')
    }
});

router.post('/organisational/register/v4/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v4/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v4/single/email')
    }
});

router.post('/organisational/register/v4/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v4/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v4/single/dob')
    }
});

router.post('/organisational/register/v4/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v4/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v4/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/country')
  } else {
    res.redirect('/organisational/register/v4/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v4/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v4/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v4/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v4/single/ethnic-group?error=empty')
    }
});


// v5 routes


router.post('/organisational/register/v5/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v5/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v5/how?error=empty')
    }
});

router.post('/organisational/register/v5/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v5/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v5/single/have-coronavirus')
    }
});

router.post('/organisational/register/v5/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v5/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v5/single/7-day')
    }
});

router.post('/organisational/register/v5/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v5/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v5/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/country')
  } else {
    res.redirect('/organisational/register/v5/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v5/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v5/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v5/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v5/single/ethnic-group?error=empty')
    }
});





// v6 routes


router.post('/organisational/register/v6/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/v6/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/v5/single/staff')
    } else {
    res.redirect('/organisational/register/v6/how?error=empty')
    }
});

router.post('/organisational/register/v6/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/register/v6/single/nhsnumber')
    } else {
    res.redirect('/organisational/register/v6/single/have-coronavirus')
    }
});

router.post('/organisational/register/v6/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/v6/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/v6/single/7-day')
    }
});

router.post('/organisational/register/v6/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/v6/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/v6/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/country')
  } else {
    res.redirect('/organisational/register/v6/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/v6/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/v6/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/register/v6/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/v6/single/ethnic-group?error=empty')
    }
});









// Antibody Care home routes

router.post('/organisational/antibody/v1/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/antibody/v1/bulk/type')
    } else if (answer == 'single') {
      res.redirect('/organisational/antibody/v1/single/type')
    } else {
    res.redirect('/organisational/antibody/v1/how?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/single/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/single/staff')
    } else {
    res.redirect('/organisational/antibody/v1/single/type')
    }
});

router.post('/organisational/antibody/v1/bulk/type', function (req, res) {
  let answer = req.body.cuTestType;

  if (answer == 'Fingerprick blood test') {
    res.redirect('/organisational/antibody/v1/bulk/staff')
    } else if (answer == 'Swab test') {
      res.redirect('/organisational/register/v2/bulk/staff')
    } else {
    res.redirect('/organisational/antibody/v1/bulk/type')
    }
});

router.post('/organisational/antibody/v1/single/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/antibody/v1/single/nhsnumber')
    } else {
    res.redirect('/organisational/antibody/v1/single/testkit')
    }
});

router.post('/organisational/antibody/v1/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuHaveCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/symptoms-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/condition')
    }
});

router.post('/organisational/antibody/v1/single/questions/index', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/when-symptoms')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/tested-positive')
    }
});

router.post('/organisational/antibody/v1/single/questions/condition', function (req, res) {
  let answer = req.body.cuCondition;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/condition-end')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/index')
    }
});

router.post('/organisational/antibody/v1/single/questions/tested-positive', function (req, res) {
  let answer = req.body.cuTestedBefore;

  if (answer == 'Yes') {
    res.redirect('/organisational/antibody/v1/single/questions/swab-test')
    } else {
    res.redirect('/organisational/antibody/v1/single/questions/lived-with')
    }
});

router.post('/organisational/antibody/v1/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/antibody/v1/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/country')
  } else {
    res.redirect('/organisational/antibody/v1/single/occupation/index?error=empty')
    }
});

router.post('/organisational/antibody/v1/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/antibody/v1/single/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/antibody/v1/single/ethnic-desc')
    } else {
    res.redirect('/organisational/antibody/v1/single/ethnic-group?error=empty')
    }
});











// enhanced routes

router.post('/organisational/register/enhanced/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/register/enhanced/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/register/enhanced/single/staff')
    } else {
    res.redirect('/organisational/register/enhanced/how?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/contact')
    } else if (answer) {
      res.redirect('/organisational/register/enhanced/single/ethnic-desc')
    } else {
    res.redirect('/organisational/register/enhanced/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/register/enhanced/single/have-coronavirus')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/register/enhanced/single/occupation/area')
  } else {
    res.redirect('/organisational/register/enhanced/single/occupation/index?error=empty')
    }
});

router.post('/organisational/register/enhanced/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/register/enhanced/single/when-symptoms')
    } else {
    res.redirect('/organisational/register/enhanced/single/testkit')
    }
});

router.post('/organisational/register/enhanced/single/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/organisational/register/enhanced/single/when-vaccine')
    } else if (answer == 'no') {
      res.redirect('/organisational/register/enhanced/single/testkit')
    } else {
    res.redirect('/organisational/register/enhanced/single/have-vaccine?error=empty')
    }
});

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/request-method', function (req, res) {
  let answer = req.body.cuRequestMethod;

  if (answer == 'upload') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/upload-file')
    } else if (answer == 'manual') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/date-of-procedure')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/request-method?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms', function (req, res) {
  let answer = req.body.cuSymptomatic;

  if (answer == 'Yes') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms-start')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/symptoms?error=empty')
    }
})

router.post('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine', function (req, res) {
  let answer = req.body.cuVaccine;

  if (answer == '1 dose') {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == '2 doses') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/when-vaccine')
    } else if (answer == 'No') {
      res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/check-your-answers-manual')
    } else {
    res.redirect('/elective-care-testing/v1/trust-worker-request-enhanced/have-vaccine?error=empty')
    }
});



// outer-return-box

router.post('/organisational/outer-return-box/option1/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/bulk/who-single')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option1/who-single')
    } else {
    res.redirect('/organisational/outer-return-box/option1/spreadsheet?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/bulk/who-single')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option2/who-single')
    } else {
    res.redirect('/organisational/outer-return-box/option2/spreadsheet?error=empty')
    }
});


router.post('/organisational/outer-return-box/option1/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/outer-return-box/option1/travel')
    } else if (answer) {
      res.redirect('/organisational/outer-return-box/option1/ethnic-desc')
    } else {
    res.redirect('/organisational/outer-return-box/option1/ethnic-group?error=empty')
    }
});

router.post('/organisational/outer-return-box/option1/travel', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == 'home') {
    res.redirect('/organisational/outer-return-box/option1/area')
  } else if (answer == 'travel') {
    res.redirect('/organisational/outer-return-box/option1/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/outer-return-box/option1/country')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/outer-return-box/option1/country')
  } else {
    res.redirect('/organisational/outer-return-box/option1/travel?error=empty')
    }
});

router.post('/organisational/outer-return-box/option1/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option1/nhsnumber')
    } else {
    res.redirect('/organisational/outer-return-box/option1/have-coronavirus')
    }
});

router.post('/organisational/outer-return-box/option1/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/outer-return-box/option1/when-symptoms')
    } else {
    res.redirect('/organisational/outer-return-box/option1/testkit')
    }
});

router.post('/organisational/outer-return-box/option1/option1', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option1/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option1/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option1/option1?error=empty')
    }
});



router.post('/organisational/outer-return-box/option2/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/outer-return-box/option2/travel')
    } else if (answer) {
      res.redirect('/organisational/outer-return-box/option2/ethnic-desc')
    } else {
    res.redirect('/organisational/outer-return-box/option2/ethnic-group?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/travel', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == 'home') {
    res.redirect('/organisational/outer-return-box/option2/area')
  } else if (answer == 'travel') {
    res.redirect('/organisational/outer-return-box/option2/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/outer-return-box/option2/country')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/outer-return-box/option2/country')
  } else {
    res.redirect('/organisational/outer-return-box/option2/travel?error=empty')
    }
});

router.post('/organisational/outer-return-box/option2/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option2/nhsnumber')
    } else {
    res.redirect('/organisational/outer-return-box/option2/have-coronavirus')
    }
});

router.post('/organisational/outer-return-box/option2/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/outer-return-box/option2/when-symptoms')
    } else {
    res.redirect('/organisational/outer-return-box/option2/testkit')
    }
});

router.post('/organisational/outer-return-box/option2/option2', function (req, res) {
  let answer = req.body.outerreturnbox2;

  if (answer == 'yes') {
    res.redirect('/organisational/outer-return-box/option2/enterbarcode')
  } else if (answer == 'no') {
      res.redirect('/organisational/outer-return-box/option2/checkno')
    } else {
    res.redirect('/organisational/outer-return-box/option2/option2?error=empty')
    }
})


// test-pass/create-single-reg

router.post('/organisational/test-pass/create-single-reg/spreadsheet', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/who-bulk')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-single-reg/name')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/spreadsheet?error=empty')
    }
});


router.post('/organisational/test-pass/create-single-reg/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/index')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-single-reg/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-single-reg/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-single-reg/country')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/create-single-reg/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/create-single-reg/knowNHSnumber', function (req, res) {
  let answer = req.body.cuKnowNHSnumber;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/nhsnumber')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/have-coronavirus')
    }
});

router.post('/organisational/test-pass/create-single-reg/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/create-single-reg/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/enterbarcode')
    }
});

router.post('/organisational/test-pass/create-single-reg/reg-with-pass/passID', function (req, res) {
  let answer = req.body.passID;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/referencenumber')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-single-reg/who-single')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/passID?error=empty')
    }
});


router.post('/organisational/test-pass/create-single-reg/reg-with-pass/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/create-single-reg/reg-with-pass/enterbarcode')
    }
});



// test-pass/create-pass



router.post('/organisational/test-pass/create-pass/how', function (req, res) {
  let answer = req.body.spreadsheet;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/upload')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/who-single')
    } else {
    res.redirect('/organisational/test-pass/create-pass/how?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/residents/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/residents/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/staff/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/staff/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/staff/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/other/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/other/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/other/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/other/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/who-single', function (req, res) {
  let answer = req.body.who;

  if (answer == 'residents') {
    res.redirect('/organisational/test-pass/create-pass/residents/personal')
  } else if (answer == 'staff') {
      res.redirect('/organisational/test-pass/create-pass/staff/personal')
  } else if (answer == 'other') {
      res.redirect('/organisational/test-pass/create-pass/other/personal')
    } else {
    res.redirect('/organisational/test-pass/create-pass/who-single?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/who-single', function (req, res) {
  let answer = req.body.who;

  if (answer == 'residents') {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/personal')
  } else if (answer == 'staff') {
      res.redirect('/organisational/test-pass/create-pass/create-more/staff/personal')
  } else if (answer == 'other') {
      res.redirect('/organisational/test-pass/create-pass/other/personal')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/who-single?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/staff/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/staff/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/staff/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/staff/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/residents/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/confirmcontact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/residents/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/residents/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/create-more/other/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/create-more/other/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/create-more/other/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-more/other/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/create-pass/staff/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/create-pass/staff/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/staff/check-your-answers')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/staff/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/create-pass/staff/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/other/travel2', function (req, res) {
  let answer = req.body.travel2;

  if (answer == 'workplace') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else if (answer == 'education') {
    res.redirect('/organisational/test-pass/create-pass/other/attendeducation')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/other/areawork')
  } else {
    res.redirect('/organisational/test-pass/create-pass/other/travel2?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/staff/travel2', function (req, res) {
  let answer = req.body.travel2;

  if (answer == 'workplace') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else if (answer == 'education') {
    res.redirect('/organisational/test-pass/create-pass/staff/attendeducation')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else if (answer == 'prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/staff/areawork')
  } else {
    res.redirect('/organisational/test-pass/create-pass/staff/travel2?error=empty')
    }
});

// test-pass/create-pass

router.post('/organisational/test-pass/create-pass/confirm-UON', function (req, res) {
  let answer = req.body.changeUON;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/who')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/UON')
    } else {
    res.redirect('/organisational/test-pass/create-pass/UON-check-radio?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/who', function (req, res) {
  let answer = req.body.cuWho;

  if (answer == 'Staff') {
    res.redirect('/organisational/test-pass/create-pass/staff/personal')
  } else if (answer == 'Residents') {
      res.redirect('/organisational/test-pass/create-pass/residents/personal')
  } else if (answer == 'Visitors') {
        res.redirect('/organisational/test-pass/create-pass/staff/personal')
    } else {
    res.redirect('/organisational/test-pass/create-pass/who?error=empty')
    }
});


router.post('/organisational/test-pass/create-pass/staff/create-more', function (req, res) {
  let answer = req.body.CreateMoreStaff;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/who')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/security')
    } else {
    res.redirect('/organisational/test-pass/create-pass/staff/create-more?error=empty')
    }
});


router.post('/organisational/test-pass/create-pass/residents/create-second-code/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/confirm-contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/select-address', function (req, res) {
  let answer = req.body.selectAddress;

  if (answer == 'wandsworth') {
    res.redirect('/organisational/test-pass/create-pass/residents/check-your-answers')
  } else if (answer == 'dorchester') {
      res.redirect('/organisational/test-pass/create-pass/residents/check-your-answers')
    } else if (answer == 'west') {
        res.redirect('/organisational/test-pass/create-pass/residents/check-your-answers')
      } else if (answer == 'different') {
          res.redirect('/organisational/test-pass/create-pass/residents/address')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-pass/residents/select-address?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/create-more', function (req, res) {
  let answer = req.body.CreateMoreResidents;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/who')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/security')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/create-more?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/create-second-code/confirm-contact', function (req, res) {
  let answer = req.body.changeContact;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/select-address')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/contact')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/confirm-contact?error=empty')
    }
});

router.post('/organisational/test-pass/create-pass/residents/create-second-code/create-more', function (req, res) {
  let answer = req.body.CreateMoreResidents;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/who')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/create-pass/security')
    } else {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/create-more?error=empty')
    }
});


router.post('/organisational/test-pass/create-pass/residents/create-second-code/select-address', function (req, res) {
  let answer = req.body.selectAddress;

  if (answer == 'wandsworth') {
    res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/check-your-answers')
  } else if (answer == 'dorchester') {
      res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/check-your-answers')
    } else if (answer == 'west') {
        res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/check-your-answers')
      } else if (answer == 'different') {
          res.redirect('/organisational/test-pass/create-pass/residents/create-second-code/address')
    } else {
    res.redirect('/organisational/test-pass/create-pass/create-pass/residents/create-second-code/select-address?error=empty')
    }
});



// test-pass/MVP-reg

router.post('/organisational/test-pass/MVP-reg/confirm-UON', function (req, res) {
  let answer = req.body.changeUON;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/MVP-reg/how')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/MVP-reg/UON')
    } else {
    res.redirect('/organisational/test-pass/MVP-reg/confirm-UON?error=empty')
    }
});

router.post('/organisational/test-pass/mvp-reg/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/test-pass/mvp-reg/single/have-pass')
  } else if (answer == 'single') {
      res.redirect('/organisational/test-pass/mvp-reg/single/have-pass')
    } else {
    res.redirect('/organisational/test-pass/mvp-reg/how?error=empty')
    }
});

router.post('/organisational/test-pass/mvp-reg/single/have-pass', function (req, res) {
  let answer = req.body.havepass;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/mvp-reg/single/pass-details')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/mvp-reg/single/who')
    } else {
    res.redirect('/organisational/test-pass/mvp-reg/single/have-pass?error=empty')
    }
});

router.post('/organisational/test-pass/mvp-reg/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/mvp-reg/single/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/mvp-reg/single/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/mvp-reg/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/mvp-reg/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/mvp-reg/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/mvp-reg/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/mvp-reg/single/save-pass')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/mvp-reg/single/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/mvp-reg/single/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/mvp-reg/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/mvp-reg/single/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/mvp-reg/single/daily-contact-testing')
    }
});

router.post('/organisational/test-pass/mvp-reg/single/add-another', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/mvp-reg/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/mvp-reg/single/single-check')
    } else {
    res.redirect('/organisational/test-pass/mvp-reg/single/add-another?error=empty')
    }
});






// lft/carehome-registration

router.post('/organisational/lft/carehome-registration/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/lft/carehome-registration/bulk/staff')
    } else if (answer == 'single') {
      res.redirect('/organisational/lft/carehome-registration/single/staff')
    } else {
    res.redirect('/organisational/lft/carehome-registration/how?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/lft/carehome-registration/single/contact')
    } else if (answer) {
      res.redirect('/organisational/lft/carehome-registration/single/ethnic-desc')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/lft/carehome-registration/single/have-coronavirus')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/area')
  } else {
    res.redirect('/organisational/lft/carehome-registration/single/occupation/index?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/lft/carehome-registration/single/when-symptoms')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/daily-contact-testing')
    }
});

router.post('/organisational/lft/carehome-registration/single/have-return-box', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/return-box')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/check-pcr')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/have-return-box?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/add-second-test', function (req, res) {
  let answer = req.body.secondtest;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/testkit-lft-route')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/check-pcr')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/add-second-test?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/add-another', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/staff')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/single-check')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/add-another?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/single/add-another-slice2', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/single/staff')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/single/single-check')
    } else {
    res.redirect('/organisational/lft/carehome-registration/single/add-another-slice2?error=empty')
    }
});


router.post('/organisational/lft/carehome-registration/enhancements/lft-bulk-delete', function (req, res) {
  let answer = req.body.reupload;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p1')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/bulk/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/enhancements/lft-bulk-delete?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/enhancements/lft-bulk-delete-9', function (req, res) {
  let answer = req.body.reupload;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p1')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/bulk/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/enhancements/lft-bulk-delete-9?error=empty')
    }
});


router.post('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p1', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p2')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/bulk/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p1?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p2', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p3')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/bulk/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p2?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p3', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/bulk/check')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/bulk/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/enhancements/pcr-bulk-delete-p3?error=empty')
    }
});


router.post('/organisational/lft/carehome-registration/UON-check-radio', function (req, res) {
  let answer = req.body.changeUON;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/how')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/id')
    } else {
    res.redirect('/organisational/lft/carehome-registration/UON-check-radio?error=empty')
    }
});

//June CI

router.post('/organisational/lft/carehome-registration/June-CI/lft-bulk-p1', function (req, res) {
  let answer = req.body.lftp1;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/June-CI/lft-bulk-p2')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/June-CI/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/June-CI/lft-bulk-p1?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/June-CI/lft-bulk-p2', function (req, res) {
  let answer = req.body.lftp1;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p1')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/June-CI/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/June-CI/lft-bulk-p2?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p1', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p2')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/June-CI/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p1?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p2', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p3')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/June-CI/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p2?error=empty')
    }
});

router.post('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p3', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/lft/carehome-registration/June-CI/check')
  } else if (answer == 'no') {
      res.redirect('/organisational/lft/carehome-registration/June-CI/upload')
    } else {
    res.redirect('/organisational/lft/carehome-registration/June-CI/pcr-bulk-p3?error=empty')
    }
});


// // test-pass/reg-with-pass

router.post('/organisational/test-pass/reg-with-pass/confirm-UON', function (req, res) {
  let answer = req.body.changeUON;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/test-pass-info')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/UON')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/confirm-UON?error=empty')
    }
});


router.post('/organisational/test-pass/reg-with-pass/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/who')
  } else if (answer == 'single') {
      res.redirect('/organisational/test-pass/reg-with-pass/single/date')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/how?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/bulk/lft-bulk', function (req, res) {
  let answer = req.body.reupload;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/pcr-bulk')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/bulk/upload')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/lft-bulk?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/bulk/pcr-bulk', function (req, res) {
  let answer = req.body.reuploadpcr;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/create-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/bulk/upload')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/pcr-bulk?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/have-pass', function (req, res) {
  let answer = req.body.havepass;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/pass-details')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/single/personal-details')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-pass?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/testkit')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/have-return-box', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/return-box')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/single/check-pcr')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-return-box?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/add-another', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/single/single-check-pass')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/add-another?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/reg-with-pass/single/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/reg-with-pass/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/reg-with-pass/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/save-pass')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/single/save-pass', function (req, res) {
  let answer = req.body.savepass;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/send-codes')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/check')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/single/save-pass?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/bulk/send-all-codes', function (req, res) {
  let answer = req.body.contact;

  if (answer == 'same') {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/check')
  } else if (answer == 'different') {
      res.redirect('/organisational/test-pass/reg-with-pass/bulk/send-codes')
    } else if (answer == 'no') {
        res.redirect('/organisational/test-pass/reg-with-pass/bulk/check')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/bulk/send-all-codes?error=empty')
    }
});



// // test-pass/reg-without-pass

router.post('/organisational/test-pass/reg-without-pass/confirm-UON', function (req, res) {
  let answer = req.body.changeUON;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/test-pass-info')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-without-pass/UON')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/confirm-UON?error=empty')
    }
});

router.post('/organisational/test-pass/reg-without-pass/how', function (req, res) {
  let answer = req.body.cuUploadType;

  if (answer == 'bulk') {
    res.redirect('/organisational/test-pass/reg-without-pass/bulk/who')
  } else if (answer == 'single') {
      res.redirect('/organisational/test-pass/reg-without-pass/single/have-pass')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/how?error=empty')
    }
});

router.post('/organisational/test-pass/reg-without-pass/single/have-pass', function (req, res) {
  let answer = req.body.havepass;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/pass-details')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-without-pass/single/personal-details')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/have-pass?error=empty')
    }
});

router.post('/organisational/test-pass/reg-without-pass/single/ethnic-group', function (req, res) {
  let answer = req.body.cuEthnicGroup;

  if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/contact')
    } else if (answer) {
      res.redirect('/organisational/test-pass/reg-without-pass/single/ethnic-desc')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/ethnic-group?error=empty')
    }
});

router.post('/organisational/test-pass/reg-without-pass/single/occupation/index', function (req, res) {
  let answer = req.body.cuInWork;

  if (answer == "Yes, and for the last 2 weeks they've worked from home") {
    res.redirect('/organisational/test-pass/reg-without-pass/single/occupation/area')
  } else if (answer == "Yes, and for the last 2 weeks they've travelled to work") {
    res.redirect('/organisational/test-pass/reg-without-pass/single/occupation/area')
  } else if (answer == 'no') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/save-pass')
  } else if (answer == 'Prefer not to say') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/occupation/area')
  } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/occupation/index?error=empty')
    }
});

router.post('/organisational/test-pass/reg-without-pass/single/save-pass', function (req, res) {
  let answer = req.body.savepass;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/send-codes')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-without-pass/single/have-coronavirus')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/save-pass?error=empty')
    }
});


router.post('/organisational/test-pass/reg-without-pass/single/have-coronavirus', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/when-symptoms')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/testkit')
    }
});

router.post('/organisational/test-pass/reg-without-pass/single/have-return-box', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/return-box')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-without-pass/single/check-pcr')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/have-return-box?error=empty')
    }
});


router.post('/organisational/test-pass/reg-without-pass/single/add-another', function (req, res) {
  let answer = req.body.addanotherperson;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-without-pass/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-without-pass/single/single-check-pass')
    } else {
    res.redirect('/organisational/test-pass/reg-without-pass/single/add-another?error=empty')
    }
});




//test-pass/reg-with-pass/several

router.post('/organisational/test-pass/reg-with-pass/several/second-pass', function (req, res) {
  let answer = req.body.addanother;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/third-pass')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/several/second-pass?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/several/third-pass', function (req, res) {
  let answer = req.body.addanother2;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/multiple-pass')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/several/third-pass?error=empty')
    }
});

router.post('/organisational/test-pass/reg-with-pass/several/multiple-pass', function (req, res) {
  let answer = req.body.addanother;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/single/have-pass')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/symptoms')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/several/multiple-pass?error=empty')
    }
});


router.post('/organisational/test-pass/reg-with-pass/several/symptoms', function (req, res) {
  let answer = req.body.cuCoronavirus;

  if (answer == 'Yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/several/select-symptoms')
  } else if (answer == 'No') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/check-mass')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/several/symptoms?error=empty')
    }
});


router.post('/organisational/test-pass/reg-with-pass/several/have-return-box', function (req, res) {
  let answer = req.body.outerreturnbox;

  if (answer == 'yes') {
    res.redirect('/organisational/test-pass/reg-with-pass/several/return-box')
  } else if (answer == 'no') {
      res.redirect('/organisational/test-pass/reg-with-pass/several/add-test-details-p2')
    } else {
    res.redirect('/organisational/test-pass/reg-with-pass/several/have-return-box?error=empty')
    }
});


module.exports = router
