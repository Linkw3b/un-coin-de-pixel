(function () {
  const token = '6b6699474e93a2f250c1388584d8f1';

  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: '{ allPosts { title } }'
      }),
    }
  )
    .then(res => res.json())
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error);
    });
})();
