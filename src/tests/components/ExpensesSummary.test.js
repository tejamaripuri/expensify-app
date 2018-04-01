import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { wrap } from 'module';

test('should render for multiple expenses correctly.', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={12345} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render for single expenses correctly.', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1500} />);
    expect(wrapper).toMatchSnapshot();
});