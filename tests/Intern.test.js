const Intern = require("../lib/Intern");
const intern = new Intern("ash", "123", "ash-w@live.com.au", "testSchool");

test("test if we can get the constructor values for the manager object", () => {
  expect(intern.name).toEqual("ash");
  expect(intern.id).toEqual("123");
  expect(intern.email).toEqual("ash-w@live.com.au");
  expect(intern.school).toEqual("testSchool");
});

test("test if we can get the name from getName() method", () => {
  expect(intern.getName()).toEqual("ash");
});

test("test if we can get the id from getID() method", () => {
  expect(intern.getId()).toEqual("123");
});

test("test if we can get the email from getEmail() method", () => {
  expect(intern.getEmail()).toEqual("ash-w@live.com.au");
});

test("test if we can get the school from getSchool() method", () => {
  expect(intern.getSchool()).toEqual("testSchool");
});

test("test if we can get the role from getRole() method", () => {
  expect(intern.getRole()).toEqual("Intern");
});
