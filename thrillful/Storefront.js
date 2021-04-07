const Url = "";
const APIkey = "";
 
// first try
//var query= `{
//       name,
//       primaryDomain 
//       {
//         url,
//         host,
//       }
//     }`;
  
var query = `{
  shop {
    name
    primaryDomain {
      url
      host
    }
  }
}`;


  function apiCall(query) {
    return fetch('https://thrillfuldevelopment.myshopify.com/api/2021-04/graphql.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token': "955c6f5a46ee1f803914123685d31acf"
      },
      "body": query
    }).then(response => response.json());
  }

  apiCall(query).then(response => {
    console.log(response)
  });
  
  
  