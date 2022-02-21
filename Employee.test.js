const Employee = require("./lib/Employee");
const employee = new Employee("ash", "123", "ash-w@live.com.au");

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toEqual("ash");
  expect(employee.id).toEqual("123");
  expect(employee.email).toEqual("ash-w@live.com.au");
});

test("test if we can get the name from getName() method", () => {
  expect(employee.getName()).toEqual("ash");
});

test("test if we can get the id from getID() method", () => {
  expect(employee.getId()).toEqual("123");
});

test("test if we can get the email from getEmail() method", () => {
  expect(employee.getEmail()).toEqual("ash-w@live.com.au");
});

test("test if we can get the role from getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
