import forEachAll from './forEachAll';

module.exports = () => {
  forEachAll(document.querySelectorAll('.drop-first-when-printing'), (index, elem) => {
    forEachAll(elem.parentElement.parentElement.querySelectorAll('table'), (i, table) => {
      table.classList.add('drop-first-when-printing');
    });
  });
};