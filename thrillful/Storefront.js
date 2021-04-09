// const Url = "";
// const APIkey = "";

// // first try
// //var query= `{
// //       name,
// //       primaryDomain 
// //       {
// //         url,
// //         host,
// //       }
// //     }`;

// var query = `{
//   shop {
//     name
//     primaryDomain {
//       url
//       host
//     }
//   }
// }`;


// function apiCall(query) {
//   return fetch('https://thrillfuldevelopment.myshopify.com/api/2021-04/graphql.json', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/graphql',
//       'X-Shopify-Storefront-Access-Token': "955c6f5a46ee1f803914123685d31acf"
//     },
//     "body": query
//   }).then(response => response.json());
// }

// apiCall(query).then(response => {
//   console.log(response)
// });



// This function is only to click on image and expand. Default banner
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}



//Product API call//////////////////////////////////////////////////////

function apiCall() {
  var keys = 'cf6f241633e9eae1b04eb0d5d6ab22b4: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';
  return fetch('https://thrillfuldevelopment.myshopify.com/admin/api/2021-04/products.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': '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'
      // 'Authorization': 'Basic '+ btoa(keys)
    }

  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

apiCall().then(response => {
  console.log(response)
});


