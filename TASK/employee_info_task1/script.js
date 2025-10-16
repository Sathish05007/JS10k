
    var emp_id = prompt("Enter Employee ID:");
    var emp_name = prompt("Enter Employee Name:");
    var emp_phone = prompt("Enter Employee Phone Number:");
    var emp_email = prompt("Enter Employee Email:");
    var emp_gender = prompt("Enter Employee Gender:");
    var emp_location = prompt("Enter Employee Location:");
    var emp_designation = prompt("Enter Employee Designation:");
    var emp_salary = prompt("Enter Employee Salary:");
    var emp_marital_status = prompt("Is Employee Married? (Yes/No)");
    var emp_joindate = prompt("Employee Join Date:");
    var emp_experience = prompt("Employee Experience:");

    var infoHTML = `
      <p><strong>Emp ID:</strong> ${emp_id}</p>
      <p><strong>Emp Name:</strong> ${emp_name}</p>
      <p><strong>Emp Phone Number:</strong> ${emp_phone}</p>
      <p><strong>Emp Email:</strong> ${emp_email}</p>
      <p><strong>Emp Gender:</strong> ${emp_gender}</p>
      <p><strong>Emp Location:</strong> ${emp_location}</p>
      <p><strong>Emp Designation:</strong> ${emp_designation}</p>
      <p><strong>Emp Salary:</strong> ${emp_salary}</p>
      <p><strong>Emp Marital Status:</strong> ${emp_marital_status}</p>
      <p><strong>Emp Join Date:</strong> ${emp_joindate}</p>
      <p><strong>Emp Experience:</strong> ${emp_experience}</p>
    `;

    document.getElementById("empInfo").innerHTML = infoHTML;

