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
const nameErrReg = /please enter a name/i;
const interviewerErrReg = /please select an interviewer/i;


// default state handling
describe('Form prop handling', () => {
  it('renders without student name if not provided', () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} onCancel={jest.fn()} onSave={jest.fn()} />);
    expect(getByPlaceholderText(placeHolderText)).toHaveValue('');
  });

  it('renders with initial student name', () => {
    const { getByTestId } = render(<Form student={student} interviewers={interviewers} onCancel={jest.fn()} onSave={jest.fn()} />);
    expect(getByTestId('student-name-input')).toHaveValue(student);
  });
});


// error handling and messaging
describe('Form validation', () => {
  it('validates that the student name is not blank', () => {
    const onSave = jest.fn();
    const { getByText } = render(<Form interviewers={interviewers} onCancel={jest.fn()} onSave={onSave} />);

    fireEvent.click(getByText('Save'));

    expect(getByText(nameErrReg)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('validates that the interviewer cannot be null', () => {
    const onSave = jest.fn();
    const { getByText } = render(<Form student={student} interviewers={interviewers} onCancel={jest.fn()} onSave={onSave} />);

    fireEvent.click(getByText('Save'));

    expect(getByText(interviewerErrReg)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });

  it('calls onSave function when the name and interviewer is defined', () => {
    const onSave = jest.fn();
    const { getByText, queryByText } = render(
      <Form
        student={student}
        interviewer={interviewers[0]}
        interviewers={interviewers}
        onCancel={jest.fn()}
        onSave={onSave}
      />);

    fireEvent.click(getByText('Save'));
    expect(queryByText(nameErrReg)).toBeNull();
    expect(queryByText(interviewerErrReg)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith(student, 1);
  });
});


// successful form submission
describe('Form submission', () => {
  it('submits the name entered by the user', () => {
    const onSave = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <Form
        interviewer={interviewers[0]}
        interviewers={interviewers}
        onCancel={jest.fn()}
        onSave={onSave} />);

    const input = getByPlaceholderText(placeHolderText);

    fireEvent.change(input, { target: { value: student } });
    fireEvent.click(getByText('Save'));

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith(student, interviewers[0].id);
  });
});


// submission improvements
describe('more Form improvement', () => {
  it('can successfully save after trying to submit an empty student name', () => {
    const onSave = jest.fn();
    const { getByText, getByPlaceholderText, queryByText, debug } = render(
      <Form
        interviewer={interviewers[0]}
        interviewers={interviewers}
        onCancel={jest.fn()}
        onSave={onSave}
      />);

    fireEvent.click(getByText('Save'));

    expect(getByText(nameErrReg)).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();

    fireEvent.change(getByPlaceholderText(placeHolderText), { target: { value: student } });
    fireEvent.click(getByText('Save'));

    expect(queryByText(nameErrReg)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith(student, interviewers[0].id);
  });
});

// cancel functionality
describe('Form on cancel', () => {
  it('calls onCancel and resets the input field', () => {
    const onCancel = jest.fn();
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Form
        interviewers={interviewers}
        name={student}
        onCancel={onCancel}
        onSave={jest.fn()}
      />
    );

    fireEvent.click(getByText('Save'));

    fireEvent.change(getByPlaceholderText(placeHolderText), {
      target: { value: student }
    });

    fireEvent.click(getByText('Cancel'));

    expect(queryByText(nameErrReg)).toBeNull();
    expect(getByPlaceholderText(placeHolderText)).toHaveValue('');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});