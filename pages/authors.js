let Author = require('../models/author');

function get_authors () {
  return Author.find({});
}

const get_author_list = async () => {
  let authors_list = await get_authors().exec();
  return authors_list.map(function(author) {
    return Author(author).name + " : " + Author(author).lifespan;
  });
};

exports.show_all_authors = function(res) {
  get_author_list()
    .then((data) => {
      res.send(data);
    })
    .catch((_) => res.send('No authors found'));
}
