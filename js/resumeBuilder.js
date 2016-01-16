var bio = {
  'name': 'Randy Hoffner',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '818-272-3929',
    'email': 'randy@ashlandoregon.org',
    'github': 'randyhoffner',
    'twitter': "@randyhoffner",
    'location': 'Ashland, Oregon'
  },
  'welcomeMessage': 'Welcome to the resume of Randy Hoffner.',
  'skills': ['tv technologist', 'technical writer', 'photographer (www.randyhoffner.com)', 'photoshop adept'],
  'biopic': 'images/randy.jpg',
};

bio.display = function() {
  if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);

    var len = bio.skills.length;
    for (var i = 0; i < len; i++) {
      $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
  }


  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
  formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
  formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
  formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
  formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));

  $('#header').prepend(formattedName).prepend(formattedRole).append(formattedBioPic).append(formattedWelcomeMsg);

  for (var j in formattedContactInfo) {
    $('#topContacts').append(formattedContactInfo[j]);
    $('#footerContacts').append(formattedContactInfo[j]);
  }
};
bio.display();



var work = {
  'jobs': [{
    'employer': 'NBC',
    "title": 'Sr Staff Engineer, Director R&D, Director Future Technology',
    location: 'New York, NY',
    'dates': '1979-1994',
    'description': 'Cutting edge technology projects, director of evaluation lab and HDTV lab.'
  }, {
    'employer': 'CBS',
    'title': 'Manager of Network Distribution Systems',
    'location': 'New York, NY',
    'dates': "1995-1996",
    'description': 'Managed network satellite distribution and backhaul systems.'
  }, {
    'employer': 'ABC',
    'title': 'Manager, Technology and Quality Control',
    'location': 'New York, NY, Los Angeles, CA',
    'dates': '1996-2007',
    'description': 'Managed projects in advanced TV and HDTV. Taught classes on digital and HDTV. Wrote and maintained ABC HDTV program delivery specification.  Established and managed production and delivery of video on demand programming.'
  }, {
    'employer': 'AZCAR Systems Integration and Consulting',
    'title': 'Senior Consulting Engineer',
    'location': 'Los Angeles, CA',
    'dates': '2008-2010',
    'description': 'Consulted with television facilities regarding upgrades and improvements to their technical plants and operations.'
  }]
};

work.display = function() {
  for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    $('.work-entry:last').append(formattedLocation);

    var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    $('.work-entry:last').append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    $('.work-entry:last').append(formattedDescription);
  }
};
work.display();




var education = {
  'schools': [{
    'name': 'University of Tulsa',
    'dates': '1965-1967',
    'location': 'Tulsa, OK',
    'degree': 'BA',
    'majors': ['Sociology'],
    'url': 'http://www.utulsa.edu'
  }, {
    'name': 'Oklahoma City University',
    'dates': '1962-1965',
    'location': 'Oklahoma City, OK',
    'degree': 'attended',
    'majors': ['Chemistry'],
    'url': 'http://www.okcu.edu'
  }],
  'onlineCourses': [{
    'school': 'Udacity',
    'title': 'Intro to HTML and CSS',
    'date': 'November 2015',
    'url': 'https://www.udacity.com/course/ud304'
  }, {
    'school': 'Udacity',
    'title': 'Responsive Web Design Fundamentals',
    'date': 'November 2015',
    'url': 'https://www.udacity.com/course/ud893'
  }]
};

education.display = function() {
  if (education.schools.length > 0) {
    for (var i in education.schools) {
      $('#education').append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
      var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);

      $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
      $('.education-entry:last').append(formattedSchoolDates);

      var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
      $('.education-entry:last').append(formattedSchoolLocation);

      var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
      $('.education-entry:last').append(formattedSchoolMajor);

      var formattedURL = HTMLonlineURL.replace('%data%', education.schools[i].url);
      $('.education-entry:last').append(formattedURL);
    }


    if (education.onlineCourses.length > 0) {
      $('#education').append(HTMLonlineClasses);
      for (var j in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[j].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
        $('.education-entry:last').append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', education.onlineCourses[j].url);
        $('.education-entry:last').append(formattedOnlineURL);
      }
    }
  }
};

education.display();


var projects = {
  'projects': [{
    'title': 'Experimental HDTV Shoots at Colonial Williamsburg, VA',
    'dates': 'January, 1991',
    'description': 'Arranged and supervised shooting of experimental HDTV footage at Colonial Williamsburg for use of NBC and partners.',
    'images': ['images/ring.jpg', 'images/nbc.jpg']
  }, {
    'title': 'Executive producer, Technology Leadership Summit 2012',
    'dates': '2011-2012',
    'description': 'Produced two-day technology summit for invited TV executives.  Recruited keynote speakers and panel participants.  Produced program for the event including panel discussion topics.',
    'images': ['images/agenda1.jpg', 'images/summit1.jpg']
  }, {
    'title': 'Immersive Audio Demonstration',
    'dates': 'March-July 2015',
    'description': 'Participated in setup and demonstration of immersive audio mounted by a major European company.  Four-room demo at NAB broadcasters convention in Las Vegas, NV, in April and repeated in July at an industry meeting in Atlanta, GA.',
    'images': ['images/nab.jpg', 'images/fraunhofer1.jpg']
  }]
};

projects.display = function() {
  if (projects.projects.length > 0) {
    for (var i in projects.projects) {
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
      $('.project-entry:last').append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
      $('.project-entry:last').append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

      for (var img in projects.projects[i].images) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[img]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
};

projects.display();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});






$('#mapDiv').append(googleMap);
