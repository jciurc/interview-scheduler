import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Form from 'components/Appointment/Form';

afterEach(cleanup);

// test data
const interviewers = [
  {
    id: 1,
    student: 'Sylvia Palmer',
    avatar: 'https://i.imgur.com/LpaY82x.png'
  }
];
const placeHolderText = 'Enter Student Name';
const student = 'Lydia Miller-Jones';
const onCancel = jest.fn();
const onSave = jest.fn();

// default state handling
xdescribe('Form prop handling', () => {

  it('renders without student name if not provided', () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} />);
    expect(getByPlaceholderText(placeHolderText)).toHaveValue('');
  });

  it('renders with initial student name', () => {
    const { getByTestId } = render(<Form student={student} interviewers={interviewers} />);
    expect(getByTestId('student-name-input')).toHaveValue(student);
  });
});

// error handling and messaging
describe('Form validation', () => {
  it("validates that the student name is not blank", () => {
    const { getByText } = render(<Form student={student} interviewers={interviewers} onCancel={onCancel} onSave={onSave} />);
    fireEvent.click(getByText("Save"));
    expect(getByText(/please enter your name/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("validates that the interviewer cannot be null", () => {
    const { getByText } = render(<Form student={student} interviewers={interviewers} onCancel={onCancel} onSave={onSave} />);
    fireEvent.click(getByText("Save"));
    expect(getByText(/please select an interviewer/i)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it("calls onSave function when the name and interviewer is defined", () => {
    const { getByText } = render(<Form student={student} interviewers={interviewers} interviewer={interviewer[0]} onCancel={onCancel} onSave={onSave} />);
    fireEvent.click(getByText("Save"));
    expect(queryByText(/please enter your name/i)).toBeNull();
    expect(queryByText(/please select an interviewer/i)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", 1);
  });
});