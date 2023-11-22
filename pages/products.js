import { gql } from '@apollo/client';
import client from '../apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        products(first: 5) {
          edges {
            node {
              id
              title
              handle
              descriptionHtml
              images(first: 1) {
                edges {
                  node {
                    src
                    altText
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.edges.map(({ node }) => node),
    },
  };
}

export default function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <img src={product.images.edges[0].node.src} alt={product.images.edges[0].node.altText} />
        </div>
      ))}
    </div>
  );
}
