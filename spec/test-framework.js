console.log('Test framework loaded successfully');

var assert = {
  isTrue: function(assertionToCheck, description){
    if (!assertionToCheck) {
      throw new Error("Test failed: " + description );
    }
    else console.log(description + ": Passed!");
  }
};
