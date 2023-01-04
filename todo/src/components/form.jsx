import PropTypes from 'prop-types';
import { FormContainer } from '../assets/styles/formContainer';

export default function Form({ handleSubmit, input, setInput }) {
  return (
    <div>
      <FormContainer>
        <form onSubmit={handleSubmit} action="#">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="your task"
          />
          <button type="submit">Create task</button>
        </form>
      </FormContainer>
    </div>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};
