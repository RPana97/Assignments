const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];
//function to find user input name
function findUser (name) {
    const userName = users.find (user => user.firstName == name);
    return userName;
}
//filters premium members
const premiumMember = users.filter (user => user.isPremiumMember);
//lists all last names
const lastNames = users.map (user => user.lastName);
//list users over 10 logins
const freqLogin = users.filter (user => user.logins > 10);
//adds all login numbers
const totalLogin = users.reduce((total, {logins}) => total + logins, 0);


console.log (findUser(`Jose`));
console.log (``);
console.log (`Premium members:`);
console.log (premiumMember);
console.log (``);
console.log (`All last names:`);
console.log (lastNames);
console.log (``);
console.log (`Frequent users:`);
console.log (freqLogin);
console.log (``);
console.log (`total logins:`);
console.log (totalLogin);