import { useSelector, useDispatch } from 'react-redux';
import {
  Form,
  Label,
  InputText,
  InputTel,
  Button,
} from './ContactFormStyles.js';

import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors.js';
import { addContact } from 'redux/operations.js';

const InputIdText = nanoid();

const InputIdTel = nanoid();

const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);

  return (
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        let personId = nanoid();
        if (items.find(contact => contact.name === evt.target[0].value)) {
          alert(`${evt.target[0].value} is already in contacts`);
        } else {
          const element = {
            id: personId,
            name: evt.target[0].value,
            number: evt.target[1].value,
          };

          dispatch(addContact(element));
        }

        evt.target.reset();
      }}
    >
      <Label>
        Name
        <InputText
          type="text"
          id={InputIdText}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <InputTel
          type="tel"
          id={InputIdTel}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
export { ContactForm };
