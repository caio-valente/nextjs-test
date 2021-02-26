export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: '1'
      }
    },{
      params: {
        id: '2'
      }
    }],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;

  return {
    props: {
      id: id
    }
  }
}

function Produtos(props) {
  return <div>ID is: {props.id}</div>
}

export default Produtos;
