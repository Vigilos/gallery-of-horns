import React from 'react';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
  handleDropdown = e => {
    e.preventDefault();
    this.props.filterAnimals(Number(e.target.value));
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
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
        </Form>
      </>
    );
  }
}

export default SearchForm;
