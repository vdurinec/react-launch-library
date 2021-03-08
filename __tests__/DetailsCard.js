import { render, screen } from '@testing-library/react';
import { default as Details } from '../components/details-card';

describe('DetailsCard', () => {
  test('renders without crashing', () => {
    render(
      <Details.Card testId="test-details-card">
        <h1>details card test content</h1>
      </Details.Card>
    );

    expect(screen.getByTestId('test-details-card')).toHaveTextContent(
      'details card test content'
    );
  });
});

describe('DetailsItemContainer', () => {
  test('renders without crashing', () => {
    render(
      <Details.Card testId="test-details-card">
        <Details.ItemContainer testId="test-details-item-container">
          <h1>details item container test content</h1>
        </Details.ItemContainer>
      </Details.Card>
    );

    expect(screen.getByTestId('test-details-item-container')).toHaveTextContent(
      'details item container test content'
    );
  });
});

describe('DetailsItem', () => {
  test('renders without crashing', () => {
    render(
      <Details.Card testId="test-details-card">
        <Details.ItemContainer testId="test-details-item-container">
          <Details.Item
            item="details item test content"
            testId="test-details-item"
          />
        </Details.ItemContainer>
      </Details.Card>
    );

    expect(screen.getByTestId('test-details-item')).toHaveTextContent(
      'details item test content'
    );
  });
});
