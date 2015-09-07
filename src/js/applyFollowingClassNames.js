import forEachAll from './forEachAll';
import followingClassAssignments from './followingClassAssignments';

module.exports = () => {
  followingClassAssignments.forEach((classChange) => {
    forEachAll(document.querySelectorAll(classChange.from), (index, elem) => {
      if (elem.parentElement.nextSibling && typeof elem.parentElement.nextSibling.classList !== 'undefined')
      {
        elem.parentElement.nextSibling.classList.add(classChange.to);
      }
    });
  });
};