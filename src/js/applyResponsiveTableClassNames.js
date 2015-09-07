import forEachAll from './forEachAll';

module.exports = () => {
  forEachAll(document.querySelectorAll('.responsive-follows'), (index, elem) => {
    forEachAll(elem.parentElement.parentElement.querySelectorAll('table'), (i, table) => {
      table.classList.add('responsive-table');

      var headers = [];

      forEachAll(table.querySelector('tr').children, (j, tr) => {
        headers.push(tr.innerHTML);
        tr.scope = 'col';
      });

      forEachAll(table.querySelectorAll('tr'), (j, tr) => {
        forEachAll(tr.children, (k, td) => {
          if ( k === 0)
          {
            td.setAttribute('scope', 'row');
          }
          else
          {
            td.setAttribute('data-title', headers[k]);
          }
        });
      });
    });
  });
};