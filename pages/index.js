// file system - can be ran on the server side 
import path from 'path'
import fs from 'fs/promises'

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

// this code doesn't run on the client side - this runs on the server side
// pre-fetch data before this component get pre-render by next.js
// the code is now executed on the SERVER-SIDE 
// cwd - current working directory
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(javascript)

  return { 
    props: {
      products: [{id: 'p1', title: 'Product 1'}]
  }}
}