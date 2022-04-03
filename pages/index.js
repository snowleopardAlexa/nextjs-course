function Home(props) {

  const { products } = props

  return (
    <ul>
      {products.map((product) => 
      <li key={product.id}>{product.title}</li>
      )}
    </ul>
  );
}

export default Home

// this code doesn't run on the client side
// pre-fetch data before this component get pre-render by next.js
export async function getStaticProps() {
  return { 
    props: {
      products: [{id: 'p1', title: 'Product 1'}]
  }}
}