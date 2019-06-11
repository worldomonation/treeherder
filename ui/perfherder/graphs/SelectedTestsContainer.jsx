import React from 'react';
import PropTypes from 'prop-types';
import { react2angular } from 'react2angular/index.es2015';
import {
  Container,
  // Row,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
} from 'reactstrap';

import perf from '../../js/perf';

export class SelectedTestsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Container fluid />;
  }
}

SelectedTestsContainer.propTypes = {};

// SelectedTestsContainer.defaultProps = {
//   $stateParams: null,
//   $state: null,
// };

perf.component(
  'selectedTestsContainer',
  react2angular(SelectedTestsContainer, ['user'], ['$stateParams', '$state']),
);

export default SelectedTestsContainer;
