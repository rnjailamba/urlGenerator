/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} baseURL
 * @param  {String} parameters
 * @return {String}
 */
module.exports = {
  createURLwithParameters: function(baseURL,parameters){
    if(!isEmpty(JSON.parse(parameters))){
       var obj = JSON.parse(parameters);
       var cnt = 0;
      for (var prop in obj) {
          if( cnt == 0 ) 
            baseURL = baseURL.concat('?',prop,'=',obj[prop]);
          else
            baseURL = baseURL.concat('&',prop,'=',obj[prop]); 
          cnt++;         
      }
    }
    return baseURL;
  },
  isEmpty: function(obj){
  return (Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({}));
}
};
function isEmpty(obj){
  return (Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({}));
}

