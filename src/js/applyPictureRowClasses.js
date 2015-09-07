import forEachAll from './forEachAll';

module.exports = () => {
  forEachAll(document.querySelectorAll('.translationPicturesRowOne, .translationPicturesRowTwo, .translationPicturesRowThree, .translationPicturesRowFour, .translationPicturesRowFive'), (index, row) => {
    var className = row.classList[0];
    row.classList.remove(className);
    row.parentElement.classList.add(className);
    row.parentElement.classList.add('translationPicturesRow');
  });
};