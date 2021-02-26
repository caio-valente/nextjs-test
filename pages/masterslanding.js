import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticPaths() {
  return {
    paths: [{
      params: {
        id: 'landing'
      }
    },{
      params: {
        id: 'methods'
      }
    }],
    fallback: false,
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

function getContent(page) {
  if (page === 'landing') {
    return (
      <Col>
        <h1>Teste</h1>
      </Col>
    )
  } else {
    return (
      <Col><h1>Método?</h1></Col>
    )
  }
}

function masterLanding(props) {
  return (
    <div>
      <Col>
        <Navbar>
          <Link href="http://portal.utfpr.edu.br/cursos/coordenacoes/stricto-sensu/ppgem-ct"><a>
            <Row noGutters="true">
              <Col><Image
                src="http://www.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/efcf9caf-6d29-4c24-8266-0b7366ea3a40.png" // Route of the image file
                height={30.5} // Desired size with correct aspect ratio
                width={76.8} // Desired size with correct aspect ratio
                alt="UTFPR Logo"
              /></Col>
            </Row>
          </a></Link>
          <Navbar.Toggle id="navbar-toggler"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Métodos</Nav.Link>
              <Nav.Link href="#">Resultados</Nav.Link>
              <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
      <Col>
        <Row> getContent(props.id) </Row>
      </Col>
      <Col>
        <footer className="footer bg-light">
          <Container>
            <Row>
              <Col className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className = "list-inline mb-2">
                  <li className="list-inline-item"><Link href='#'><a>Home</a></Link></li>
                  <li className="list-inline-item">.</li>
                  <li className="list-inline-item"><Link href='#'><a>Currículo</a></Link></li>
                  <li className="list-inline-item">.</li>
                  <li className="list-inline-item"><Link href='#'><a>Contato</a></Link></li>
                </ul>
                <p className = "text-muted small mb-4 mb-lg-0">© Todos os direitos reservados</p>
              </Col>
              <Col className="col-lg-6 h-100 text-center text-lg-right my-auto">

              </Col>
            </Row>
          </Container>
        </footer>
      </Col>
    </div>
  )
}

export default masterLanding
