export const checkValidateData = (email, password) => {
    // Regex for validating email
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // Regex for validating password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    
    if (!emailRegex.test(email)) {
      return "Invalid Email";
    }
  
    
    if (!passwordRegex.test(password)) {
      let errorMessages = [];
      if (!/(?=.*[a-z])/.test(password)) {
        errorMessages.push("Password must contain at least one lowercase letter.");
      }
      if (!/(?=.*[A-Z])/.test(password)) {
        errorMessages.push("Password must contain at least one uppercase letter.");
      }
      if (!/(?=.*\d)/.test(password)) {
        errorMessages.push("Password must contain at least one digit.");
      }
      if (!/(?=.*[@$!%*?&])/.test(password)) {
        errorMessages.push("Password must contain at least one special character.");
      }
      if (!/.{8,}/.test(password)) {
        errorMessages.push("Password must be at least 8 characters long.");
      }
      return errorMessages.join(' ');
    }
  
    
    return null;
  };
  