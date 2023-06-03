var chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
     inputCallbackFn: function(o) {
      var miss = function() {
        chatWindow.talk(
          {
            "i-dont-get-it": {
              says: [
                "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
              ],
              reply: o.convo[o.standingAnswer].reply
            }
          },
          "i-dont-get-it"
        )
      }
      var match = function(key) {
        setTimeout(function() {
          chatWindow.talk(convo, key) 
        }, 600)
      }
  
      var strip = function(text) {
        return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
      }

      var found = false
      o.convo[o.standingAnswer].reply.forEach(function(e, i) {
        strip(e.question).includes(strip(o.input)) && o.input.length > 0
          ? (found = e.answer)
          : found ? null : (found = false)
      })
      found ? match(found) : miss()
    }
  }) 
  var convo = {
    "ice": {
      says: ["Hi", "What do you want to know about IARE ?"],
      reply: [
        {
          question: "How many lecturers are there in the department of computer science",
          answer: "How many lecturers are there in the department of computer science"
        },
        {
          question: "Fee structure",
          answer: "Fee structure"
        },
        {
          question: "Departments",
          answer: "Departments"
        },
        {
          question: "Placements",
          answer: "Placements"
        },
        {
            question: "Location",
            answer: "Location"
          },
        {
        question: "IARE website",
        answer: "IARE website"
        },
        {
            question: "Phone directory",
            answer: "Phone directory"
            }
      ]
    },
    "How many lecturers are there in the department of computer science": {
      says: ["There are 50 lecturers at the department"],
      reply: [
        {
          question: "Start Over",
          answer: "ice"
        }
      ]
    },
    "Fee structure": {
      says: ["Please visit this link for Fee structure in IARE <a href='https://www.iare.ac.in/?q=pages/fee-structure'>https://www.iare.ac.in/?q=pages/fee-structure</a>."],
      reply: [
        {
          question: "Start Over",
          answer: "ice"
        }
      ]
    },
    "Departments": {
      says: [" CSE,IT,CSIT,ECE,EEE,AIML,DS,CS,AERO,CIVIL,MECH, Please visit this link to know more about departments in IARE <a href='https://www.iare.ac.in/?q=Departments'>https://www.iare.ac.in/?q=Departments</a>."],
      reply: [
        {
          question: "Start Over",
          answer: "ice"
        }
      ]
    },
    "Placements": {
      says: ["Please visit this link to know about placements in IARE <a href='https://www.iare.ac.in/?q=pages/placements'>https://www.iare.ac.in/?q=pages/placements</a>."],
      reply: [
        {
          question: "Start Over",
          answer: "ice"
        }
      ]
    },
    "Location": {
        says: ["Please visit this link to know location of IARE <a href='https://www.iare.ac.in/?q=How-to-Reach-Us'>https://www.iare.ac.in/?q=How-to-Reach-Us</a>."],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ]
      },
      "IARE website": {
        says: ["Please visit this link to know more about IARE <a href='https://www.iare.ac.in'>https://www.iare.ac.in</a>."],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ]
      },
      "Phone directory": {
        says: ["Please visit this link to read IARE phone directory  <a href='https://www.iare.ac.in/?q=Phone-Directory'>https://www.iare.ac.in/?q=Phone-Directory</a>."],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ]
      }
      
  }
  chatWindow.talk(convo);