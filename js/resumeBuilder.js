var bio = {
  "name": "Randy Hoffner",
  "role": "Web Developer",
  "contacts": {
    "mobile": "818-272-3929",
    "email": "randy@ashlandoregon.org",
    "github": "randyhoffner",
    "twitter": "@randyhoffner",
    "location": "Ashland, Oregon"
  },
  "welcomeMessage": "Welcome to Randy Hoffner's resume.",
  "skills": ["tv technologist", "technical writer", "photoshop adept"],
  "biopic": "images/randy.jpg",
};


bio.display = function() {

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
  }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);



for (var i in formattedContactInfo) {
  $("#topContacts").append(formattedContactInfo[i]);
  $("#footerContacts").append(formattedContactInfo[i]);
}




bio.display ();



var work = {
  "jobs": [{
    "employer": "NBC",
    "title": "Sr Staff Engineer, Director R&D, Director Future Technology",
    location: "New York, NY",
    "dates": "1979-1994",
    "description": "Cutting edge technology projects, director of evaluation lab and HDTV lab."
  }, {
    "employer": "CBS",
    "title": "Manager of Network Distribution Systems",
    "location": "New York, NY",
    "dates": "1995-1996",
    "description": "Managed network satellite distribution and backhaul systems."
  }, {
    "employer": "ABC",
    "title": "Manager, Technology and Quality Control",
    "location": "New York, NY, Los Angeles, CA",
    "dates": "1996-2007",
    "description": "Managed projects in advanced TV and HDTV. Taught classes on digital and HDTV. Wrote and maintained ABC HDTV program delivery specification.  Established and managed production and delivery of video on demand programming."
  }, {
    "employer": "AZCAR Systems Integration and Consulting",
    "title": "Senior Consulting Engineer",
    "location": "Los Angeles, CA",
    "dates": "2008-2010",
    "description": "Consulted with television facilities regarding upgrades and improvements to their technical plants and operations."
  }]
};

var education = {
  "schools": [{
    "name": "University of Tulsa",
    "dates": "1965-1967",
    "location": "Tulsa, OK",
    "degree": "BA",
    "major": "Sociology",
    "url": "http://www.utulsa.edu"
  }, {
    "name": "Oklahoma City University",
    "dates": "1962-1965",
    "location": "Oklahoma City, OK",
    "degree": "attended",
    "major": "Chemistry",
    "url": "http://www.okcu.edu"
  }],
  "onlineCourses": [{
    "school": "Udacity",
    "title": "Intro to HTML and CSS",
    "date": "November 2015",
    "url": "https://www.udacity.com/course/ud304"
  }, {
    "school": "Udacity",
    "title": "Responsive Web Design Fundamentals",
    "date": "November 2015",
    "url": "https://www.udacity.com/course/ud893"
  }]
};


var projects = {
  "projects": [{
    "title": "DTV Encoder Acquisition",
    "dates": "1997-1998",
    "description": "Led effort to purchase original DTV/HTDV encoders for ABC TV network and owned stations.  Wrote RFI and RFP.  Met with manufacturers regarding requirements."
  }, {
    "title": "Executive producer, Technology Leadership Summit 2012",
    "dates": "2011-2012",
    "description": "Produced two-day technology summit for invited TV executives.  Recruited keynote speakers and panel participants.  Produced program for the event including panel discussion topics."
  }, {
    "title": "Immersive Audio Demonstration",
    "dates": "March-July 2015",
    "description": "Participated in setup and demonstration of immersive audio mounted by a major European company.  Four-room demo at NAB broadcasters convention in Las Vegas, NV, in April and repeated in July at an industry meeting in Atlanta, GA."
  }]
};


work.display = function() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
work.display();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});


projects.display = function() {
  for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images > 0) {
      for (var image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
projects.display();

education.display = function() {
  if (education.schools.length > 0) {
    for (var i in education.schools) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

      $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      $(".education-entry:last").append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      $(".education-entry:last").append(formattedSchoolMajor);
    }


    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (i in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
      }
    }
  }
};

education.display();


$("#mapDiv").append(googleMap);
