import forEachAll from './forEachAll';

module.exports = () => {
  forEachAll(document.querySelectorAll('td'), (index, td) => {
    if (/✔/.test(td.textContent))
    {
      td.classList.add('checked');
    }
  });
};