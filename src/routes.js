const { tambahBuku, tampilkanSemuaBuku, tampilkanSatuBuku, editBuku, hapusBuku } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: tambahBuku,
  },
  {
    method: 'GET',
    path: '/books',
    handler: tampilkanSemuaBuku,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: tampilkanSatuBuku,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBuku,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: hapusBuku,
  },
];

module.exports = routes;
