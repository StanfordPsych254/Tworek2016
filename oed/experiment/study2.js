// ############################## Helper functions ##############################

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.
function showSlide(id) {
  // Hide all slides
  $(".slide").hide();
  // Show just the slide we want to show
  $("#"+id).show();
}

// Get random integers.
// When called with no arguments, it returns either 0 or 1. When called with one argument, *a*, it returns a number in {*0, 1, ..., a-1*}. When called with two arguments, *a* and *b*, returns a random value in {*a*, *a + 1*, ... , *b*}.
function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

// Add a random selection function to all arrays (e.g., <code>[4,8,7].random()</code> could return 4, 8, or 7). This is useful for condition randomization.
Array.prototype.random = function() {
  return this[random(this.length)];
}

//shuffle function, source = http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function set_ought_array(array, n) {
  var atypical_indices = get_unique_random_numbers(array.length, n);
  for (var i = 0; i< array.length; i++){
    if (atypical_indices.indexOf(i) != -1){
        var temp = array[i][0];
        array[i][0] = array[i][1];
        array[i][1] = temp;
    }
  }
  return array;
}

//adapted from http://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100 
function get_unique_random_numbers(upper, n) {
  var arr = []
  while(arr.length < 6){
    var randomnumber = Math.floor(Math.random()*12)
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
  }
  return arr;
}

// ############################## Configuration settings ##############################

//prompts for CRT
var sents_crt = ['If it takes 2 nurses 2 minutes to measure the blood pressure of 2 patients, how long would it take 200 nurses to measure the blood pressure of 200 patients?',

'Soup and salad cost $5.50 in total. The soup costs a dollar more than the salad. How much does the salad cost?',

'Sally is making sun tea. Every hour, the concentration of the tea doubles. If it takes 6 hours for the tea to be ready, how long would it take for the tea to reach half of the final concentration?'];

//prompts for inherence testing 
var sents_inherence = [['We use red in traffic lights to mean "stop" because of something about the color red or about stop lights—maybe the color red inherently acts as a warning.','We use red in traffic lights to mean "stop" because of some historical or contextual reason— maybe the color was arbitrarily assigned to this meaning a long time ago and we simply continued using it since.'],

['Parents and children sleep in different beds because of something about the parent-child relationship or about the act of sleeping in separate beds—maybe one of the critical components of the parent-child relationship is teaching children independence.', 'Parents and children sleep in different beds because of some historical or contextual reason— maybe it became popular to sleep in separate beds when wealthy people began to have nannies who would watch children at night.'],

['Engagement rings typically have diamonds because of something about engagement rings or about diamonds—maybe diamonds\' rarity and value is a match for the value of romantic love.', 'Engagement rings typically have diamonds because of some historical or contextual reason— maybe some marketing campaigns from the past are responsible for the association of diamonds with romantic love.'],

['Black is associated with funerals because of something about the color black or about funerals—maybe because the darkness of black conveys how people feel at funerals.', 'Black is associated with funerals because of some historical or contextual reason—maybe because an ancient people originated the practice for some idiosyncratic reason and then spread it to many parts of the world.'],

['Toothpaste is flavored with mint because of something about toothpaste or about mint—maybe the tingling sensation of mint makes one\'s teeth and gums feel extra clean.', 'Toothpaste is flavored with mint because of some historical or contextual reason—maybe because mint was cheap and readily available in the US at the time modern toothpaste began being made.'],

['There are 7 days in a week because of something about the quantity of 7 days or about the week as a marker of time—maybe the week is meant to align with phases of the moon, which are about 7 days long.', 'There are 7 days in a week because of some historical or contextual reason—maybe because ancient calendar-makers happened to pick this number and then the convention just continued.'],

['Weekends consist of Saturday and Sunday because of something about weekends or about Saturday and Sunday—maybe Saturday and Sunday are holy days for many people, so people wouldn\'t be able to work.', 'Weekends consist of Saturday and Sunday because of some historical or contextual reason— maybe because the labor movement of the early 20th century made a push for more free time for workers.'],

['Intelligent organisms on Earth have 2 arms and 2 legs because of something about intelligent organisms or about having 2 arms and 2 legs—maybe having 2 arms and 2 legs is the perfect balance between tool use and locomotion for intelligent organisms.', 'Intelligent organisms on Earth have 2 arms and 2 legs because of some historical or contextual reason—maybe because the animals they just happened to evolve from had similar appendages.'],

['Intelligent organisms on Earth have eyes and ears because of something about intelligent organisms or about eyes and ears—maybe eyes and ears work well for perceiving the world.', 'Intelligent organisms on Earth have eyes and ears because of some historical or contextual reason—maybe because of some of the randomness of evolution, which means that other sensory organs would have been just as effective.'],

['Intelligent organisms on Earth communicate through sound because of something about intelligent organisms or about communicating through sounds—maybe communicating through sound allows intelligent organisms to communicate over longer distances or while engaged in other activities.', 'Intelligent organisms on Earth communicate through sound because of some historical or contextual reason—maybe because the Earth\'s atmosphere just happens to support far-reaching sound transmission.'],

['Dollar bills are green because of something about dollar bills or about the color green—maybe since green is the color of trees it symbolizes endurance and trust and thus was chosen for money.', 'Dollar bills are green because of some historical or contextual reason—maybe green dyes were plentiful and cheap when dollar bills were first made and then the tradition just continued.'],

['We don\'t keep chipmunks as pets because of something about chipmunks or about pets—maybe because chipmunks don\'t like to be picked up or held.', 'We don\'t keep chipmunks as pets because of some historical or contextual reason—maybe because they happened to be absent from the geographical areas where humans started to domesticate animals thousands of years ago.'],

['We drink orange juice for breakfast because of something about orange juice or about breakfast— maybe the citrus aroma is refreshing and helps us to wake up.', 'We drink orange juice for breakfast because of some historical or contextual reason—maybe because orange growers a long time ago promoted orange juice for breakfast in an effort to sell more oranges.'],

['Pink is the color associated with girls because of something about the color pink or about girls— maybe because pink\'s flower-like appearance matches girls\' dainty nature.', 'Pink is the color associated with girls because of some historical or contextual reason—maybe because businesses promoted pink products for girls over the last century.'],

['Wedding dresses are white because of something about the color white or about wedding dresses—maybe because the untainted nature of white reminds people of pure love.', 'Wedding dresses are white because of some historical or contextual reason—maybe because someone famous wore a white wedding dress, which started a trend that continues to this day.'],

['Intelligent organisms on Earth fully pay attention when taking surveys because of something about intelligent organisms or about taking surveys—maybe paying attention allows intelligent organisms to contribute to research productively. For this item can you please choose choice "Neither agree nor disagree"?', 'Intelligent organisms on Earth fully pay attention when taking surveys because of some historical or contextual reason— maybe because taking surveys became a popular way to make money with the rise of technology over time. For this item can you please choose "Moderately disagree"?']];

//prompts for ought inferences
var sents_ought = [[['Consider that children typically address their teachers with “Ms.,” “Mrs.,” or “Mr.”', 'Is it wrong or right for children address their teachers with “Ms.,” “Mrs.,” or “Mr.”?', 'Should children address their teachers with “Ms.,” “Mrs.,” or “Mr.”?'], ['Consider that children don’t typically address their teachers by their first name.', 'Is it wrong or right for children to address their teachers by their first name?', 'Should children address their teachers by their first name?']],

//2
[['Think about how people often celebrate their birthdays with other people.', 'Is it wrong or right for people to celebrate their birthdays with other people?', 'Should people celebrate their birthdays with other people?'], ['Think about how people seldom celebrate their birthdays by themselves.', 'Is it wrong or right for people to celebrate their birthdays by themselves?', 'Should people celebrate their birthdays themselves?']],

//3
[['Think about how people often go watch a movie when they go on dates.', 'Is it wrong or right for people to go watch a movie when they go on dates?', 'Should people go watch a movie when they go on dates?'], ['Think about how people seldom go play video games when they go on dates.', 'Is it wrong or right for people go play video games when they go on dates?', 'Should people go play video games when they go on dates?']],

//4
[['Think about how people typically give roses as gifts on Valentine\'s Day.', 'Is it wrong or right for people to give roses as gifts on Valentine’s Day?', 'Should people give roses as gifts on Valentine’s Day?'], ['Think about how people don’t typically give sweaters as gifts on Valentine’s Day', 'Is it wrong or right for people to give sweaters as gifts on Valentine’s Day?', 'Should people give sweaters as gifts on Valentine’s Day?']],

//5
[['Think about how doctors usually wear white coats.', 'Is it wrong or right for doctors to wear white coats?', 'Should doctors wear white coats?'], ['Think about how doctors don’t usually wear purple coats.', 'Is it wrong or right for doctors to wear purple coats?', 'Should doctors wear purple coats?']],

//6
[['Think about how men and women typically have separate public bathrooms.', 'Is it wrong or right for men and women to have separate public bathrooms?', 'Should men and women have separate public bathrooms?'], ['Think about how men and women typically don’t share the same public bathrooms.', 'Is it wrong or right for men and women to share the same public bathrooms?', 'Should men and women share the same public bathrooms?']],

//7
[['Think about how a lot of professionals wear dark-colored clothing.', 'Is it wrong or right for professionals to wear dark-colored clothing?', 'Should professionals wear dark-colored clothing?'], ['Think about how few professionals wear clothing that has bright colors or bold patterns.', 'Is it wrong or right for professionals to wear clothing that has bright colors or bold patterns?', 'Should professionals wear clothing that has bright colors or bold patterns?']],

//8
[['Consider that people typically stand when the national anthem is played.', 'Is it wrong or right for people to stand when the national anthem is played?', 'Should people stand when the national anthem is played?'], ['Consider that people don’t typically stay seated when the national anthem is played.', 'Is it wrong or right for people to stay seated when the national anthem is played?', 'Should people stay seated when the national anthem is played?']],

//9
[['Consider that people often pay money to watch others play sports.', 'Is it wrong or right for people to pay money to watch others play sports?', 'Should people pay money to watch others play sports?'], ['Consider that people seldom pay money to watch others play video games.', 'Is it wrong or right for people to pay money to watch others play video games?', 'Should people pay money to watch others play video games?']],

//10
[['Consider that people generally shake hands when they first meet.', 'Is it wrong or right for people to shake hands when they first meet?', 'Should people shake hands when they first meet?'], ['Consider that people don’t generally touch elbows when they first meet.', 'Is it wrong or right for people to touch elbows when they first meet?', 'Should people touch elbows when they first meet?']],

//11
[['Consider that most men wear their hair short.', 'Is it wrong or right for men to wear their hair short?', 'Should men wear their hair short?'], ['Consider that few men wear their hair long.', 'Is it wrong or right for men to wear their hair long?', 'Should men wear their hair long?']],

//12
[['Consider that couples typically live in a different house than their relatives.', 'Is it wrong or right for couples to live in a different house than their relatives?', 'Should couples live in a different house than their relatives?'], ['Consider that couples don’t typically live in the same house as their relatives.', 'Is it wrong or right for couples to live in the same house as their relatives?', 'Should couples live in the same house as their relatives?']]];

//attention check
//['For this question, please slide all the range sliders all the way to the left to indicate that you are paying attention', 'Is it wrong or right to slide the range slider all the way to the left?', 'Should one slide the range slider all the way to the left?']

//attention check
sents_inherence = shuffle(sents_inherence); 
sents_ought = shuffle(sents_ought);
sents_crt = shuffle(sents_crt);
sents_ought = set_ought_array(sents_ought, 6);
//need to implement shuffling typical vs atypical
sents_ought[12] = [['For this question, please slide all the range sliders all the way to the left to indicate that you are paying attention', 'Is it wrong or right to slide the range slider all the way to the left?', 'Should one slide the range slider all the way to the left?'], ['For this question, please slide all the range sliders all the way to the left to indicate that you are paying attention', 'Is it wrong or right to slide the range slider all the way to the left?', 'Should one slide the range slider all the way to the left?']];
sents_ought = shuffle(sents_ought);

var totalTrials = sents_inherence.length + sents_ought.length + sents_crt.length;

//randomizes the order of the parts
var parts = ['crt', 'ought', 'inherence'];
//var parts = ['crt'];
parts = shuffle(parts);

// Show the instructions slide -- this is what we want subjects to see first.
showSlide("instructions");

var slider_rightwrong_moved = false;
var slider_should_moved = false;

// ############################## The main event ##############################
var experiment = {
    // The object to be submitted.
    data: {
      condition: [],
      prompts_ought1: [],
      prompts_ought2: [],
      prompts_ought3: [],
      prompts_ought4: [],
      prompts_ought5: [],
      prompts_ought6: [],
      prompts_ought7: [],
      prompts_ought8: [],
      prompts_ought9: [],
      prompts_ought10: [],
      prompts_ought11: [],
      prompts_ought12: [],
      prompts_ought13: [],
      prompts_inherence1: [],
      prompts_inherence2: [],
      prompts_inherence3: [],
      prompts_inherence4: [],
      prompts_inherence5: [],
      prompts_inherence6: [],
      prompts_inherence7: [],
      prompts_inherence8: [],
      prompts_inherence9: [],
      prompts_inherence10: [],
      prompts_inherence11: [],
      prompts_inherence12: [],
      prompts_inherence13: [],
      prompts_inherence14: [],
      prompts_inherence15: [],
      prompts_inherence16: [],
      prompts_crt1: [],
      prompts_crt2: [],
      prompts_crt3: [],
      should: [],
      rightwrong: [],
      education: [],
      political: [],
      intrinsic: [],
      extrinsic: [],
      crt: [],
      age: [],
      ethnicity: [],
      comments: [],
      gender: []
    },
    
    start:function() {
        experiment.data.condition.push(parts);
        experiment.data.prompts_ought1.push(sents_ought[0][0][0]);
        experiment.data.prompts_ought2.push(sents_ought[1][0][0]);
        experiment.data.prompts_ought3.push(sents_ought[2][0][0]);
        experiment.data.prompts_ought4.push(sents_ought[3][0][0]);
        experiment.data.prompts_ought5.push(sents_ought[4][0][0]);
        experiment.data.prompts_ought6.push(sents_ought[5][0][0]);
        experiment.data.prompts_ought7.push(sents_ought[6][0][0]);
        experiment.data.prompts_ought8.push(sents_ought[7][0][0]);
        experiment.data.prompts_ought9.push(sents_ought[8][0][0]);
        experiment.data.prompts_ought10.push(sents_ought[9][0][0]);
        experiment.data.prompts_ought11.push(sents_ought[10][0][0]);
        experiment.data.prompts_ought12.push(sents_ought[11][0][0]);
        experiment.data.prompts_ought13.push(sents_ought[12][0][0]);
        experiment.data.prompts_inherence1.push(sents_inherence[0][0]);
        experiment.data.prompts_inherence2.push(sents_inherence[1][0]);
        experiment.data.prompts_inherence3.push(sents_inherence[2][0]);
        experiment.data.prompts_inherence4.push(sents_inherence[3][0]);
        experiment.data.prompts_inherence5.push(sents_inherence[4][0]);
        experiment.data.prompts_inherence6.push(sents_inherence[5][0]);
        experiment.data.prompts_inherence7.push(sents_inherence[6][0]);
        experiment.data.prompts_inherence8.push(sents_inherence[7][0]);
        experiment.data.prompts_inherence9.push(sents_inherence[8][0]);
        experiment.data.prompts_inherence10.push(sents_inherence[9][0]);
        experiment.data.prompts_inherence11.push(sents_inherence[10][0]);
        experiment.data.prompts_inherence12.push(sents_inherence[11][0]);
        experiment.data.prompts_inherence13.push(sents_inherence[12][0]);
        experiment.data.prompts_inherence14.push(sents_inherence[13][0]);
        experiment.data.prompts_inherence15.push(sents_inherence[14][0]);
        experiment.data.prompts_inherence16.push(sents_inherence[15][0]);
        experiment.data.prompts_crt1.push(sents_crt[0]);
        experiment.data.prompts_crt2.push(sents_crt[1]);
        experiment.data.prompts_crt3.push(sents_crt[2]);
        experiment.next();
    },


    hide_test_messages: function() {
        $("#testMessage").html('');   // clear the test message
        $("#testSliderMessage").html('');   // clear the test message
        $("#testCRTMessage").html('');   // clear the test message
        $("#testDemographicMessage").html('');   // clear the test message
        $("#testDebriefingMessage").html('');   // clear the test message
    },


    record_rightwrong_slider_change: function() {
        slider_rightwrong_moved = true;
    },

    record_should_slider_change: function() {
        slider_should_moved = true;
    },

    log_response_crt: function() {
        var crt_answer = document.getElementById("crt_answer");
        var answer_text = crt_answer.value;
        if (answer_text == "") {
          $("#testCRTMessage").html('<font color="red">' + 'Please make a response!' + '</font>');
        }
        else {
          experiment.data.crt.push(answer_text);
          crt_answer.value = "";
          experiment.next();
        }
    },

    // LOG RESPONSE FOR INHERENCE SECTION
    log_response_inherence: function() {
        var response_logged_i = false;
        var response_logged_e = false;
        
        //Array of radio buttons
        var radio_i = document.getElementsByName("judgment_i");
        var radio_e = document.getElementsByName("judgment_e");
        
        // Loop through radio buttons
        for (i = 0; i < radio_i.length; i++) {
            if (radio_i[i].checked) {
              experiment.data.intrinsic.push(radio_i[i].value);
              response_logged_i = true;       
            }
            if (radio_e[i].checked) {
              experiment.data.extrinsic.push(radio_e[i].value);
              response_logged_e = true;       
            }
        }
    
        if (response_logged_i & response_logged_e) {
            //nextButton.blur();
          
            // uncheck radio buttons
            for (i = 0; i < radio_i.length; i++) {
              radio_i[i].checked = false
              radio_e[i].checked = false
            }
            experiment.next();
            } 
        else {
            $("#testMessage").html('<font color="red">' + 'Please make a response!' + '</font>');
          }
    },

    log_response_ought: function() {
      var slider_should = document.getElementById("range1");
      var slider_rightwrong = document.getElementById("range2");
      //if (slider_should_moved == false | slider_rightwrong_moved == false) {
          //$("#testSliderMessage").html('<font color="red">' + 'Please make a response!' + '</font>');
      //}
      //else{
        //push data
        experiment.data.should.push(slider_should.value);
        experiment.data.rightwrong.push(slider_rightwrong.value);

        //reset sliders
        slider_should.value = slider_should.defaultValue;
        slider_rightwrong.value = slider_should.defaultValue;

        experiment.next();
     // }
    },

    log_response_demographic: function() {
        var response_logged_ed = false;
        var response_logged_political = false;

        var radio_ed = document.getElementsByName("education");
        var radio_political = document.getElementsByName("political");

        for (i = 0; i < radio_ed.length; i++) {
            if (radio_ed[i].checked) {
                experiment.data.education.push(radio_ed[i].value);
                response_logged_ed = true;
            }
        }
        for (i = 0; i < radio_political.length; i++) {
            if (radio_political[i].checked) {
                experiment.data.political.push(radio_political[i].value);
                response_logged_political = true;
            }
        }

        if (response_logged_political == false | response_logged_ed == false) {
            $("#testDemographicMessage").html('<font color="red">' + 'Please answer all questions.' + '</font>');
        }
        else {
          experiment.run_debriefing_section();
        }
    },

    log_response_debriefing: function() {
        var age_selector = document.getElementById("age");
        var age = age_selector.options[age_selector.selectedIndex].text;

        var gender_selector = document.getElementById("gender");
        var gender = gender_selector.options[gender_selector.selectedIndex].text;

        var ethnicity_selector = document.getElementById("ethnicity");
        var ethnicity = ethnicity_selector.options[ethnicity_selector.selectedIndex].text;

        var comments = document.getElementById("expcomments").value;

       // if(age == undefined | gender == undefined | ethnicity == undefined) {
         // $("#testDebriefingMessage").html('<font color="red">' + 'Please answer all questions.' + '</font>');
        //}
        //else {
          experiment.data.age.push(age);
          experiment.data.gender.push(gender);
          experiment.data.ethnicity.push(ethnicity);
          experiment.data.comments.push(comments);

          experiment.hide_test_messages();
          experiment.end();         
        //}
    },
    
    // The work horse of the sequence - what to do on every trial.
    next: function() {
      
        // Allow experiment to start if it's a turk worker OR if it's a test run
        if (window.self == window.top | turk.workerId.length > 0) {
        
            experiment.hide_test_messages();
            experiment.display_progress_bars();
            
            if (parts[0] == "inherence"){
                experiment.run_inherence_section();
            }
            else if (parts[0] == "ought"){
                experiment.run_ought_section();
            }
            else if (parts[0] == "crt") {
                experiment.run_crt_section();
            }

            if (parts.length == 0) {
              experiment.run_demographic_section();
            }
              
            // push all relevant variables into data object     
            //experiment.data.prompts.push(prompts);
      }
    },

    // submitcomments function
    submit_comments: function() {
      experiment.data.language.push(document.getElementById("homelang").value);
      experiment.data.children.push(document.getElementById("childrenyn").value);
      experiment.data.expt_aim.push(document.getElementById("expthoughts").value);
      experiment.data.expt_gen.push(document.getElementById("expcomments").value);
      experiment.end();
    },

    display_progress_bars: function() {
        $("#progress_inherence").attr("style","width:" +
                String(100 * (1 - (sents_inherence.length + sents_ought.length + sents_crt.length)/totalTrials)) + "%");
        $("#progress_ought").attr("style","width:" +
                String(100 * (1 - (sents_inherence.length + sents_ought.length + sents_crt.length)/totalTrials)) + "%");
        $("#progress_crt").attr("style","width:" +
                String(100 * (1 - (sents_inherence.length + sents_ought.length + sents_crt.length)/totalTrials)) + "%");
    },

    run_inherence_section: function() {
        var prompts = sents_inherence.shift();
        if (typeof prompts == "undefined"){
          parts.shift();
          experiment.next();
        }
        else{
          $("#sentence_intrinsic").html(prompts[0]);
          $("#sentence_extrinsic").html(prompts[1]);
          showSlide("inherence");
        }
    },

    run_ought_section: function() {
        slider_rightwrong_moved = false;
        slider_should_moved = false;

        document.getElementsByName("rangeInputShould").value = 0;
        document.getElementsByName("rangeInputRightWrong").value = 0;

        var prompts = sents_ought.shift();
        if (typeof prompts == "undefined"){
          parts.shift();
          experiment.next();
        }
        else{
          $("#description").html(prompts[0][0]); 
          $("#question1").html(prompts[0][1]);
          $("#question2").html(prompts[0][2]);
          showSlide("ought");
        }
    },

    run_crt_section: function() {
        var prompts = sents_crt.shift();

        if (typeof prompts == "undefined") {
          parts.shift();
          experiment.next();
        }
        else {
          $("#crt_question").html(prompts);
          showSlide("crt");
        }
    },

    run_demographic_section: function() {
      showSlide("demographic");
    },

    run_debriefing_section: function() {
      showSlide("debriefing");
    },

    end: function() {
      showSlide("finished");
      setTimeout(function() { turk.submit(experiment.data) });
    }
}