const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(personalInfo) {
  return personalInfo.reduce((oldest, person) => {
    const personAge = getAge(person.birth, person.death);
    const oldestAge = getAge(oldest.birth, oldest.death);
    return personAge > oldestAge ? person : oldest;
    // if personAge > oldestAge, person is returned; otherwise, oldest.
  });
};

// Do not edit below this line
module.exports = findTheOldest;
