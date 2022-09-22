import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchForm extends React.Component {
  handleDropdown = e => {
    e.preventDefault();
    this.props.filterAnimals(Number(e.target.value), 'horns');
  };

  handleDescSearch = e => {
    e.preventDefault();
    this.props.filterAnimals(e.target.value, 'description');
  };

  render() {
    return (
      <>
        <Form>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Form.Group
                  className="mb-3 d-inline"
                  controlId="filter-by-horns"
                >
                  <Form.Select
                    aria-label="Filter by number of horns"
                    onChange={this.handleDropdown}
                  >
                    <option>Filter by number of horns</option>
                    <option value="">All</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="100">100</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12} md={8}>
                <Form.Group
                  className="mb-3  d-inline"
                  controlId="filter-by-description"
                >
                  <Form.Control
                    type="text"
                    placeholder="Search by description"
                    onChange={this.handleDescSearch}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Form>
      </>
    );
  }
}

export default SearchForm;
