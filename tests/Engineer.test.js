const Engineer = require("../lib/Engineer");
const engineer = new Engineer("ash", "123", "ash-w@live.com.au", "AshWeston");

test("test if we can get the constructor values for the engineer object", () => {
  expect(engineer.name).toEqual("ash");
  expect(engineer.id).toEqual("123");
  expect(engineer.email).toEqual("ash-w@live.com.au");
  expect(engineer.githubUserName).toEqual("AshWeston");
});

test("test if we can get the name from getName() method", () => {
  expect(engineer.getName()).toEqual("ash");
});

test("test if we can get the id from getID() method", () => {
  expect(engineer.getId()).toEqual("123");
});

test("test if we can get the email from getEmail() method", () => {
  expect(engineer.getEmail()).toEqual("ash-w@live.com.au");
});

test("test if we can get the github from getGitHub() method", () => {
  expect(engineer.getGitHub()).toEqual("AshWeston");
});

test("test if we can get the role from getRole() method", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});
