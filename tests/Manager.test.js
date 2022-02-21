const Manager = require("../lib/Manager");
const manager = new Manager("ash", "123", "ash-w@live.com.au", "1");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toEqual("ash");
  expect(manager.id).toEqual("123");
  expect(manager.email).toEqual("ash-w@live.com.au");
  expect(manager.officeNumber).toEqual("1");
});

test("test if we can get the name from getName() method", () => {
  expect(manager.getName()).toEqual("ash");
});

test("test if we can get the id from getID() method", () => {
  expect(manager.getId()).toEqual("123");
});

test("test if we can get the email from getEmail() method", () => {
  expect(manager.getEmail()).toEqual("ash-w@live.com.au");
});

test("test if we can get the office number from getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toEqual("1");
});

test("test if we can get the role from getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
