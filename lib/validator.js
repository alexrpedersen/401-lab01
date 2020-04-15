 'use strict';

 class Validator {
     constructor(schema){
         this.schema = schema;
     }
 }

 isValid(data) {

    let valid = true;

    for (let fieldName in this.schema) {

        let field = this.schema[fieldName];

        let required = field.required
        ? this.isTruthy(data[fieldName])
        : true;

      // Am I the right type (if we even care)
      let type = field.type
        ? this.isCorrectType(data[fieldName], field)
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }

    }
    return valid;
  }
 