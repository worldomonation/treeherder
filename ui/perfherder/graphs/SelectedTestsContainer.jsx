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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import perf from '../../js/perf';

export class SelectedTestsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO series info isn't shown in url anymore when tests are added
  render() {
    const { seriesList, addTestData, removeSeries } = this.props;

    return (
      <Container className="graph-legend-table">
        {seriesList.length > 0 &&
          seriesList.map(series => (
            <div key={series.id}>
              <span
                className="close"
                onClick={() =>
                  removeSeries(series.projectName, series.signature)
                }
              >
                <FontAwesomeIcon icon={faTimes} size="sm" title="" />
              </span>
              {/* style="border-left-color: {{series.blockColor}}" ng-class="{'series-inactive':!series.visible}" */}
              <div className="graph-legend">
                <span
                  className="p-0 btn btn-link text-info text-left"
                  onClick={() =>
                    addTestData('addRelatedConfigs', series.signature)
                  }
                  title="Add related configurations"
                >
                  {series.name}
                </span>
                <span
                  className="p-0 btn btn-link text-muted text-left"
                  onClick={() =>
                    addTestData('addRelatedBranches', series.signature)
                  }
                  title="Add related branches"
                >
                  {series.projectName}
                </span>
                <br />
                <span
                  className="p-0 btn btn-link text-muted text-left"
                  onClick={() =>
                    addTestData('addRelatedPlatforms', series.signature)
                  }
                  title="Add related branches"
                >
                  {series.platform}
                </span>
                <p className="small text-truncate">{series.signature}</p>
              </div>
              {/* <input title="Show/Hide series" type="checkbox" ng-model="series.visible" class="show-hide-check" ng-change="showHideSeries(series.signature)"> */}
            </div>
          ))}
      </Container>
    );
  }
}

SelectedTestsContainer.propTypes = {
  seriesList: PropTypes.arrayOf(PropTypes.shape({})),
  addTestData: PropTypes.func,
  removeSeries: PropTypes.func,
};

SelectedTestsContainer.defaultProps = {
  seriesList: undefined,
  addTestData: undefined,
  removeSeries: undefined,
};

perf.component(
  'selectedTestsContainer',
  react2angular(
    SelectedTestsContainer,
    ['seriesList', 'addTestData', 'removeSeries'],
    ['$stateParams', '$state'],
  ),
);

export default SelectedTestsContainer;
