import React from 'react';
import PropTypes from 'prop-types';
import { react2angular } from 'react2angular/index.es2015';
import { Container, FormGroup, Input } from 'reactstrap';
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
      <Container className="graph-legend pl-0 pb-4">
        {seriesList.length > 0 &&
          seriesList.map(series => (
            <div key={series.id}>
              <span
                className="close mr-3 my-2 ml-2"
                onClick={() =>
                  removeSeries(series.projectName, series.signature)
                }
              >
                <FontAwesomeIcon icon={faTimes} size="xs" title="" />
              </span>
              <FormGroup>
                <Input
                  check
                  className="show-hide-check"
                  type="checkbox"
                  // checked={series.visible}
                  aria-label="Show/Hide series"
                  title="Show/Hide series"
                  onChange={() => {}}
                />
                <div
                  className={`graph-legend-card border pl-5 py-3 pr-3 ${
                    !series.visible ? 'series-inactive' : 'active'
                  }`}
                >
                  <p
                    className={`p-0 mb-1 ${series.color} text-left`}
                    onClick={() =>
                      addTestData('addRelatedConfigs', series.signature)
                    }
                    title="Add related configurations"
                  >
                    {series.name}
                  </p>
                  <p
                    className="p-0 mb-1 text-muted text-left"
                    onClick={() =>
                      addTestData('addRelatedBranches', series.signature)
                    }
                    title="Add related branches"
                  >
                    {series.projectName}
                  </p>
                  <p
                    className="p-0 mb-1 text-muted text-left"
                    onClick={() =>
                      addTestData('addRelatedPlatforms', series.signature)
                    }
                    title="Add related branches"
                  >
                    {series.platform}
                  </p>
                  <span className="small">{`${series.signature.slice(
                    0,
                    16,
                  )}...`}</span>
                </div>
              </FormGroup>
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
