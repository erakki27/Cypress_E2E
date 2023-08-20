import addContext from "mochawesome/addContext";
import 'cypress-mochawesome-reporter/register';

Cypress.on("test:after:run", (test, runnable) => {  
    if (test.state === "failed") {    
      const screenshot       =`assets/${Cypress.spec.name}/${runnable.parent.title} --       ${test.title} (failed).png`;    
  addContext({ test }, screenshot);  
    }
  });