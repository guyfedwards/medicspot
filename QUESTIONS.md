# Questions
Some hopefully simple questions for candidates to answer

Send the below via email to the candidate

---

Qs1: Explain the output of the following code and why

    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");


Qs2: Explain the output of the following code and why

    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);


Qs3: Explain the potential issue with the following code (hint: `5` is supposed to be the default value if no default is provided)

    function foo(d) {
      d = d || 5;
      console.log(d);
    }

