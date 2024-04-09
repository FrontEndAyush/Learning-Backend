"use strict"; // i'm using use strict to avoid mistakes and autogernate global varibles are also going to stop!

function autoGlobals() {
  let teacher = "ayush";

  student = "sarthak"; // now student is going to throw error  because you are using use strict if you remove the use strict then student will become a global varialbe.
  console.log(teacher);
}
autoGlobals();

console.log(student);
