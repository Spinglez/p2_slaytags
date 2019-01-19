console.log('im linked!');

let userTransfer = function(){
  let firstName = window.localStorage.getItem('firstName');
  let lastName = window.localStorage.getItem('lastName');
  let access = window.localStorage.getItem('access_token');
  console.log(firstName, lastName, access);
  return firstName, lastName, access;
};

module.exports = userTransfer;
